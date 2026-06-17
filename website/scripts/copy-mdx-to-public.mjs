import fs from 'node:fs';
import path from 'node:path';
import { replacePropsTable } from './common/replacePropsTable.mjs';
import { collectMdxFiles } from './common/collectMdxFiles.mjs';
import { loadDocgen } from './common/loadDocgen.mjs';
import { resolvePartials } from './common/resolvePartials.mjs';

const CONTENT_DIRECTORY = path.resolve('content');
const PUBLIC_DIRECTORY = path.resolve('public');

function ensureDirectoryExists(targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

function copyMdxToPublic() {
  if (!fs.existsSync(CONTENT_DIRECTORY)) {
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

    const transformers = [
      (content) => resolvePartials(content, absoluteMdxPath),
      (content) => replacePropsTable(content, docgen),
    ];

    const transformedContent = transformers.reduce((result, fn) => fn(result), rawContent);

    ensureDirectoryExists(destinationPath);
    // BOM (﻿) заставляет браузер распознавать кодировку UTF-8
    // независимо от Content-Type заголовка сервера
    fs.writeFileSync(destinationPath, '﻿' + transformedContent, 'utf-8');

    copiedCount++;
  });

  // eslint-disable-next-line no-console
  console.log(`✅ Скопировано ${copiedCount} MDX-файлов`);
}

copyMdxToPublic();
