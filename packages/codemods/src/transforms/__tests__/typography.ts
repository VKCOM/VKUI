jest.autoMockOff();

// @ts-expect-error: TS7016 Не отдается
import { defineTest } from 'jscodeshift/dist/testUtils';

const name = 'typography';
const fixtures = ['basic'] as const;

describe(name, () => {
  fixtures.forEach((test) =>
    defineTest(__dirname, name, null, `${name}/${test}`, {
      parser: 'tsx',
    }),
  );
});
