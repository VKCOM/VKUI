import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as swc from '@swc/core';
import pkg from './package.json' with { type: 'json' };

type ExportEntries = Array<
  [
    string,
    {
      types: string;
      default: string;
    },
  ]
>;

async function cleanup(exportsEntries: ExportEntries) {
  await Promise.all([
    ...exportsEntries
      .map((exportItem) => {
        const types = exportItem[1].types;
        const esm = exportItem[1].default;

        return [types, esm].reduce<Array<Promise<any>>>((acc, filePath) => {
          if (fs.existsSync(filePath)) {
            acc.push(fsPromises.rm(filePath));
          }
          return acc;
        }, []);
      })
      .flat(),
  ]);
}

async function createFile(filePath: string, code: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    await fsPromises.mkdir(dir, { recursive: true });
  }

  await fsPromises.writeFile(filePath, code);
}

async function copyFile(src: string, dist: string) {
  const dir = path.dirname(dist);
  if (!fs.existsSync(dir)) {
    await fsPromises.mkdir(dir, { recursive: true });
  }

  await fsPromises.copyFile(src, dist);
}

function nodeModulesPath() {
  return path.resolve(import.meta.dirname, '../../node_modules');
}

function convertToNodeModulesPath(relativePathToFile: string) {
  const modulePath = path.join(nodeModulesPath(), '@date-fns/tz');

  return path.join(modulePath, relativePathToFile);
}

async function transformFile(filePath: string) {
  const { code } = await swc.transformFile(filePath, {
    module: {
      type: 'es6',
      noInterop: true,
    },
    jsc: {
      externalHelpers: true,
      target: 'es2017',
    },
    cwd: import.meta.dirname,
  });

  return code;
}

export async function main() {
  const exportsEntries = Object.entries(pkg.exports).filter(
    ([subPackagePath]) => !subPackagePath.includes('package.json'),
  ) as ExportEntries;

  await cleanup(exportsEntries);

  await Promise.all([
    ...exportsEntries.map(async (exportItem) => {
      const types = exportItem[1].types;

      await copyFile(convertToNodeModulesPath(types), types);
    }),
    ...exportsEntries.map(async (exportItem) => {
      const esm = exportItem[1].default;

      const code = await transformFile(convertToNodeModulesPath(esm));

      await createFile(esm, code);
    }),
  ]);
}

await main();
