import * as fs from 'node:fs';
import * as path from 'node:path';
import {
  collectDocumentationPages,
  CONTENT_DIRECTORY,
  readDocumentationMarkdown,
} from './common/documentationMarkdown.ts';
import { loadDocgen } from './common/loadDocgen.ts';
import { stringifyMarkdown } from './common/mdxToMarkdown.ts';
import { runIfMain } from './common/runIfMain.ts';

const PUBLIC_DIRECTORY = path.resolve(import.meta.dirname, '../public');

export async function copyMdxToPublic() {
  if (!fs.existsSync(CONTENT_DIRECTORY)) {
    // eslint-disable-next-line no-console
    console.warn('⚠️ Директория content не найдена, пропускаем');
    return;
  }

  const docgen = loadDocgen();
  const mdxFiles = collectDocumentationPages();

  // eslint-disable-next-line no-console
  console.log('🔄 Преобразование MDX-файлов документации в Markdown...');

  for (const absoluteMdxPath of mdxFiles) {
    const relativeMdxPath = path.relative(CONTENT_DIRECTORY, absoluteMdxPath);
    const destinationPath = path.join(PUBLIC_DIRECTORY, relativeMdxPath);
    const markdown = await readDocumentationMarkdown(absoluteMdxPath, docgen);

    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    // BOM (U+FEFF) заставляет браузер распознавать кодировку UTF-8
    // независимо от Content-Type заголовка сервера
    fs.writeFileSync(destinationPath, '\uFEFF' + stringifyMarkdown(markdown), 'utf-8');
  }

  // eslint-disable-next-line no-console
  console.log(`✅ Скопировано ${mdxFiles.length} MDX-файлов`);
}

void runIfMain(import.meta.url, copyMdxToPublic);
