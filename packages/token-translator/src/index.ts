#!/usr/bin/env node

import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs';
import fsPromises from 'fs/promises';

import postcss from 'postcss';

import postcssPlugin from './postcss-token-translator';
import { fileReplacer } from './file-replacer';

const cwd = process.cwd();

/**
 * Поиск файлов с необходимыми расширениями
 */
function searchFiles(startPath: string, extNames: string[]): string[] {
  // Всегда игнорируем node_modules
  if (['node_modules'].includes(path.basename(startPath))) {
    return [];
  }

  const findFiles: string[] = [];

  fs.readdirSync(startPath).forEach((filename) => {
    const pathToFile = path.join(startPath, filename);

    const stat = fs.lstatSync(pathToFile);
    if (stat.isDirectory()) {
      findFiles.push(...searchFiles(pathToFile, extNames));
    } else if (extNames.includes(path.extname(pathToFile).substring(1)) && !stat.isSymbolicLink()) {
      findFiles.push(pathToFile);
    }
  });

  return findFiles;
}

/**
 * Отфильтровывает файлы по gitignore
 * TODO: Самый продолжительный процесс. Возможно стоит переписать
 */
function gitignore(files: string[]): string[] {
  if (files.length === 0) {
    return [];
  }

  const needIgnore: string[] = [];

  // Разбиваем массив файлов на части,
  // иначе нельзя будет вызвать большую команду.
  const maxLength = 1000;
  for (let index = 0; index < files.length; index += maxLength) {
    const command = `git check-ignore ` + files.slice(index, index + maxLength).join(' ');

    try {
      needIgnore.push(
        ...execSync(command, {
          encoding: 'utf8',
        }).split('\n'),
      );
    } catch (e) {
      // @ts-ignore
      switch (e.status) {
        case 1:
          continue;
        case 127:
          return files;
      }

      throw e;
    }
  }

  return files.filter((pathToFile) => !needIgnore.includes(pathToFile));
}

/**
 * Обработка отдельного css файла
 * @param {string} pathToFile
 */
function postcssTransform(pathToFile: string) {
  return new Promise((resolve, reject) => {
    fsPromises
      .readFile(pathToFile)
      .then((css) => {
        postcss([postcssPlugin(undefined)])
          .process(css, { from: pathToFile, to: pathToFile })
          .then((result) => {
            fsPromises.writeFile(pathToFile, result.css).then(resolve).catch(reject);
          })
          .catch((e) => {
            if (e.name === 'CssSyntaxError') {
              console.error(`${e.message}\n\n`);
              resolve(null);
              return;
            }

            reject(e);
          });
      })
      .catch(reject);
  });
}

const extTransformers: {
  [key: string]: (pathToFile: string) => Promise<unknown>;
} = {
  css: postcssTransform,
  less: postcssTransform,
  ts: fileReplacer,
  tsx: fileReplacer,
  js: fileReplacer,
  jsx: fileReplacer,
  svg: fileReplacer,
  html: fileReplacer,
};

function main() {
  console.info('Start token translator');
  console.time('Done');

  const promiseValues: Promise<unknown>[] = [];

  gitignore(searchFiles(cwd, Object.keys(extTransformers))).forEach((pathToFile) => {
    const transformer = extTransformers[path.extname(pathToFile).substring(1)];

    promiseValues.push(transformer(pathToFile));
  });

  Promise.all(promiseValues)
    .catch(console.error)
    .finally(() => {
      console.timeEnd('Done');
    });
}

main();
