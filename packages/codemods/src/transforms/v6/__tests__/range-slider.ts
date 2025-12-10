import { describe } from 'vitest';
import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'range-slider';
const fixtures = ['basic', 'renamed', 'imports'] as const;

describe(name, async () => {
  for (const testName of fixtures) {
    await defineSnapshotTestFromFixture(
      __dirname,
      name,
      global.TRANSFORM_OPTIONS,
      `${name}/${testName}`,
    );
  }
});
