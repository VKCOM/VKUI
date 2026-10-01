import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { gunzipSync } from 'node:zlib';
import { decodedMappings, TraceMap } from '@jridgewell/trace-mapping';
import postcss, { type Rule } from 'postcss';

type Interval = [number, number];
type CoverageSource = { lines: Map<number, number>; content: string };
type CoverageFile = {
  js: Array<{
    url: string;
    source: string;
    functions: Array<{
      ranges: Array<{ startOffset: number; endOffset: number; count: number }>;
    }>;
  }>;
  css: Array<{
    url: string;
    text: string;
    ranges: Array<{ start: number; end: number }>;
  }>;
};
type JsCoverageEntry = CoverageFile['js'][number];
type CssCoverageEntry = CoverageFile['css'][number];

const outputDir = path.resolve('__diff_output__');
const reportDir = path.resolve('coverage/playwright');

const reportOnly = process.argv.includes('--report-only');
const run = reportOnly
  ? null
  : spawnSync(
      'yarn',
      [
        'run',
        '-T',
        'playwright',
        'test',
        '--config',
        'playwright-ct.config.ts',
        ...process.argv.slice(2),
      ],
      {
        stdio: 'inherit',
        env: { ...process.env, PLAYWRIGHT_COVERAGE: '1' },
      },
    );

if (run?.error) {
  throw run.error;
}

const findCoverageFiles = async (directory: string): Promise<string[]> => {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return findCoverageFiles(entryPath);
      }
      return entry.name === 'coverage.json.gz' ? [entryPath] : [];
    }),
  );
  return paths.flat();
};

const mergeIntervals = (intervals: Interval[]): Interval[] => {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged: Interval[] = [];
  for (const interval of intervals) {
    const last = merged.at(-1);
    if (last && interval[0] <= last[1]) {
      last[1] = Math.max(last[1], interval[1]);
    } else {
      merged.push([...interval]);
    }
  }
  return merged;
};

const usedJSIntervals = (functions: CoverageFile['js'][number]['functions']): Interval[] => {
  const used: Interval[] = [];
  const events = functions
    .flatMap(({ ranges }) => ranges)
    .flatMap(({ startOffset, endOffset, count }, id) => [
      { offset: startOffset, kind: 1, endOffset, count, id },
      { offset: endOffset, kind: 0, endOffset, count, id },
    ]);
  events.sort(
    (a, b) =>
      a.offset - b.offset ||
      a.kind - b.kind ||
      (a.kind === 1 ? b.endOffset - a.endOffset || b.count - a.count : 0),
  );
  const active: Array<{ count: number; id: number }> = [];
  let previous = events[0]?.offset;
  for (const event of events) {
    if (active.at(-1)?.count && previous != null && event.offset > previous) {
      used.push([previous, event.offset]);
    }
    if (event.kind === 0) {
      active.splice(
        active.findIndex(({ id }) => id === event.id),
        1,
      );
    } else {
      active.push(event);
    }
    previous = event.offset;
  }
  return used;
};

const resources = new Map<
  string,
  {
    type: 'js' | 'css';
    path: string;
    sourceHash: string;
    totalBytes: number;
    intervals: Interval[];
  }
>();
const sourceFiles = new Map<string, CoverageSource>();
const sourceMaps = new Map<string, TraceMap | null>();
const cssSources = new Map<string, string>();
const repoRoot = path.resolve('../..');
const sourceRoot = path.resolve('src');
type GlobalCssRule = { filePath: string; line: number; declarations: Set<string> };
const globalCssRules = new Map<string, GlobalCssRule[]>();

const normalizeCss = (value: string) => value.replace(/\s+/g, ' ').trim();
const declarationsOf = (rule: Rule) =>
  new Set(
    rule.nodes
      .filter((node) => node.type === 'decl')
      .map((declaration) => `${declaration.prop}:${normalizeCss(declaration.value)}`),
  );

for (const entry of await readdir(path.join(sourceRoot, 'styles'), { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.css') || entry.name.endsWith('.module.css')) {
    continue;
  }
  const absolutePath = path.join(sourceRoot, 'styles', entry.name);
  const filePath = path.relative(repoRoot, absolutePath).split(path.sep).join('/');
  const content = await readFile(absolutePath, 'utf8');
  const coverage: CoverageSource = { lines: new Map(), content };
  postcss.parse(content, { from: filePath }).walkRules((rule) => {
    const line = rule.source?.start?.line ?? 1;
    coverage.lines.set(line, 0);
    const selector = normalizeCss(rule.selector);
    const locations = globalCssRules.get(selector) ?? [];
    locations.push({ filePath, line, declarations: declarationsOf(rule) });
    globalCssRules.set(selector, locations);
  });
  if (coverage.lines.size > 0) {
    sourceFiles.set(filePath, coverage);
  }
}

const addSourceCoverage = async (assetPath: string, sourceText: string, intervals: Interval[]) => {
  const mapPath = `${assetPath}.map`;
  if (!sourceMaps.has(mapPath)) {
    try {
      const mapJson = JSON.parse(await readFile(mapPath, 'utf8'));
      sourceMaps.set(mapPath, new TraceMap(mapJson, pathToFileURL(assetPath).href));
    } catch {
      sourceMaps.set(mapPath, null);
    }
  }
  const traceMap = sourceMaps.get(mapPath);
  if (!traceMap) {
    return;
  }

  const generatedLineStarts = [0];
  for (
    let offset = sourceText.indexOf('\n');
    offset !== -1;
    offset = sourceText.indexOf('\n', offset + 1)
  ) {
    generatedLineStarts.push(offset + 1);
  }

  const originalLineCoverage = new Map();
  const resolvedSources = traceMap.resolvedSources;
  for (let index = 0; index < resolvedSources.length; index += 1) {
    let sourcePath;
    try {
      sourcePath = fileURLToPath(resolvedSources[index]);
    } catch {
      continue;
    }
    if (!sourcePath.startsWith(`${sourceRoot}${path.sep}`)) {
      continue;
    }
    const content = traceMap.sourcesContent?.[index];
    if (content == null) {
      continue;
    }
    const relativePath = path.relative(repoRoot, sourcePath).split(path.sep).join('/');
    if (sourcePath.endsWith('.css')) {
      cssSources.set(relativePath, content);
    }
    let coverage = sourceFiles.get(relativePath);
    if (!coverage) {
      coverage = { lines: new Map(), content };
      sourceFiles.set(relativePath, coverage);
    }
    originalLineCoverage.set(resolvedSources[index], coverage);
  }

  const usedIntervals = mergeIntervals(intervals);
  const mappings = decodedMappings(traceMap);
  for (let generatedLineIndex = 0; generatedLineIndex < mappings.length; generatedLineIndex += 1) {
    const lineMappings = mappings[generatedLineIndex];
    const generatedLineStart = generatedLineStarts[generatedLineIndex] ?? 0;
    const generatedLineEnd = generatedLineStarts[generatedLineIndex + 1] ?? sourceText.length;
    let intervalIndex = 0;
    for (let mappingIndex = 0; mappingIndex < lineMappings.length; mappingIndex += 1) {
      const [generatedColumn, sourceIndex, originalLine] = lineMappings[mappingIndex];
      if (sourceIndex == null || originalLine == null) {
        continue;
      }
      const source = traceMap.resolvedSources[sourceIndex];
      const coverage = source && originalLineCoverage.get(source);
      if (!coverage || source?.endsWith('.css')) {
        continue;
      }
      const line = originalLine + 1;
      coverage.lines.set(line, coverage.lines.get(line) ?? 0);

      const segmentStart = generatedLineStart + generatedColumn;
      const segmentEnd =
        generatedLineStart +
        (lineMappings[mappingIndex + 1]?.[0] ?? generatedLineEnd - generatedLineStart);
      while (
        intervalIndex < usedIntervals.length &&
        usedIntervals[intervalIndex][1] <= segmentStart
      ) {
        intervalIndex += 1;
      }
      const [usedStart, usedEnd] = usedIntervals[intervalIndex] ?? [];
      if (usedStart != null && usedStart < segmentEnd && usedEnd > segmentStart) {
        coverage.lines.set(line, 1);
      }
    }
  }
};

const addCssSourceCoverage = (sourceText: string, intervals: Interval[]) => {
  const usedIntervals = mergeIntervals(intervals);
  const moduleClasses = new Map<string, Array<{ filePath: string; line: number }>>();
  const classDefinitions = new Map<string, Map<string, number>>();
  const sourceRuleLines = new Map<string, Map<string, number[]>>();
  for (const [filePath, content] of cssSources) {
    const root = postcss.parse(content, { from: filePath });
    root.walkRules((rule) => {
      const line = rule.source?.start?.line ?? 1;
      const originalClasses = [
        ...new Set([...rule.selector.matchAll(/\.([_a-zA-Z][\w-]*)/g)].map(([, name]) => name)),
      ];
      if (originalClasses.length > 0) {
        const key = originalClasses.sort().join(':');
        const lines = sourceRuleLines.get(filePath) ?? new Map<string, number[]>();
        const ruleLines = lines.get(key) ?? [];
        ruleLines.push(line);
        lines.set(key, ruleLines);
        sourceRuleLines.set(filePath, lines);
      }
      const coverage = sourceFiles.get(filePath);
      if (coverage) {
        coverage.lines.set(line, coverage.lines.get(line) ?? 0);
      }
      for (const [, className] of rule.selector.matchAll(/\.([_a-zA-Z][\w-]*)/g)) {
        const key = `${className}:${line}`;
        const locations = moduleClasses.get(key) ?? [];
        locations.push({ filePath, line });
        moduleClasses.set(key, locations);

        if (rule.selector.trim() === `.${className}`) {
          const definitions = classDefinitions.get(filePath) ?? new Map();
          definitions.set(className, line);
          classDefinitions.set(filePath, definitions);
        }
      }
    });
  }

  const root = postcss.parse(sourceText);
  const hashCandidates = new Map<string, Map<string, Set<string>>>();
  root.walkRules((rule) => {
    for (const [, generatedClass] of rule.selector.matchAll(/\.(_[\w-]+)/g)) {
      const match = generatedClass.match(/^_(.+)_([a-z\d]+)_(\d+)$/);
      if (!match) {
        continue;
      }
      const [, originalClass, hash, lineText] = match;
      const locations = moduleClasses.get(`${originalClass}:${lineText}`) ?? [];
      const candidates = hashCandidates.get(hash) ?? new Map<string, Set<string>>();
      for (const { filePath } of locations) {
        const classes = candidates.get(filePath) ?? new Set();
        classes.add(generatedClass);
        candidates.set(filePath, classes);
      }
      hashCandidates.set(hash, candidates);
    }
  });

  const sourceByHash = new Map<string, string>();
  for (const [hash, candidates] of hashCandidates) {
    const ranked = [...candidates.entries()].sort((a, b) => b[1].size - a[1].size);
    if (ranked.length === 1 || ranked[0][1].size > ranked[1][1].size) {
      sourceByHash.set(hash, ranked[0][0]);
    }
  }

  const sourceRuleOccurrences = new Map<string, number>();
  root.walkRules((rule) => {
    const generatedClasses = [...rule.selector.matchAll(/\.(_[\w-]+)/g)].map(([, name]) => name);
    const scopedClasses = generatedClasses.flatMap((generatedClass) => {
      const match = generatedClass.match(/^_(.+)_([a-z\d]+)_(\d+)$/);
      if (!match) {
        return [];
      }
      const [, originalClass, hash, lineText] = match;
      return [{ originalClass, hash, lineText }];
    });

    const ruleSourcePaths = new Set(
      scopedClasses
        .map(({ hash }) => sourceByHash.get(hash))
        .filter((filePath) => filePath != null),
    );
    let sourceRuleLine: number | undefined;
    if (ruleSourcePaths.size === 1) {
      const [filePath] = ruleSourcePaths;
      if (typeof filePath === 'string') {
        const sourceClassesKey = [
          ...new Set(scopedClasses.map(({ originalClass }) => originalClass)),
        ]
          .sort()
          .join(':');
        const occurrenceKey = `${filePath}:${sourceClassesKey}`;
        const ruleLines = sourceRuleLines.get(filePath)?.get(sourceClassesKey);
        const occurrence = sourceRuleOccurrences.get(occurrenceKey) ?? 0;
        sourceRuleOccurrences.set(occurrenceKey, occurrence + 1);
        sourceRuleLine = ruleLines?.[occurrence];
      }
    }

    const start = rule.source?.start?.offset ?? 0;
    const end = rule.source?.end?.offset ?? start;
    if (!usedIntervals.some(([usedStart, usedEnd]) => usedStart < end && usedEnd > start)) {
      return;
    }
    const globalCandidates = globalCssRules.get(normalizeCss(rule.selector)) ?? [];
    const generatedDeclarations = declarationsOf(rule);
    const rankedGlobalCandidates = globalCandidates
      .map((candidate) => ({
        candidate,
        score: [...candidate.declarations].filter((declaration) =>
          generatedDeclarations.has(declaration),
        ).length,
      }))
      .sort((a, b) => b.score - a.score);
    const bestGlobal = rankedGlobalCandidates[0];
    if (bestGlobal?.score > 0 && bestGlobal.score > (rankedGlobalCandidates[1]?.score ?? 0)) {
      sourceFiles.get(bestGlobal.candidate.filePath)?.lines.set(bestGlobal.candidate.line, 1);
    }
    if (sourceRuleLine != null && ruleSourcePaths.size === 1) {
      const [filePath] = ruleSourcePaths;
      if (typeof filePath === 'string') {
        const coverage = sourceFiles.get(filePath);
        if (coverage) {
          coverage.lines.set(sourceRuleLine, 1);
        }
      }
    }

    for (const { originalClass, hash, lineText } of scopedClasses) {
      const filePath = sourceByHash.get(hash);
      if (!filePath) {
        continue;
      }
      const location = (moduleClasses.get(`${originalClass}:${lineText}`) ?? []).find(
        (candidate) => candidate.filePath === filePath,
      );
      if (!location) {
        continue;
      }
      const coverage = sourceFiles.get(filePath);
      if (coverage) {
        const line = classDefinitions.get(filePath)?.get(originalClass) ?? location.line;
        coverage.lines.set(line, 1);
      }
    }
  });
};

const coverageFiles = await findCoverageFiles(outputDir);
const processEntry = async (type: 'js' | 'css', entry: JsCoverageEntry | CssCoverageEntry) => {
  const source =
    type === 'js' ? (entry as JsCoverageEntry).source : (entry as CssCoverageEntry).text;
  if (!source) {
    return;
  }
  const pathname = decodeURIComponent(new URL(entry.url).pathname);
  const filePath = pathname.slice(pathname.indexOf('/assets/') + 1);
  const sourceHash = createHash('sha256').update(source).digest('hex').slice(0, 12);
  const key = `${type}:${filePath}:${sourceHash}`;
  const resource = resources.get(key) ?? {
    type,
    path: filePath,
    sourceHash,
    totalBytes: source.length,
    intervals: [],
  };
  const assetPath = path.join('playwright/.cache', filePath);
  const intervals: Interval[] =
    type === 'js'
      ? usedJSIntervals((entry as JsCoverageEntry).functions)
      : (entry as CssCoverageEntry).ranges.map(({ start, end }) => [start, end]);
  resource.intervals.push(...intervals);
  resources.set(key, resource);
  if (
    await stat(assetPath).then(
      () => true,
      () => false,
    )
  ) {
    await addSourceCoverage(assetPath, source, intervals);
  }
  if (type === 'css') {
    addCssSourceCoverage(source, intervals);
  }
};

for (const file of coverageFiles) {
  const { js, css } = JSON.parse(gunzipSync(await readFile(file)).toString()) as CoverageFile;
  for (const entry of js) {
    await processEntry('js', entry);
  }
  for (const entry of css) {
    await processEntry('css', entry);
  }
}

const files = [...resources.values()]
  .map(({ intervals, ...resource }) => {
    const coveredBytes = mergeIntervals(intervals).reduce(
      (sum, [start, end]) => sum + end - start,
      0,
    );
    return {
      ...resource,
      coveredBytes,
      percent: Number(((coveredBytes / resource.totalBytes) * 100).toFixed(2)),
    };
  })
  .sort((a, b) => a.type.localeCompare(b.type) || a.path.localeCompare(b.path));

const summary = Object.fromEntries(
  ['js', 'css'].map((type) => {
    const matching = files.filter((file) => file.type === type);
    const coveredBytes = matching.reduce((sum, file) => sum + file.coveredBytes, 0);
    const totalBytes = matching.reduce((sum, file) => sum + file.totalBytes, 0);
    return [
      type,
      {
        files: matching.length,
        coveredBytes,
        totalBytes,
        percent: totalBytes ? Number(((coveredBytes / totalBytes) * 100).toFixed(2)) : 0,
      },
    ];
  }),
);
const coveredBytes = summary.js.coveredBytes + summary.css.coveredBytes;
const totalBytes = summary.js.totalBytes + summary.css.totalBytes;
summary.total = {
  files: files.length,
  coveredBytes,
  totalBytes,
  percent: totalBytes ? Number(((coveredBytes / totalBytes) * 100).toFixed(2)) : 0,
};

await mkdir(reportDir, { recursive: true });
const reportPath = path.join(reportDir, 'coverage.json');
await writeFile(
  reportPath,
  JSON.stringify(
    {
      metric: 'used bytes in built Chromium assets',
      summary,
      files,
      sourceFiles: sourceFiles.size,
    },
    null,
    2,
  ),
);
const lcov = [...sourceFiles.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([filePath, coverage]) => {
    const lines = [...coverage.lines.entries()]
      .sort(([a], [b]) => a - b)
      .map(([line, count]) => `DA:${line},${count}`)
      .join('\n');
    const hitLines = [...coverage.lines.values()].filter((count) => count > 0).length;
    return [
      'TN:Playwright',
      `SF:${filePath}`,
      lines,
      `LF:${coverage.lines.size}`,
      `LH:${hitLines}`,
      'end_of_record',
    ].join('\n');
  })
  .join('\n');
await writeFile(path.join(reportDir, 'lcov.info'), `${lcov}\n`);
// eslint-disable-next-line no-console
console.log(`Playwright coverage (${coverageFiles.length} tests): ${reportPath}`);
// eslint-disable-next-line no-console
console.log(`JS: ${summary.js.percent}% (${summary.js.files} files)`);
// eslint-disable-next-line no-console
console.log(`CSS: ${summary.css.percent}% (${summary.css.files} files)`);
// eslint-disable-next-line no-console
console.log(`Total: ${summary.total.percent}% (${summary.total.files} files)`);
// eslint-disable-next-line no-console
console.log(`LCOV: ${sourceFiles.size} source files`);

process.exitCode = run?.status ?? 0;
