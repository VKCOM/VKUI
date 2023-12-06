---
to: src/transforms/__tests__/<%= name %>.ts
---
jest.autoMockOff();

import { defineTest } from 'jscodeshift/dist/testUtils';

const name = '<%= name %>';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
