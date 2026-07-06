import fs from 'node:fs';
import path from 'node:path';
import { collectMdxFiles } from './common/collectMdxFiles.mjs';
import { parseFrontmatter } from './common/parseFrontmatter.mjs';
import { componentNameFromSlug } from './common/componentNameFromSlug.mjs';

const CONTENT_DIRECTORY = path.resolve('content');
const PUBLIC_DIRECTORY = path.resolve('public');
const SITE_URL = 'https://vkui.io';

const SECTION_ORDER = ['overview', 'components', 'integrations', 'migrations', 'blog'];

const SECTION_TITLES = {
  overview: 'Начало работы',
  components: 'Компоненты',
  integrations: 'Интеграции',
  migrations: 'Миграции',
  blog: 'Блог',
};

function getPageTitle(fileName) {
  const slug = fileName.replace(/\.mdx$/, '');
  return componentNameFromSlug(slug);
}

function generateLlmsTxt() {
  if (!fs.existsSync(CONTENT_DIRECTORY)) {
    console.warn('⚠️ Директория content не найдена, пропускаем генерацию llms.txt');
    return;
  }

  const mdxFiles = collectMdxFiles(CONTENT_DIRECTORY);

  // Group files by directory
  const sections = {};
  for (const filePath of mdxFiles) {
    if (filePath.endsWith('index.mdx')) continue;

    const relativePath = path.relative(CONTENT_DIRECTORY, filePath);
    const parts = relativePath.split(path.sep);
    const dirName = parts[0];
    const fileName = path.basename(filePath);

    if (!sections[dirName]) {
      sections[dirName] = [];
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = parseFrontmatter(content);
    const title = frontmatter.title || getPageTitle(fileName);

    const basePath = process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH || '';
    const url = path.join(SITE_URL, basePath, relativePath);

    sections[dirName].push({
      title,
      description: frontmatter.description || '',
      url,
    });
  }

  const orderedSections = SECTION_ORDER.filter((s) => sections[s]);
  for (const s of Object.keys(sections)) {
    if (!orderedSections.includes(s)) {
      orderedSections.push(s);
    }
  }

  const lines = [
    `# VKUI`,
    '',
    `VKUI — библиотека адаптивных React-компонентов для создания мобильных и веб-приложений.`,
    `Документация содержит руководства по началу работы, описания компонентов, инструкции по интеграции и миграции.`,
    '',
  ];

  for (const sectionKey of orderedSections) {
    const pages = sections[sectionKey];
    if (!pages || pages.length === 0) continue;

    const sectionTitle = SECTION_TITLES[sectionKey] || sectionKey;
    lines.push(`## ${sectionTitle}`);
    lines.push('');

    for (const page of pages) {
      const description = page.description ? `: ${page.description}` : '';
      lines.push(`- [${page.title}](${page.url})${description}`);
    }

    lines.push('');
  }

  // BOM заставляет браузер распознавать кодировку UTF-8
  // независимо от Content-Type заголовка сервера
  fs.writeFileSync(path.join(PUBLIC_DIRECTORY, 'llms.txt'), '﻿' + lines.join('\n'), 'utf-8');

  const totalPages = orderedSections.reduce((sum, s) => sum + (sections[s]?.length || 0), 0);
  // eslint-disable-next-line no-console
  console.log(`✅ Сгенерирован llms.txt (${totalPages} страниц)`);
}

generateLlmsTxt();
