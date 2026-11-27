import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { toString as markdownText } from 'mdast-util-to-string';
import { stringify as stringifyYaml } from 'yaml';
import { SITE_DESCRIPTION, SITE_URL } from '../lib/metadata.ts';
import {
  collectWebsiteDocumentationPages,
  CONTENT_DIRECTORY,
  getWebsiteMarkdownPath,
  readDocumentationMarkdown,
} from './common/documentationMarkdown.ts';
import { loadDocgen } from './common/loadDocgen.ts';
import { stringifyMarkdown } from './common/mdxToMarkdown.ts';
import { parseFrontmatterData } from './common/parseFrontmatter.ts';
import { runIfMain } from './common/runIfMain.ts';

const PUBLIC_DIRECTORY = path.resolve(import.meta.dirname, '../public');

function getLastUpdated(filePath: string) {
  // Git treats the boundary commit of a shallow checkout as a root commit.
  return spawnSync('git', ['log', '-1', '--min-parents=1', '--format=%cs', '--', filePath], {
    cwd: CONTENT_DIRECTORY,
    encoding: 'utf8',
  }).stdout?.trim();
}

export async function copyMdxToPublic() {
  if (!fs.existsSync(CONTENT_DIRECTORY)) {
    // eslint-disable-next-line no-console
    console.warn('⚠️ Директория content не найдена, пропускаем');
    return;
  }

  const docgen = loadDocgen();
  const mdxFiles = collectWebsiteDocumentationPages();
  const basePath = process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH || '';
  const sitemapUrl = new URL(`${basePath}/sitemap.md`, SITE_URL).href;

  // eslint-disable-next-line no-console
  console.log('🔄 Преобразование MDX-файлов документации в Markdown...');

  for (const absoluteMdxPath of mdxFiles) {
    const relativeMdxPath = path
      .relative(CONTENT_DIRECTORY, absoluteMdxPath)
      .split(path.sep)
      .join('/');
    const markdownPath = getWebsiteMarkdownPath(relativeMdxPath);
    const destinationPath = path.join(PUBLIC_DIRECTORY, markdownPath);
    const markdown = await readDocumentationMarkdown(absoluteMdxPath, docgen);
    const frontmatter = markdown.children[0];
    const data = frontmatter?.type === 'yaml' ? parseFrontmatterData(frontmatter.value) : {};
    if (frontmatter?.type === 'yaml') {
      markdown.children.shift();
    }
    const heading = markdown.children.find((node) => node.type === 'heading' && node.depth === 1);
    const introduction = markdown.children.find((node) => node.type === 'paragraph');
    const title =
      data.title ||
      markdownText(heading).replace(/\s*\[tag:[^\]]+\]\s*$/, '') ||
      path.basename(markdownPath, '.mdx');
    const description = data.description || markdownText(introduction) || SITE_DESCRIPTION;
    const lastUpdated =
      data.last_updated || getLastUpdated(absoluteMdxPath) || data.date?.replace(/\//g, '-');

    // Hidden component pages are included in their parent page in HTML.
    const parentSlug =
      data.other?.hidden && data.other.parent?.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    const pagePath = parentSlug ? `components/${parentSlug}/` : markdownPath.replace(/\.mdx$/, '/');
    const canonicalUrl = new URL(`${basePath}/${pagePath}`, SITE_URL).href;

    markdown.children.unshift({
      type: 'yaml',
      value: stringifyYaml({
        ...data,
        title,
        description,
        ...(lastUpdated && { last_updated: lastUpdated }),
        canonical_url: canonicalUrl,
      }).trimEnd(),
    });
    markdown.children.push(
      { type: 'heading', depth: 2, children: [{ type: 'text', value: 'Sitemap' }] },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: sitemapUrl,
            children: [{ type: 'text', value: 'Карта документации VKUI' }],
          },
        ],
      },
    );

    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    // BOM (U+FEFF) заставляет браузер распознавать кодировку UTF-8
    // независимо от Content-Type заголовка сервера
    fs.writeFileSync(destinationPath, '\uFEFF' + stringifyMarkdown(markdown), 'utf-8');
  }

  // eslint-disable-next-line no-console
  console.log(`✅ Скопировано ${mdxFiles.length} MDX-файлов`);
}

void runIfMain(import.meta.url, copyMdxToPublic);
