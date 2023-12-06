jest.autoMockOff();

import { defineTest } from 'jscodeshift/dist/testUtils';

const name = 'date-input';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
