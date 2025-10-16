import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'file';
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
