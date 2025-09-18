import fs from 'fs';
import path from 'path';
import getAvailableCodemods from '../../../getAvailableCodemods';
import {
  applyTransform,
  defineSnapshotTestFromFixture,
  getTestFixturesInputPath,
} from '../../../testHelpers/testHelper';

const name = 'text-tooltip';
const fixtures = ['basic'] as const;
const basicFixture = fixtures[0];

describe(name, async () => {
  for (const testName of fixtures) {
    await defineSnapshotTestFromFixture(
      __dirname,
      name,
      global.TRANSFORM_OPTIONS,
      `${name}/${testName}`,
    );
  }

  test('should apply after `transforms/tooltip.ts`', async () => {
    const codemodes = getAvailableCodemods('6', path.resolve(__dirname, '../../'));
    const inputPath = getTestFixturesInputPath(__dirname, `${name}/${basicFixture}`);
    let source = fs.readFileSync(inputPath, 'utf8');

    for (const transformName of codemodes) {
      const module = await import(path.join(__dirname, '..', transformName) + '.ts');
      source = applyTransform(module, global.TRANSFORM_OPTIONS, { source });
    }

    expect(source).toMatchSnapshot();
  });
});
