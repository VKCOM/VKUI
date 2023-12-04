jest.autoMockOff();

import { defineTest } from 'jscodeshift/dist/testUtils';

const name = 'range-slider';
const fixtures = ['basic', 'renamed', 'imports'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
