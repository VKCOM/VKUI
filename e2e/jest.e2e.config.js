const base = require('../jest.unit.config');
const path = require('path');
const chalk = require('chalk');
const { canRunTests, useDocker } = require('./detectEnv');

const BROWSER = process.env.BROWSER ?? 'chromium';
const PLATFORM = process.env.PLATFORM ?? 'vkcom';

const vkcomBrowserMap = {
  firefox: 'Desktop Firefox',
  chromium: 'Desktop Chrome',
  webkit: 'Desktop Safari',
};

const devicesMap = {
  android: 'Pixel 5',
  ios: 'iPhone XR',
  vkcom: vkcomBrowserMap[BROWSER],
};

const jestPlaywrightOptions = Object.assign(
  {
    browsers: [BROWSER],
    devices: [devicesMap[PLATFORM]],
    collectCoverage: true,
  },
  useDocker
    ? {
        connectOptions: {
          wsEndpoint: 'ws://localhost:9001/playwright',
        },
      }
    : {},
);
const config = {
  ...base,
  displayName: 'e2e',
  testMatch: ['**/*.e2e.{ts,tsx}'],
  preset: 'jest-playwright-preset',
  collectCoverage: false,
  setupFilesAfterEnv: [path.join(__dirname, 'jest/matchers.ts')],
  globalSetup: path.join(__dirname, 'jest/globalSetup.ts'),
  globalTeardown: path.join(__dirname, 'jest/globalTeardown.ts'),
  testEnvironmentOptions: {
    ...(base.testEnvironmentOptions || {}),
    'jest-playwright': jestPlaywrightOptions,
  },
  moduleNameMapper: {
    '@react-playwright': path.join(__dirname, 'index.ts'),
    '\\.css$': require.resolve('identity-obj-proxy'),
  },
};

if (!canRunTests) {
  console.error(
    chalk.red.bold(
      'Screenshots will only match in linux or docker - please install and start docker.',
    ),
  );
}

module.exports = config;
