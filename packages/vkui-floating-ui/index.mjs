import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import swc from '@swc/core';
import pkg from './package.json' assert { type: 'json' };

function removePathFromStart(subPackagePath) {
  return subPackagePath.replace(/^\.\//, '');
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const __filename = url.fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(__filename);

const FLOATING_UI_SUB_PACKAGES_ENTRIES_MAP = Object.entries(pkg.exports).filter(
  ([subPackagePath]) => !subPackagePath.includes('package.json'),
);

const FLOATING_UI_SUB_PACKAGES_NAMES_REGEX_GROUP = FLOATING_UI_SUB_PACKAGES_ENTRIES_MAP.map(
  ([subPackagePath]) => removePathFromStart(subPackagePath),
)
  .join('|')
  .replace('/', '\\/');
const FLOATING_UI_SUB_PACKAGES_NAME_REGEX = RegExp(
  `"@floating-ui\\/(${FLOATING_UI_SUB_PACKAGES_NAMES_REGEX_GROUP})"`,
  'g',
);

const NODE_MODULES_PATH = path.resolve(__dirname, '../../node_modules');
const FLOATING_UI_PATH = path.join(NODE_MODULES_PATH, '@floating-ui');
const OUTPUT_DIR = './dist';

/**
 * Создание папки, если не существует
 *
 * @param {string} folderName путь к папке
 */
async function createFolder(folderName) {
  if (!fs.existsSync(folderName)) {
    await fsPromises.mkdir(folderName);
  }
}

function getTypeTemplate(subPackagePath) {
  const normalizedPath = removePathFromStart(subPackagePath);
  return `declare module '${pkg.name}/${normalizedPath}' {
  export * from '@floating-ui/${normalizedPath}';
}`;
}

function getPackageJSONTemplate(subPackagePath) {
  const subPackageName = removePathFromStart(subPackagePath).replaceAll('/', '.');
  return `{
  "sideEffects": false,
  "main": "./dist/floating-ui.${subPackageName}.umd.js",
  "module": "./dist/floating-ui.${subPackageName}.esm.js",
  "types": "./dist/floating-ui.${subPackageName}.d.ts"
}`;
}

/**
 * Собираем отдельный файл
 *
 * @param {string} filePath путь к файлу
 * @param {string} outputDir выходная папка
 * @param {'es6' | 'commonjs'} moduleType тип модуля
 */
async function build(filePath, outputDir, moduleType) {
  const filename = path.basename(filePath);
  const outputFilePath = path.join(outputDir, filename);

  const output = await swc.transformFile(filePath, {
    module: {
      type: moduleType,
    },
    jsc: {
      externalHelpers: true,
      target: 'es5',
    },
    cwd: __dirname,
  });

  const outputCode = output.code.replace(FLOATING_UI_SUB_PACKAGES_NAME_REGEX, (_, name) => {
    const [, foundFilesName] =
      FLOATING_UI_SUB_PACKAGES_ENTRIES_MAP.find(([subPackage]) => subPackage.includes(name)) || [];

    if (!foundFilesName) {
      return;
    }

    const { module: subPackageESMBundlePath, default: subPackageUMDBundlePath } = foundFilesName;

    const bundleRelativePathsByModuleType = {
      es6: path.relative(outputDir, subPackageESMBundlePath),
      commonjs: path.relative(outputDir, subPackageUMDBundlePath),
    };

    return `'${bundleRelativePathsByModuleType[moduleType]}'`;
  });

  await fsPromises.writeFile(outputFilePath, outputCode);
}

async function main() {
  for (const [subPackagePath, subPackageFiles] of FLOATING_UI_SUB_PACKAGES_ENTRIES_MAP) {
    const {
      types: subPackageTypesPath,
      module: subPackageESMBundlePath,
      default: subPackageUMDBundlePath,
    } = subPackageFiles;

    await createFolder(subPackagePath);

    const outputPath = path.join(subPackagePath, OUTPUT_DIR);

    await createFolder(outputPath);

    await Promise.all([
      build(path.join(FLOATING_UI_PATH, subPackageUMDBundlePath), outputPath, 'commonjs'),
      build(path.join(FLOATING_UI_PATH, subPackageESMBundlePath), outputPath, 'es6'),
    ]);

    await Promise.all([
      await fsPromises.writeFile(subPackageTypesPath, getTypeTemplate(subPackagePath)),
      await fsPromises.writeFile(
        path.join(subPackagePath, 'package.json'),
        getPackageJSONTemplate(subPackagePath),
      ),
    ]);
  }
}

await main();
