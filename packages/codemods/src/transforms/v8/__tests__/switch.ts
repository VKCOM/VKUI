import { describe } from 'vitest';
import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'switch';
const fixtures = ['basic'] as const;

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
