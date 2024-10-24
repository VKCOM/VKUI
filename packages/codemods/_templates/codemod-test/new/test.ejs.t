---
to: src/transforms/v<%= version %>/__tests__/<%= h.changeCase.paramCase(name) %>.ts
---
jest.autoMockOff();

import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = '<%= h.changeCase.paramCase(name) %>';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineSnapshotTestFromFixture(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`),
  );
});
