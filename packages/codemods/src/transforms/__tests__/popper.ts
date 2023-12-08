jest.autoMockOff();

import { defineTest } from 'jscodeshift/dist/testUtils';

const name = 'popper';
const fixtures = ['basic', 'preserve-alias'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
