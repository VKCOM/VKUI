import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import swc from '@swc/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __filename = url.fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(__filename);

const NODE_MODULES_PATH = path.resolve(__dirname, '../../node_modules');
const FLOATING_UI_PATH = path.join(NODE_MODULES_PATH, '@floating-ui');

function floatinguiName(name, moduleType) {
  const dotname = name.replaceAll('/', '.');

  return `floating-ui.${dotname}.${moduleType}.js`;
}

function floatinguiPath(name, moduleType) {
  return path.join(FLOATING_UI_PATH, `${name}/dist/${floatinguiName(name, moduleType)}`);
}

const LIBS = ['utils', 'utils/dom', 'core', 'dom', 'react-dom'];

const FILES_ESM_PATH = LIBS.map((name) => floatinguiPath(name, 'esm'));
const FILES_UMD_PATH = LIBS.map((name) => floatinguiPath(name, 'umd'));

const REGEX_MODULES = RegExp("'@floating-ui\\/(" + LIBS.join('|').replace('/', '\\/') + ")'", 'g');

const BUILD_DIR = './tmp';
const BUILD_PATH = path.resolve(__dirname, BUILD_DIR);

const OUTPUT_DIR = './dist';
const OUTPUT_PATH = path.resolve(__dirname, OUTPUT_DIR);

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

/**
 * Копирование файла в папку
 *
 * @param {string} src путь к файлу
 * @param {string} destDir путь к папке
 */
async function copyFileToDir(src, destDir) {
  const filename = path.basename(src);

  await fsPromises.copyFile(src, path.join(destDir, filename));
}

/**
 * Собираем отдельный файл
 *
 * @param {string} filePath путь к файлу
 * @param {string} outputDir выходная папка
 * @param {'es6' | 'commonjs'} moduleType тип модуля
 * @param {import('@swc/types').JscConfig['paths']} pathsMapping маппинг путей
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

  const outputCode = output.code.replace(REGEX_MODULES, (_, name) => {
    return (
      "'" +
      './' +
      floatinguiName(
        name,
        {
          es6: 'esm',
          commonjs: 'umd',
        }[moduleType],
      ) +
      "'"
    );
  });

  await fsPromises.writeFile(outputFilePath, outputCode);
}

async function main() {
  await Promise.all([createFolder(BUILD_PATH), createFolder(OUTPUT_PATH)]);

  await Promise.all(
    [...FILES_UMD_PATH, ...FILES_ESM_PATH].map((filePath) => copyFileToDir(filePath, BUILD_PATH)),
  );

  await Promise.all(FILES_UMD_PATH.map((filePath) => build(filePath, OUTPUT_PATH, 'commonjs')));
  await Promise.all(FILES_ESM_PATH.map((filePath) => build(filePath, OUTPUT_PATH, 'es6')));
  await copyFileToDir('types.d.ts', OUTPUT_PATH);
}

await main();
