import * as fs from 'node:fs';
import * as path from 'node:path';
import { visit } from 'unist-util-visit';
import { SITE_URL } from '../lib/metadata.ts';
import {
  collectDocumentationPages,
  CONTENT_DIRECTORY,
  readDocumentationMarkdown,
} from './common/documentationMarkdown.ts';
import { stringifyMarkdown } from './common/mdxToMarkdown.ts';
import { runIfMain } from './common/runIfMain.ts';
import { generateProps } from './generate-props/generate-props.ts';

const PACKAGE_DOCUMENTATION_DIRECTORY = path.resolve(
  import.meta.dirname,
  '../../packages/vkui/docs',
);

async function generatePackageDocs() {
  const mdxFiles = collectDocumentationPages();
  if (mdxFiles.length === 0) {
    throw new Error(`Страницы документации не найдены в ${CONTENT_DIRECTORY}`);
  }

  const docgen = generateProps();
  const pages = new Map<string, string>();

  for (const absoluteMdxPath of mdxFiles) {
    const relativePath = path.relative(CONTENT_DIRECTORY, absoluteMdxPath).replace(/\.mdx$/, '');
    const markdown = await readDocumentationMarkdown(absoluteMdxPath, docgen);

    // Якоря из MDX зависят от сайта, поэтому ссылки из npm ведут на страницы vkui.io.
    const pageUrl = new URL(`/${relativePath.split(path.sep).join('/')}/`, SITE_URL);
    visit(markdown, (node) => {
      if ('url' in node && !/^[a-z][a-z\d+.-]*:/i.test(node.url)) {
        node.url = new URL(node.url, pageUrl).href;
      }
    });

    pages.set(
      path.join(PACKAGE_DOCUMENTATION_DIRECTORY, `${relativePath}.md`),
      stringifyMarkdown(markdown),
    );
  }

  fs.rmSync(PACKAGE_DOCUMENTATION_DIRECTORY, { recursive: true, force: true });
  for (const [destinationPath, markdown] of pages) {
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    fs.writeFileSync(destinationPath, markdown, 'utf-8');
  }

  // eslint-disable-next-line no-console
  console.log(`✅ Сгенерировано ${pages.size} Markdown-файлов для npm`);
}

void runIfMain(import.meta.url, generatePackageDocs);
