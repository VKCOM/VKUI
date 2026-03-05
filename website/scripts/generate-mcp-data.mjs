import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const SCRIPT_FILE = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_FILE);
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'content', 'components');
const DOCGEN_PATH = path.join(ROOT_DIR, '.docgen', 'docgen.json');
const OUT_DIR = path.join(ROOT_DIR, 'public', 'mcp');
const OUT_COMPONENTS_DIR = path.join(OUT_DIR, 'components');
const OUT_HOOKS_DIR = path.join(OUT_DIR, 'hooks');
const OUT_EXAMPLES_DIR = path.join(OUT_DIR, 'examples');

function isHook(slug) {
  const base = slug.split('/').pop() || slug;
  return base.startsWith('use-');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readDocgen() {
  if (!fs.existsSync(DOCGEN_PATH)) {
    return {};
  }
  const raw = fs.readFileSync(DOCGEN_PATH, 'utf8');
  return JSON.parse(raw);
}

function collectMdxFiles(dirPath) {
  const results = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdxFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return { data: {}, body: content };
  }
  const block = match[1];
  const data = {};
  for (const line of block.split('\n')) {
    const lineMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.+)$/);
    if (!lineMatch) {
      continue;
    }
    const key = lineMatch[1];
    let value = lineMatch[2].trim();
    value = value.replace(/^['"]|['"]$/g, '');
    data[key] = value;
  }
  const body = content.slice(match[0].length);
  return { data, body };
}

function extractHeading(body) {
  const match = body.match(/^#\s+(.+?)\s*$/m);
  if (!match) {
    return null;
  }
  const heading = match[1];
  return heading.split('[')[0].trim();
}

function slugFromPath(filePath) {
  const relative = path.relative(COMPONENTS_DIR, filePath);
  return relative.replace(/\\/g, '/').replace(/\.mdx$/, '');
}

function componentNameFromSlug(slug) {
  const base = slug.split('/').pop() || slug;
  return base
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function extractPlaygroundExamples(body) {
  const playgroundRegex = /(?:^|\n)[ \t]*```jsx[^\n]*\r?\n([\s\S]*?)\r?\n[ \t]*```/g;
  const examples = [];
  const matches = body.matchAll(playgroundRegex);
  let index = 0;
  for (const match of matches) {
    const code = match[1].trim();
    if (!code) {
      continue;
    }
    index += 1;
    examples.push({ code, index });
  }
  return examples;
}

function toExampleId(slug, index) {
  return `${slug.replace(/\//g, '-')}-example-${index}`;
}

export function generateMcpData() {
  // eslint-disable-next-line no-console
  console.log('🔄 Генерация MCP данных...');
  ensureDir(OUT_COMPONENTS_DIR);
  ensureDir(OUT_HOOKS_DIR);
  ensureDir(OUT_EXAMPLES_DIR);

  const docgen = readDocgen();
  const mdxFiles = collectMdxFiles(COMPONENTS_DIR);

  const components = [];
  const hooks = [];
  const examplesIndex = [];

  for (const filePath of mdxFiles) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const slug = slugFromPath(filePath);
    const headingName = extractHeading(body);
    const itemName = headingName || componentNameFromSlug(slug);
    const description = data.description || '';
    const props = docgen[itemName] || [];
    const playgroundExamples = extractPlaygroundExamples(body);

    const itemExamples = playgroundExamples.map((example) => {
      const id = toExampleId(slug, example.index);
      const title = `Example ${example.index}`;
      const sourcePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
      return {
        id,
        component: itemName,
        componentSlug: slug,
        title,
        code: example.code,
        sourcePath,
      };
    });

    const listItem = {
      name: itemName,
      slug,
      description,
      examplesCount: itemExamples.length,
    };
    const detailPayload = {
      name: itemName,
      slug,
      description,
      props,
      exampleIds: itemExamples.map((e) => e.id),
    };

    if (isHook(slug)) {
      hooks.push(listItem);
      const hookOutPath = path.join(OUT_HOOKS_DIR, `${slug}.json`);
      ensureDir(path.dirname(hookOutPath));
      fs.writeFileSync(hookOutPath, JSON.stringify(detailPayload, null, 2));
    } else {
      components.push(listItem);
      const componentOutPath = path.join(OUT_COMPONENTS_DIR, `${slug}.json`);
      ensureDir(path.dirname(componentOutPath));
      fs.writeFileSync(componentOutPath, JSON.stringify(detailPayload, null, 2));
    }

    for (const example of itemExamples) {
      const exampleOutPath = path.join(OUT_EXAMPLES_DIR, `${example.id}.json`);
      fs.writeFileSync(exampleOutPath, JSON.stringify(example, null, 2));
      examplesIndex.push(example);
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, 'components.json'), JSON.stringify(components, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'hooks.json'), JSON.stringify(hooks, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'examples.json'), JSON.stringify(examplesIndex, null, 2));

  // eslint-disable-next-line no-console
  console.log('✅ MCP данные сгенерированы.');
}

if (process.argv[1] === SCRIPT_FILE) {
  generateMcpData();
}
