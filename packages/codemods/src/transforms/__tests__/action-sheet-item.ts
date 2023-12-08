jest.autoMockOff();

import { defineTest } from 'jscodeshift/dist/testUtils';

const name = 'action-sheet-item';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
