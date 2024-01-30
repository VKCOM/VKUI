import { Config } from 'jest';

const config: Config = {
  globalSetup: '<rootDir>/main.mjs',
  transform: {
    '^.+\\.ts': '@swc/jest',
  },
  testEnvironment: 'node',
};

export default config;
