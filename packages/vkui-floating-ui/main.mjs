import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import swc from '@swc/core';
import pkg from './package.json' with { type: 'json' };

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
  const importTypes = path.relative(subPackageDirPath, subPackageFiles.import.types);
  const importDefault = path.relative(subPackageDirPath, subPackageFiles.import.default);

  const main = path.relative(subPackageDirPath, subPackageFiles.default);
  const module = path.relative(subPackageDirPath, subPackageFiles.module);
  const types = path.relative(subPackageDirPath, subPackageFiles.types);

  return `{
  "sideEffects": false,
  "main": "./${main}",
  "module": "./${module}",
  "types": "./${types}",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "import": {
        "types": "./${importTypes}",
        "default": "./${importDefault}"
      },
      "types": "./${types}",
      "module": "./${module}",
      "default": "./${main}"
    }
  }
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
      noInterop: true,
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
  extension,
  subPackageDirPath,
  floatingUISubPackagesEntriesMap,
) {
  const localSubPackageDir = path.join(__dirname, path.dirname(subPackageDirPath));
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

    const bundleRelativePathsByModuleType = {
      mjs: path.relative(localSubPackageDir, path.join(__dirname, foundFilesName.import.default)),
      esm: path.relative(localSubPackageDir, path.join(__dirname, foundFilesName.module)),
      umd: path.relative(localSubPackageDir, path.join(__dirname, foundFilesName.default)),
    };

    return `'${bundleRelativePathsByModuleType[extension]}'`;
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
        return fsPromises.rm(subPackageDirPath, { recursive: true });
      }
      return Promise.resolve();
    }),
  );
}

export default async function main() {
  const floatingUISubPackagesEntriesMap = Object.entries(pkg.exports).filter(
    ([subPackagePath]) => !subPackagePath.includes('package.json'),
  );

  await cleanup(floatingUISubPackagesEntriesMap);

  for (const [subPackageDirPath, subPackageFilesPaths] of floatingUISubPackagesEntriesMap) {
    const [mjsCode, esmCode, umdCode] = await Promise.all([
      transformFileTo(convertToFloatingNodeModulesPath(subPackageFilesPaths.import.default), 'es6'),
      transformFileTo(convertToFloatingNodeModulesPath(subPackageFilesPaths.module), 'es6'),
      transformFileTo(convertToFloatingNodeModulesPath(subPackageFilesPaths.default), 'commonjs'),
    ]);
    const [mjsParchedCode, esmPatchedCode, umdPatchedCode] = await Promise.all([
      getPatchedFloatingUIFile(
        mjsCode,
        'mjs',
        subPackageFilesPaths.import.default,
        floatingUISubPackagesEntriesMap,
      ),
      getPatchedFloatingUIFile(
        esmCode,
        'esm',
        subPackageFilesPaths.module,
        floatingUISubPackagesEntriesMap,
      ),
      getPatchedFloatingUIFile(
        umdCode,
        'umd',
        subPackageFilesPaths.default,
        floatingUISubPackagesEntriesMap,
      ),
    ]);
    await Promise.all([
      createFile(subPackageFilesPaths.import.types, getTypeTemplate(subPackageDirPath)),
      createFile(subPackageFilesPaths.import.default, mjsParchedCode),

      createFile(subPackageFilesPaths.module, esmPatchedCode),
      createFile(subPackageFilesPaths.default, umdPatchedCode),
      createFile(subPackageFilesPaths.types, getTypeTemplate(subPackageDirPath)),

      createFile(
        path.join(subPackageDirPath, 'package.json'),
        getPackageJSONTemplate(subPackageDirPath, subPackageFilesPaths),
      ),
    ]);
  }
}
