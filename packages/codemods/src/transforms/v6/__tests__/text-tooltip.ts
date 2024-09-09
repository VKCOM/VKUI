jest.autoMockOff();

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

describe(name, () => {
  fixtures.forEach((test) =>
    defineSnapshotTestFromFixture(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`),
  );

  it('should apply after `transforms/tooltip.ts`', () => {
    const codemodes = getAvailableCodemods('6', path.resolve(__dirname, '../../'));
    const inputPath = getTestFixturesInputPath(__dirname, `${name}/${basicFixture}`);
    let source = fs.readFileSync(inputPath, 'utf8');

    codemodes.forEach((transformName) => {
      const module = require(path.join(__dirname, '..', transformName));
      source = applyTransform(module, global.TRANSFORM_OPTIONS, { source });
    });

    expect(source).toMatchSnapshot();
  });
});
