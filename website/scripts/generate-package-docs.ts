import * as fs from 'node:fs';
import * as path from 'node:path';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { SITE_URL } from '../lib/metadata.ts';
import { transformer as stripHeadingTags } from '../remark-plugins/remarkHeading.mjs';
import { transformer as slugifyHeadings } from '../remark-plugins/remarkSlugify.mjs';
import {
  collectDocumentationPages,
  CONTENT_DIRECTORY,
  readDocumentationMarkdown,
} from './common/documentationMarkdown.ts';
import { stringifyMarkdown } from './common/mdxToMarkdown.ts';
import { runIfMain } from './common/runIfMain.ts';
import { renderLlmsTxt } from './generate-llms-txt.ts';
import { generateProps } from './generate-props/generate-props.ts';

const PACKAGE_DOCUMENTATION_DIRECTORY = path.resolve(
  import.meta.dirname,
  '../../packages/vkui/docs',
);

async function addHeadingAnchors(markdown: Root) {
  await stripHeadingTags()(markdown);
  await slugifyHeadings()(markdown);
  visit(markdown, 'heading', (node, index, parent) => {
    const id = node.data?.hProperties?.id;
    if (typeof id === 'string' && id && index !== undefined && parent) {
      const name = id.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
      parent.children.splice(index, 0, { type: 'html', value: `<a name="${name}"></a>` });
      return index + 2;
    }
    return undefined;
  });
}

async function generatePackageDocs() {
  const mdxFiles = collectDocumentationPages();
  if (mdxFiles.length === 0) {
    throw new Error(`Страницы документации не найдены в ${CONTENT_DIRECTORY}`);
  }

  const docgen = generateProps();
  const filesByRoute = new Map(
    mdxFiles.map((filePath) => [
      `/${path
        .relative(CONTENT_DIRECTORY, filePath)
        .split(path.sep)
        .join('/')
        .replace(/\.mdx$/, '')}`,
      filePath,
    ]),
  );
  const pages = new Map<string, string>();

  for (const [route, absoluteMdxPath] of filesByRoute) {
    const markdown = await readDocumentationMarkdown(absoluteMdxPath, docgen);
    await addHeadingAnchors(markdown);

    const pageUrl = new URL(`${route}/`, SITE_URL);
    visit(markdown, (node) => {
      if (!('url' in node)) {
        return;
      }

      const target = URL.parse(node.url, pageUrl);
      if (!target) {
        return;
      }
      const targetRoute = target.pathname.replace(/\/$/, '');
      if (
        node.type === 'image' ||
        target.origin !== pageUrl.origin ||
        !filesByRoute.has(targetRoute)
      ) {
        if (!/^[a-z][a-z\d+.-]*:/i.test(node.url)) {
          node.url = target.href;
        }
        return;
      }

      if (!node.url.startsWith('#')) {
        const targetPath = path.posix.relative(path.posix.dirname(route), `${targetRoute}.md`);
        node.url = `${targetPath}${target.search}${target.hash}`;
      }
    });

    pages.set(
      path.join(PACKAGE_DOCUMENTATION_DIRECTORY, `${route.slice(1)}.md`),
      stringifyMarkdown(markdown),
    );
  }

  const llmsTxt = renderLlmsTxt(CONTENT_DIRECTORY, mdxFiles, (relativePath) =>
    relativePath.replace(/\.mdx$/, '.md'),
  );
  fs.rmSync(PACKAGE_DOCUMENTATION_DIRECTORY, { recursive: true, force: true });
  for (const [destinationPath, markdown] of pages) {
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    fs.writeFileSync(destinationPath, markdown, 'utf-8');
  }
  fs.writeFileSync(path.join(PACKAGE_DOCUMENTATION_DIRECTORY, 'llms.txt'), llmsTxt, 'utf-8');

  // eslint-disable-next-line no-console
  console.log(`✅ Сгенерировано ${pages.size} Markdown-файлов и llms.txt для npm`);
}

void runIfMain(import.meta.url, generatePackageDocs);
