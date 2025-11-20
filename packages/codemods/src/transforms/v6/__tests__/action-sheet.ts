import { describe } from 'vitest';
import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'action-sheet';
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
