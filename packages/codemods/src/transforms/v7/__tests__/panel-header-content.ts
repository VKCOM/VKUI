jest.autoMockOff();

import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'panel-header-content';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineSnapshotTestFromFixture(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`),
  );
});
