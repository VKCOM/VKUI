import * as fs from 'node:fs';
import * as path from 'node:path';
import { collectMdxFiles } from './common/collectMdxFiles.ts';
import { loadDocgen } from './common/loadDocgen.ts';
import { replacePropsTable } from './common/replacePropsTable.ts';
import { resolvePartials } from './common/resolvePartials.ts';
import { runIfMain } from './common/runIfMain.ts';
const CONTENT_DIRECTORY = path.resolve('content');
const PUBLIC_DIRECTORY = path.resolve('public');

function ensureDirectoryExists(targetPath: string) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

export function copyMdxToPublic() {
  if (!fs.existsSync(CONTENT_DIRECTORY)) {
    // eslint-disable-next-line no-console
    console.warn('⚠️ Директория content не найдена, пропускаем');
    return;
  }

  const docgen = loadDocgen();
  const mdxFiles = collectMdxFiles(CONTENT_DIRECTORY);

  // eslint-disable-next-line no-console
  console.log('🔄 Копирование MDX-файлов документации...');

  let copiedCount = 0;

  mdxFiles.forEach((absoluteMdxPath) => {
    if (absoluteMdxPath.endsWith('index.mdx')) {
      return;
    }
    const relativeMdxPath = path.relative(CONTENT_DIRECTORY, absoluteMdxPath);
    const destinationPath = path.join(PUBLIC_DIRECTORY, relativeMdxPath);

    const rawContent = fs.readFileSync(absoluteMdxPath, 'utf-8');

    const transformers: Array<(content: string) => string> = [
      (content) => resolvePartials(content, absoluteMdxPath),
      (content) => replacePropsTable(content, docgen),
    ];

    const transformedContent = transformers.reduce((result, fn) => fn(result), rawContent);

    ensureDirectoryExists(destinationPath);
    // BOM (U+FEFF) заставляет браузер распознавать кодировку UTF-8
    // независимо от Content-Type заголовка сервера
    fs.writeFileSync(destinationPath, '\uFEFF' + transformedContent, 'utf-8');

    copiedCount++;
  });

  // eslint-disable-next-line no-console
  console.log(`✅ Скопировано ${copiedCount} MDX-файлов`);
}

void runIfMain(import.meta.url, copyMdxToPublic);
