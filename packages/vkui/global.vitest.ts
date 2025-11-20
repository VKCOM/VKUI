import type * as localVitest from 'vitest';
import '@testing-library/jest-dom';
import type { AxeMatchers } from 'vitest-axe/matchers';

declare global {
  let suite: (typeof localVitest)['suite'];
  let test: (typeof localVitest)['test'];
  let chai: (typeof localVitest)['chai'];
  let describe: (typeof localVitest)['describe'];
  let it: (typeof localVitest)['it'];
  let expectTypeOf: (typeof localVitest)['expectTypeOf'];
  let assertType: (typeof localVitest)['assertType'];
  let expect: (typeof localVitest)['expect'];
  let assert: (typeof localVitest)['assert'];
  let vitest: (typeof localVitest)['vitest'];
  let vi: (typeof localVitest)['vitest'];
  let beforeAll: (typeof localVitest)['beforeAll'];
  let afterAll: (typeof localVitest)['afterAll'];
  let beforeEach: (typeof localVitest)['beforeEach'];
  let afterEach: (typeof localVitest)['afterEach'];
  let onTestFailed: (typeof localVitest)['onTestFailed'];
  let onTestFinished: (typeof localVitest)['onTestFinished'];
}

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Assertion extends AxeMatchers {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
