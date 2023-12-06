jest.autoMockOff();

import { defineTest } from 'jscodeshift/dist/testUtils';

const name = 'rich-tooltip';
const fixtures = ['basic'] as const;

jest.mock('../report', () => {
  return {
    report: () => {},
  };
});

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, global.TRANSFORM_OPTIONS, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
