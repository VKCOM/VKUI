/**
 * Adopted version of https://github.com/facebook/jscodeshift/blob/v0.15.0/src/testUtils.js
 * TODO [jscodeshift@>0.13.0]: Remove it
 * More info - PR #6254
 */
import fs from 'fs';
import path from 'path';
import {
  applyTransform,
  defineSnapshotTest,
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
 * Handles file-loading boilerplates, using same defaults as defineTest
 */
export function defineSnapshotTestFromFixture(
  dirName: string,
  transformName: string,
  options: JSCodeShiftOptions,
  testFilePrefix: string,
  extension = 'tsx',
) {
  // Assumes transform is one level up from __tests__ directory
  const module = require(path.join(dirName, '..', transformName));
  const inputPath = getTestFixturesInputPath(dirName, testFilePrefix, extension);
  const source = fs.readFileSync(inputPath, 'utf8');
  defineSnapshotTest(module, options, source, 'transforms correctly');
}
