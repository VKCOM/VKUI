/**
 * Файл для упрощенной работы с дефолтными функциями запуска `jscodeshift`
 */
import path from 'path';
import {
  applyTransform,
  defineSnapshotTestFromFixture as defineSnapshotTestFromFixtureOrig,
  // @ts-expect-error: TS7016 no types for package
} from 'jscodeshift/dist/testUtils';
import { JSCodeShiftOptions } from '../types';

export { applyTransform };

export function getTestFixturesInputPath(
  dirName: string,
  testFilePrefix: string,
  extension = 'tsx',
) {
  const fixtureDir = path.join(dirName, '..', '__testfixtures__');
  return path.join(fixtureDir, testFilePrefix + `.input.${extension}`);
}

/**
 * У оригинального defineSnapshotTestFromFixture нет типов
 * Избавляемся от необходимости в тестах постоянно указывать `module`
 */
export async function defineSnapshotTestFromFixture(
  dirName: string,
  transformName: string,
  options: JSCodeShiftOptions,
  testFilePrefix: string,
) {
  // Assumes transform is one level up from __tests__ directory
  const module = await import(path.join(dirName, '..', transformName) + '.ts');
  defineSnapshotTestFromFixtureOrig(
    dirName,
    module,
    options,
    testFilePrefix,
    'transforms correctly',
    { parser: 'tsx' },
  );
}
