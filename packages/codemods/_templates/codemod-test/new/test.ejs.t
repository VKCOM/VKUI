---
to: src/transforms/v<%= version %>/__tests__/<%= h.changeCase.paramCase(name) %>.ts
---

import { describe } from 'vitest';
import { defineSnapshotTestFromFixture } from '../../../testHelpers/testHelper';

const name = '<%= h.changeCase.paramCase(name) %>';
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
