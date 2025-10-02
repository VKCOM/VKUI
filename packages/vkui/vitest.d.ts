import 'vitest/globals.d.ts';
import '@testing-library/jest-dom';
import type { AxeMatchers } from 'vitest-axe/matchers';

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
