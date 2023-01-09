declare module 'jest-playwright-preset/setup';
declare module 'jest-playwright-preset/teardown';
declare module 'jest-playwright-preset/lib/PlaywrightEnvironment';

interface Window {
  __isVkuiTesting: boolean;
  testHandle: unknown;
}
