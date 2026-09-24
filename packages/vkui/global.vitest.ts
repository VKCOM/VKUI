import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import type { AxeMatchers } from 'vitest-axe/matchers';
// Подключает типы модуля 'vitest', чтобы нижеследующее дополнение (module augmentation)
// корректно сливалось с интерфейсами Assertion/AsymmetricMatchersContaining.
import type {} from 'vitest';

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Assertion<R extends void | Promise<void> = void, T = unknown>
    extends TestingLibraryMatchers<T, R>,
      AxeMatchers {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface AsymmetricMatchersContaining
    extends TestingLibraryMatchers<any, any>,
      AxeMatchers {}
}
