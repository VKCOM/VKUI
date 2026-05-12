import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolvePartials } from './resolvePartials.mjs';

const SCRIPT_FILE = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_FILE);
const WEBSITE_DIR = path.resolve(SCRIPT_DIR, '..');
const REPO_ROOT = path.resolve(WEBSITE_DIR, '..');
const COMPONENTS_DIR = path.join(WEBSITE_DIR, 'content', 'components');
const DOCGEN_PATH = path.join(WEBSITE_DIR, '.docgen', 'docgen.json');
const OUT_DIR = path.join(REPO_ROOT, 'mcp-data');
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
    if (entry.name === '_partials') continue;
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

const SPECIFIC_HOOKS_SLUG_TO_NAME_MAP = {
  'use-adaptivity-with-js-media-queries': 'useAdaptivityWithJSMediaQueries',
};

function hookKeyFromSlug(slug) {
  if (SPECIFIC_HOOKS_SLUG_TO_NAME_MAP[slug]) {
    return SPECIFIC_HOOKS_SLUG_TO_NAME_MAP[slug];
  }

  const base = slug.split('/').pop() || slug;
  const parts = base.split('-').filter(Boolean);
  if (parts.length < 2 || parts[0] !== 'use') {
    return componentNameFromSlug(slug);
  }
  return (
    'use' +
    parts
      .slice(1)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('')
  );
}

function extractPlaygroundExamples(body) {
  // Ищем блоки вида:
  // 1) (опционально) `{/* @example-description: ... */}`
  // 2) `<Playground ...>`
  // 3) код с ```jsx ... ```
  // 4) закрывающий `</Playground>`
  const exampleDescriptionPattern =
    '(?:\\{\\/\\*\\s*@example-description:\\s*([\\s\\S]*?)\\s*\\*\\/\\}\\s*)?';

  const playgroundOpenTagPattern = '<Playground[^>]*>';

  const jsxCodeBlockPattern = '```jsx[^\\n]*\\r?\\n([\\s\\S]*?)\\r?\\n\\s*```';

  const playgroundCloseTagPattern = '<\\/Playground>';

  const playgroundRegex = new RegExp(
    `${exampleDescriptionPattern}${playgroundOpenTagPattern}\\s*${jsxCodeBlockPattern}\\s*${playgroundCloseTagPattern}`,
    'g',
  );
  const examples = [];
  const matches = body.matchAll(playgroundRegex);
  const normalizeDescription = (value) => value.replace(/\s+/g, ' ').trim();
  let index = 0;

  for (const match of matches) {
    const description = normalizeDescription(match[1] || '');
    const code = match[2].trim();
    if (!code) {
      continue;
    }

    index += 1;
    examples.push({ code, description, index });
  }

  return examples;
}

const ENUM_VALUES_THRESHOLD = 10;

function hasStringLiteralValues(values) {
  return values.some(
    (v) => typeof v.value === 'string' && (v.value.startsWith("'") || v.value.startsWith('"')),
  );
}

function sanitizeProps(props) {
  return props.map((prop) => {
    const { type } = prop;
    if (type && type.name === 'enum' && Array.isArray(type.value)) {
      const tooLarge = type.value.length > ENUM_VALUES_THRESHOLD;
      const noLiterals = !hasStringLiteralValues(type.value);
      if (tooLarge || noLiterals) {
        return { ...prop, type: { name: type.name, raw: type.raw } };
      }
    }
    return prop;
  });
}

function formatExamplesText(examples) {
  const SEPARATOR = '\n\n---------------------------------\n\n';
  return examples
    .map((example) => {
      const parts = [];
      if (example.description) {
        parts.push(example.description);
      }
      parts.push(example.code);
      return parts.join('\n\n');
    })
    .join(SEPARATOR);
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

  for (const filePath of mdxFiles) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const slug = slugFromPath(filePath);
    const itemName = isHook(slug) ? hookKeyFromSlug(slug) : componentNameFromSlug(slug);
    const description = data.description || '';
    const props = docgen[itemName] || [];
    const resolvedBody = resolvePartials(body, filePath);
    const playgroundExamples = extractPlaygroundExamples(resolvedBody);

    const listItem = {
      name: itemName,
      slug,
      description,
      examplesCount: playgroundExamples.length,
    };
    const detailPayload = {
      name: itemName,
      slug,
      description,
      props: sanitizeProps(props),
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

    if (playgroundExamples.length > 0) {
      const examplesText = formatExamplesText(playgroundExamples);
      const examplesOutPath = path.join(OUT_EXAMPLES_DIR, `${slug}.txt`);
      ensureDir(path.dirname(examplesOutPath));
      fs.writeFileSync(examplesOutPath, examplesText);
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, 'components.json'), JSON.stringify(components, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'hooks.json'), JSON.stringify(hooks, null, 2));

  // eslint-disable-next-line no-console
  console.log('✅ MCP данные сгенерированы.');
}

if (process.argv[1] === SCRIPT_FILE) {
  generateMcpData();
}
