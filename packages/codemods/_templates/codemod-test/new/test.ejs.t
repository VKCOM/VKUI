---
to: src/transforms/__tests__/<%= name %>.ts
---
jest.autoMockOff();

import { defineSnapshotTestFromFixture } from '../../testHelpers/testHelper';

const name = '<%= name %>';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineSnapshotTestFromFixture(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`),
  );
});
