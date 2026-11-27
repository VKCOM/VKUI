import * as fs from 'node:fs';
import * as path from 'node:path';
import { collectMdxFiles } from './collectMdxFiles.ts';
import type { DocgenProps } from './loadDocgen.ts';
import { parseMdxToMarkdown, stringifyMarkdown } from './mdxToMarkdown.ts';
import { resolvePartials } from './resolvePartials.ts';

export const CONTENT_DIRECTORY = path.resolve(import.meta.dirname, '../../content');

export function collectDocumentationPages() {
  return collectMdxFiles(CONTENT_DIRECTORY).filter(
    (filePath) => path.basename(filePath) !== 'index.mdx',
  );
}

const ICONS_PAGE = 'icons/index.mdx';

export function collectWebsiteDocumentationPages() {
  const iconsPage = path.join(CONTENT_DIRECTORY, ICONS_PAGE);
  return collectMdxFiles(CONTENT_DIRECTORY)
    .filter((filePath) => filePath === iconsPage || path.basename(filePath) !== 'index.mdx')
    .sort();
}

export function getWebsiteMarkdownPath(relativePath: string) {
  return relativePath === ICONS_PAGE ? 'icons.mdx' : relativePath;
}

export async function readDocumentationMarkdown(filePath: string, docgen: DocgenProps) {
  const source = fs.readFileSync(filePath, 'utf-8');
  // Преобразуем partial отдельно: импорты кода разрешаются относительно его пути.
  const resolvedContent = await resolvePartials(source, filePath, async (partial, partialPath) =>
    stringifyMarkdown(await parseMdxToMarkdown(partial, partialPath, docgen)),
  );
  return parseMdxToMarkdown(resolvedContent, filePath, docgen);
}
