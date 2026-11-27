import * as fs from 'node:fs';
import * as path from 'node:path';
import { SITE_URL } from '../lib/metadata.ts';
import { componentNameFromSlug } from './common/componentNameFromSlug.ts';
import {
  collectWebsiteDocumentationPages,
  CONTENT_DIRECTORY,
  getWebsiteMarkdownPath,
} from './common/documentationMarkdown.ts';
import { parseFrontmatter } from './common/parseFrontmatter.ts';
import { runIfMain } from './common/runIfMain.ts';

const PUBLIC_DIRECTORY = path.resolve(import.meta.dirname, '../public');

const SECTION_ORDER = ['overview', 'components', 'icons', 'integrations', 'migrations', 'blog'];

const SECTION_TITLES: Record<string, string> = {
  overview: 'Начало работы',
  components: 'Компоненты',
  icons: 'Иконки',
  integrations: 'Интеграции',
  migrations: 'Миграции',
  blog: 'Блог',
};

interface PageMeta {
  title: string;
  description: string;
  url: string;
}

function getPageTitle(fileName: string): string {
  const slug = fileName.replace(/\.mdx$/, '');
  return componentNameFromSlug(slug);
}

export function renderLlmsTxt(
  contentDirectory: string,
  mdxFiles: readonly string[],
  getPageUrl: (relativePath: string) => string,
  format: 'llms' | 'sitemap' = 'llms',
) {
  const sections: Record<string, PageMeta[]> = {};
  for (const filePath of mdxFiles) {
    const relativePath = path.relative(contentDirectory, filePath).split(path.sep).join('/');
    const [dirName] = relativePath.split('/');
    const fileName = path.basename(filePath);

    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = parseFrontmatter(content);
    if (format === 'sitemap' && frontmatter.other?.hidden) {
      continue;
    }
    const title =
      frontmatter.title || (relativePath === 'icons/index.mdx' ? 'Иконки' : getPageTitle(fileName));

    (sections[dirName] ??= []).push({
      title,
      description: frontmatter.description || '',
      url: getPageUrl(relativePath),
    });
  }

  const orderedSections = SECTION_ORDER.filter((s) => sections[s]);
  for (const s of Object.keys(sections)) {
    if (!orderedSections.includes(s)) {
      orderedSections.push(s);
    }
  }

  const lines =
    format === 'sitemap'
      ? ['# Карта документации VKUI', '']
      : [
          '# VKUI',
          '',
          '> VKUI — библиотека адаптивных React-компонентов для создания мобильных и веб-приложений.',
          '',
          'Документация содержит руководства по началу работы, описания компонентов, инструкции по интеграции и миграции.',
          '',
        ];

  for (const sectionKey of orderedSections) {
    const pages = sections[sectionKey];
    if (!pages || pages.length === 0) {
      continue;
    }

    const sectionTitle = SECTION_TITLES[sectionKey] || sectionKey;
    lines.push(`## ${sectionTitle}`);
    lines.push('');

    for (const page of pages) {
      const description = page.description ? `: ${page.description}` : '';
      lines.push(`- [${page.title}](${page.url})${description}`);
    }

    lines.push('');
  }

  return lines.join('\n');
}

export function generateLlmsTxt() {
  if (!fs.existsSync(CONTENT_DIRECTORY)) {
    // eslint-disable-next-line no-console
    console.warn('⚠️ Директория content не найдена, пропускаем генерацию llms.txt');
    return;
  }

  const mdxFiles = collectWebsiteDocumentationPages();
  const basePath = process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH || '';
  const index = renderLlmsTxt(
    CONTENT_DIRECTORY,
    mdxFiles,
    (relativePath) => new URL(`${basePath}/${getWebsiteMarkdownPath(relativePath)}`, SITE_URL).href,
  );
  const sitemap = renderLlmsTxt(
    CONTENT_DIRECTORY,
    mdxFiles,
    (relativePath) =>
      new URL(
        `${basePath}/${getWebsiteMarkdownPath(relativePath).replace(/\.mdx$/, '/')}`,
        SITE_URL,
      ).href,
    'sitemap',
  );

  // BOM заставляет браузер распознавать кодировку UTF-8
  // независимо от Content-Type заголовка сервера
  fs.writeFileSync(path.join(PUBLIC_DIRECTORY, 'llms.txt'), '\uFEFF' + index, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIRECTORY, 'sitemap.md'), sitemap, 'utf-8');

  // eslint-disable-next-line no-console
  console.log(`✅ Сгенерирован llms.txt (${mdxFiles.length} страниц)`);
}

void runIfMain(import.meta.url, generateLlmsTxt);
