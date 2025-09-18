import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'appearance';
const fixtures = ['basic', 'alias'] as const;

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
