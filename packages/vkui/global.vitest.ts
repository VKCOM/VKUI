import '@testing-library/jest-dom';
import type { AxeMatchers } from 'vitest-axe/matchers';
// Подключает типы модуля 'vitest', чтобы нижеследующее дополнение (module augmentation)
// корректно сливалось с интерфейсами Assertion/AsymmetricMatchersContaining.
import type {} from 'vitest';

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Assertion extends AxeMatchers {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
