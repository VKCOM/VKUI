jest.autoMockOff();

import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = 'popout-wrapper';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineSnapshotTestFromFixture(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`),
  );
});
