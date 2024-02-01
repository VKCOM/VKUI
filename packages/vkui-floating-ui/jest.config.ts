import type { Config } from 'jest';

const config: Config = {
  globalSetup: '<rootDir>/main.mjs',
  testMatch: ['<rootDir>/*.test.mjs', '<rootDir>/*.test.cjs'],
  transform: {
    '^.+\\.(mj|j)s': [
      '@swc/jest',
      {
        jsc: {
          // Без этого не определит как ESM модуль
          baseUrl: '.',
        },
        module: null,
      },
    ],
    '^.+\\.cjs': [
      '@swc/jest',
      {
        module: {
          type: 'commonjs',
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
};

export default config;
