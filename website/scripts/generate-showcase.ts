import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectMdxFiles } from './common/collectMdxFiles.ts';
import { resolvePartials } from './common/resolvePartials.ts';
import { runIfMain } from './common/runIfMain.ts';

const SCRIPT_FILE = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_FILE);
const WEBSITE_DIR = path.resolve(SCRIPT_DIR, '..');
const COMPONENTS_DIR = path.join(WEBSITE_DIR, 'content', 'components');
const OUT_DIR = path.join(WEBSITE_DIR, 'generated');
const OUT_FILE = path.join(OUT_DIR, 'showcase-data.json');

const IGNORED_COMPONENTS = new Set(['fixed-layout', 'modal-root', 'focus-trap']);

const GROUP_TITLES: Record<string, string> = {
  'layout': 'Раскладка',
  'forms': 'Формы и поля ввода',
  'dates': 'Работа с датами',
  'buttons': 'Кнопки',
  'navigation': 'Навигация',
  'feedback': 'Обратная связь',
  'modals': 'Модальные окна',
  'data-display': 'Отображение данных',
  'typography': 'Типографика',
  'configuration': 'Конфигурация',
  'utils': 'Утилиты',
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

interface ShowcaseFrontmatterValue {
  [key: string]: string | boolean | undefined;
}

type ShowcaseFrontmatter = Record<string, string | ShowcaseFrontmatterValue>;

interface Playground {
  code: string;
  direction: string | undefined;
  wrapper: string | undefined;
}

interface ShowcaseItem {
  name: string;
  slug: string;
  group: string;
  direction: string | undefined;
  wrapper: string | undefined;
  description: string;
  code: string;
  docsUrl: string;
}

interface SkippedItem {
  slug: string;
  reason: string;
}

function ensureDir(dirPath: string) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseFrontmatter(content: string): { data: ShowcaseFrontmatter; body: string } {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return { data: {}, body: content };
  }
  const block = match[1];
  const data: ShowcaseFrontmatter = {};
  let currentParent: string | null = null;
  for (const line of block.split('\n')) {
    const nestedMatch = line.match(/^  ([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (nestedMatch && currentParent) {
      const [, key, rawValue] = nestedMatch;
      let value = rawValue.trim();
      value = value.replace(/^['"]|['"]$/g, '');
      (data[currentParent] as ShowcaseFrontmatterValue)[key] = value === '' ? true : value;
      continue;
    }
    const lineMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!lineMatch) {
      currentParent = null;
      continue;
    }
    const [, key, rawValue] = lineMatch;
    const trimmed = rawValue.trim();
    if (trimmed === '') {
      data[key] = {};
      currentParent = key;
    } else {
      const value = trimmed.replace(/^['"]|['"]$/g, '');
      data[key] = value;
      currentParent = null;
    }
  }
  const body = content.slice(match[0].length);
  return { data, body };
}

function extractOverviewMeta(body: string): {
  group: string | undefined;
  type: string | undefined;
} {
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

function slugFromPath(filePath: string): string {
  const relative = path.relative(COMPONENTS_DIR, filePath);
  return relative.replace(/\\/g, '/').replace(/\.mdx$/, '');
}

function extractFirstPlayground(body: string): Playground | null {
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

function isHookSlug(slug: string): boolean {
  return (slug.split('/').pop() || slug).startsWith('use-');
}

function componentNameFromSlug(slug: string): string {
  const base = slug.split('/').pop() || slug;
  return base
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function toKebabCase(componentName: string): string {
  return componentName
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

function buildDocsUrl(name: string, parent?: string): string {
  if (parent) {
    return `/components/${toKebabCase(parent)}#${toKebabCase(name)}`;
  }
  return `/components/${toKebabCase(name)}`;
}

export function generateShowcaseData() {
  // eslint-disable-next-line no-console
  console.log('🔄 Генерация данных витрины компонентов...');

  ensureDir(OUT_DIR);

  const mdxFiles = collectMdxFiles(COMPONENTS_DIR);
  const items: ShowcaseItem[] = [];
  const skipped: SkippedItem[] = [];

  for (const filePath of mdxFiles) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const resolvedBody = resolvePartials(body, filePath);
    const slug = slugFromPath(filePath);

    if (IGNORED_COMPONENTS.has(slug) || isHookSlug(slug)) {
      continue;
    }

    const other = typeof data.other === 'object' ? data.other : {};

    const { group, type } = extractOverviewMeta(resolvedBody);
    if (type === 'hook') {
      continue;
    }

    const name = componentNameFromSlug(slug);
    const playground = extractFirstPlayground(resolvedBody);

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

    const description = (typeof data.description === 'string' ? data.description : '')
      .replace(/\s+/g, ' ')
      .trim();
    const docsUrl = buildDocsUrl(name, typeof other.parent === 'string' ? other.parent : undefined);

    items.push({
      name,
      slug,
      group,
      direction: playground.direction,
      wrapper: playground.wrapper,
      description,
      code: playground.code,
      docsUrl,
    });
  }

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

void runIfMain(import.meta.url, generateShowcaseData);
