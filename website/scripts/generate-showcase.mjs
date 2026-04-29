import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_FILE = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_FILE);
const WEBSITE_DIR = path.resolve(SCRIPT_DIR, '..');
const COMPONENTS_DIR = path.join(WEBSITE_DIR, 'content', 'components');
const OUT_DIR = path.join(WEBSITE_DIR, 'generated');
const OUT_FILE = path.join(OUT_DIR, 'showcase-data.json');

const IGNORED_COMPONENTS = new Set(['fixed-layout', 'modal-root', 'focus-trap']);

const GROUP_TITLES = {
  layout: 'Раскладка',
  forms: 'Формы и поля ввода',
  dates: 'Работа с датами',
  buttons: 'Кнопки',
  navigation: 'Навигация',
  feedback: 'Обратная связь',
  modals: 'Модальные окна',
  'data-display': 'Отображение данных',
  typography: 'Типографика',
  configuration: 'Конфигурация',
  utils: 'Утилиты',
};

const GROUP_ORDER = [
  'layout',
  'forms',
  'dates',
  'buttons',
  'navigation',
  'feedback',
  'modals',
  'data-display',
  'typography',
  'configuration',
  'utils',
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
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
  // Убираем тег `[tag:...]` и markdown-обёртки (`~`, `**`, `*`, `_`).
  return match[1]
    .split('[')[0]
    .replace(/[~*_]+/g, '')
    .trim();
}

function extractOverviewMeta(body) {
  // Ищем: <Overview group="..." type="..." ...>
  const match = body.match(/<Overview\b([^>]*)>/);
  if (!match) {
    return { group: undefined, type: undefined };
  }
  const attrs = match[1];
  const groupMatch = attrs.match(/group="([^"]+)"/);
  const typeMatch = attrs.match(/type="([^"]+)"/);
  return {
    group: groupMatch ? groupMatch[1] : undefined,
    type: typeMatch ? typeMatch[1] : undefined,
  };
}

function slugFromPath(filePath) {
  const relative = path.relative(COMPONENTS_DIR, filePath);
  return relative.replace(/\\/g, '/').replace(/\.mdx$/, '');
}

/**
 * Извлекает первый Playground-блок и его JSX-код.
 * Регулярка устроена так, чтобы:
 *  - захватить опциональное описание `{/* @example-description: ... *\/}` перед открывающим тегом;
 *  - корректно обработать теги с многострочными атрибутами (`<Playground\n  prop=...>`)
 *    через `[\\s\\S]*?` вместо `[^>]`;
 *  - вытащить только jsx-блок (`\`\`\`jsx ... \`\`\``).
 */
function extractFirstPlayground(body) {
  const regex =
    /<Playground\b([\s\S]*?)>\s*```jsx[^\n]*\r?\n([\s\S]*?)\r?\n\s*```\s*<\/Playground>/;

  const match = body.match(regex);
  if (!match) {
    return null;
  }

  const attrsRaw = match[1] || '';
  const code = match[2].trim();

  const directionMatch = attrsRaw.match(/direction="([^"]+)"/);
  const wrapperMatch = attrsRaw.match(/Wrapper=\{([A-Za-z0-9_$]+)\}/);

  return {
    code,
    direction: directionMatch ? directionMatch[1] : undefined,
    wrapper: wrapperMatch ? wrapperMatch[1] : undefined,
  };
}

function isHookSlug(slug) {
  return (slug.split('/').pop() || slug).startsWith('use-');
}

export function generateShowcaseData() {
  // eslint-disable-next-line no-console
  console.log('🔄 Генерация данных витрины компонентов...');

  ensureDir(OUT_DIR);

  const mdxFiles = collectMdxFiles(COMPONENTS_DIR);
  const items = [];
  const skipped = [];

  for (const filePath of mdxFiles) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const slug = slugFromPath(filePath);

    if (IGNORED_COMPONENTS.has(slug) || isHookSlug(slug)) {
      continue;
    }

    const { group, type } = extractOverviewMeta(body);
    if (type === 'hook') {
      continue;
    }

    const name = extractHeading(body);
    const playground = extractFirstPlayground(body);

    if (!name) {
      skipped.push({ slug, reason: 'no-name' });
      continue;
    }
    if (!playground) {
      skipped.push({ slug, reason: 'no-playground' });
      continue;
    }
    if (!group) {
      skipped.push({ slug, reason: 'no-group' });
      continue;
    }

    // Описание компонента берём из frontmatter — оно описывает компонент в целом.
    // Описание из `@example-description` относится к конкретному примеру и менее
    // полезно в карточке витрины.
    const description = (data.description || '').replace(/\s+/g, ' ').trim();

    items.push({
      name,
      slug,
      group,
      direction: playground.direction,
      wrapper: playground.wrapper,
      description,
      code: playground.code,
    });
  }

  // Сортируем по имени для стабильного вывода.
  items.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

  const groups = GROUP_ORDER.map((groupKey) => ({
    key: groupKey,
    title: GROUP_TITLES[groupKey] || groupKey,
    items: items.filter((item) => item.group === groupKey),
  })).filter((group) => group.items.length > 0);

  const payload = {
    generatedAt: new Date().toISOString(),
    groups,
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2));

  // eslint-disable-next-line no-console
  console.log(
    `✅ Витрина: ${items.length} компонентов, ${groups.length} групп. Пропущено: ${skipped.length}.`,
  );

  if (skipped.length > 0) {
    // eslint-disable-next-line no-console
    console.log(
      `   Пропущенные: ${skipped.map((skip) => `${skip.slug} (${skip.reason})`).join(', ')}`,
    );
  }
}

if (process.argv[1] === SCRIPT_FILE) {
  generateShowcaseData();
}
