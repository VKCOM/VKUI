const base = require('../jest.unit.config');
const path = require('path');
const chalk = require('chalk');
const { canRunTests, useDocker } = require('./detectEnv');

const jestPlaywrightOptions = Object.assign({
  collectCoverage: true,
  contextOptions: {
    viewport: {
      width: 800,
      height: 600,
    },
  },
}, useDocker ? {
  connectOptions: {
    wsEndpoint: 'ws://localhost:9001/playwright',
  },
} : {});
const config = {
  ...base,
  displayName: 'e2e',
  testMatch: ['**/*.e2e.{ts,tsx}'],
  preset: 'jest-playwright-preset',
  collectCoverage: false,
  setupFilesAfterEnv: [
    path.join(__dirname, 'jest/matchers.ts'),
  ],
  globalSetup: path.join(__dirname, 'jest/globalSetup.ts'),
  globalTeardown: path.join(__dirname, 'jest/globalTeardown.ts'),
  testEnvironment: path.join(__dirname, 'jest/jsdomPlaywrightEnv.js'),
  testEnvironmentOptions: {
    ...base.testEnvironmentOptions || {},
    'jest-playwright': jestPlaywrightOptions,
  },
  moduleNameMapper: {
    '@react-playwright': path.join(__dirname, 'index.ts'),
  },
};

if (!canRunTests) {
  console.error(chalk.red.bold('E2E tests can only run in linux or docker - please install and start docker. Skipping for now.'));
  module.exports = {};
} else {
  module.exports = config;
}
