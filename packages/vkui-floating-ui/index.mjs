import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import swc from '@swc/core';
import pkg from './package.json' assert { type: 'json' };

function removePathFromStart(subPackagePath) {
  return subPackagePath.replace(/^\.\//, '');
}

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function convertToFloatingNodeModulesPath(relativePathToFile) {
  const nodeModulesPath = path.resolve(__dirname, '../../node_modules');
  const floatingUINodeModulesPath = path.join(nodeModulesPath, '@floating-ui');
  return path.join(floatingUINodeModulesPath, relativePathToFile);
}

function getTypeTemplate(subPackagePath) {
  const normalizedPath = removePathFromStart(subPackagePath);
  return `declare module '${pkg.name}/${normalizedPath}' {
  export * from '@floating-ui/${normalizedPath}';
}`;
}

function getPackageJSONTemplate(subPackageDirPath, subPackageFiles) {
  return `{
  "sideEffects": false,
  "main": "${path.relative(subPackageDirPath, subPackageFiles.default)}",
  "module": "${path.relative(subPackageDirPath, subPackageFiles.module)}",
  "types": "${path.relative(subPackageDirPath, subPackageFiles.types)}"
}`;
}

/**
 * Трансформируем в необходимый модуль.
 *
 * @param {string} filePath путь к файлу
 * @param {'es6' | 'commonjs'} moduleType тип модуля
 */
async function transformFileTo(filePath, moduleType) {
  const { code } = await swc.transformFile(filePath, {
    module: {
      type: moduleType,
    },
    jsc: {
      externalHelpers: true,
      target: 'es5',
    },
    cwd: __dirname,
  });
  return code;
}

async function getPatchedFloatingUIFile(
  output,
  moduleType,
  subPackageDirPath,
  floatingUISubPackagesEntriesMap,
) {
  const floatingUISubPackagesNames = floatingUISubPackagesEntriesMap
    .map(([subPackagePath]) => removePathFromStart(subPackagePath))
    .join('|')
    .replace('/', '\\/');
  const floatingUISubPackagesRegExpNames = RegExp(
    `"@floating-ui\\/(${floatingUISubPackagesNames})"`,
    'g',
  );
  return output.replace(floatingUISubPackagesRegExpNames, (_, name) => {
    const [, foundFilesName] =
      floatingUISubPackagesEntriesMap.find(([subPackage]) => subPackage.includes(name)) || [];

    if (!foundFilesName) {
      return;
    }

    const { module: subPackageESMBundlePath, default: subPackageUMDBundlePath } = foundFilesName;

    const bundleRelativePathsByModuleType = {
      es6: path.relative(
        path.join(__dirname, path.dirname(subPackageDirPath)),
        path.join(__dirname, subPackageESMBundlePath),
      ),
      commonjs: path.relative(
        path.join(__dirname, path.dirname(subPackageDirPath)),
        path.join(__dirname, subPackageUMDBundlePath),
      ),
    };

    return `'${bundleRelativePathsByModuleType[moduleType]}'`;
  });
}

async function createFile(filePath, code) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    await fsPromises.mkdir(dir, { recursive: true });
  }
  await fsPromises.writeFile(filePath, code);
}

async function cleanup(floatingUISubPackagesEntriesMap) {
  await Promise.all(
    floatingUISubPackagesEntriesMap.map(([subPackageDirPath]) => {
      if (fs.existsSync(subPackageDirPath)) {
        return fsPromises.rmdir(subPackageDirPath, { recursive: true });
      }
      return Promise.resolve();
    }),
  );
}

async function main() {
  const floatingUISubPackagesEntriesMap = Object.entries(pkg.exports).filter(
    ([subPackagePath]) => !subPackagePath.includes('package.json'),
  );

  await cleanup(floatingUISubPackagesEntriesMap);

  for (const [subPackageDirPath, subPackageFilesPaths] of floatingUISubPackagesEntriesMap) {
    const subPackagePackageJSON = path.join(subPackageDirPath, 'package.json');
    const {
      types: subPackageTypesPath,
      module: subPackageESMBundlePath,
      default: subPackageUMDBundlePath,
    } = subPackageFilesPaths;

    const [commonjsCode, es6Code] = await Promise.all([
      transformFileTo(convertToFloatingNodeModulesPath(subPackageESMBundlePath), 'es6'),
      transformFileTo(convertToFloatingNodeModulesPath(subPackageUMDBundlePath), 'commonjs'),
    ]);
    const [commonjsPatchedCode, es6PatchedCode] = await Promise.all([
      getPatchedFloatingUIFile(
        es6Code,
        'es6',
        subPackageESMBundlePath,
        floatingUISubPackagesEntriesMap,
      ),
      getPatchedFloatingUIFile(
        commonjsCode,
        'commonjs',
        subPackageUMDBundlePath,
        floatingUISubPackagesEntriesMap,
      ),
    ]);
    await Promise.all([
      createFile(subPackageESMBundlePath, es6PatchedCode),
      createFile(subPackageUMDBundlePath, commonjsPatchedCode),
      createFile(subPackageTypesPath, getTypeTemplate(subPackageDirPath)),
      createFile(
        subPackagePackageJSON,
        getPackageJSONTemplate(subPackageDirPath, subPackageFilesPaths),
      ),
    ]);
  }
}

await main();
