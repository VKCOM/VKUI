jest.autoMockOff();

import { defineSnapshotTestFromFixture } from '../../testHelpers/testHelper';

const name = 'action-sheet';
const fixtures = ['basic', 'alias'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineSnapshotTestFromFixture(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`),
  );
});
