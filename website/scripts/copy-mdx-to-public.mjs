import fs from 'node:fs';
import path from 'node:path';
import { replacePropsTable } from './common/replacePropsTable.mjs';
import { collectMdxFiles } from './common/collectMdxFiles.mjs';
import { loadDocgen } from './common/loadDocgen.mjs';

const CONTENT_DIRECTORY = path.resolve('content');
const PUBLIC_DIRECTORY = path.resolve('public');

function ensureDirectoryExists(targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

function createIndexAliasPath(relativeMdxPath) {
  if (path.basename(relativeMdxPath) !== 'index.mdx') {
    return undefined;
  }

  const parentDirectory = path.dirname(relativeMdxPath);

  return parentDirectory === '.'
    ? path.join(PUBLIC_DIRECTORY, 'index.mdx')
    : path.join(PUBLIC_DIRECTORY, `${parentDirectory}.mdx`);
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
    const relativeMdxPath = path.relative(CONTENT_DIRECTORY, absoluteMdxPath);
    const destinationPath = path.join(PUBLIC_DIRECTORY, relativeMdxPath);

    const rawContent = fs.readFileSync(absoluteMdxPath, 'utf-8');
    const transformedContent = replacePropsTable(rawContent, docgen);

    ensureDirectoryExists(destinationPath);
    fs.writeFileSync(destinationPath, transformedContent, 'utf-8');

    const indexAliasPath = createIndexAliasPath(relativeMdxPath);
    if (indexAliasPath) {
      ensureDirectoryExists(indexAliasPath);
      fs.writeFileSync(indexAliasPath, transformedContent, 'utf-8');
    }

    copiedCount++;
  });

  // eslint-disable-next-line no-console
  console.log(`✅ Скопировано ${copiedCount} MDX-файлов`);
}

copyMdxToPublic();
