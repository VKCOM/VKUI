const path = require('path');
const chalk = require('chalk');
const { VKUI_PACKAGE } = require('../shared');
const { canRunTests, useDocker } = require('./detectEnv');

const BROWSER = process.env.BROWSER ?? 'chromium';
const PLATFORM = process.env.PLATFORM ?? 'vkcom';

process.env.BABEL_KEEP_CSS = '1';
process.env.BABEL_USED_BY_WEBPACK = '1';

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

/**
 * @type {import('jest-playwright-preset').JestPlaywrightConfig}
 */
const jestPlaywrightOptions = {
  browsers: [BROWSER],
  devices: [devicesMap[PLATFORM]],
  collectCoverage: true,
  contextOptions: {
    deviceScaleFactor: 1,
  },
};

if (useDocker) {
  jestPlaywrightOptions.connectOptions = {
    wsEndpoint: 'ws://localhost:9001/playwright',
  };
}

const config = {
  displayName: 'e2e',
  rootDir: path.join(__dirname, `../${VKUI_PACKAGE.PATHS.SRC_DIR}`),
  testMatch: ['**/*.e2e.{ts,tsx}'],
  testEnvironmentOptions: {
    'jest-playwright': jestPlaywrightOptions,
  },
  moduleNameMapper: {
    '@project-e2e/helpers': path.join(__dirname, 'index.ts'),
    '\\.css$': require.resolve('identity-obj-proxy'),
  },
  collectCoverage: false,

  preset: 'jest-playwright-preset',
  // Перебиваем некоторые параметры 'jest-playwright-preset'
  globalSetup: path.join(__dirname, 'jest/globalSetup.ts'),
  globalTeardown: path.join(__dirname, 'jest/globalTeardown.ts'),
  setupFilesAfterEnv: [
    'expect-playwright',
    'jest-playwright-preset/lib/extends.js',
    path.join(__dirname, 'jest/matchers.ts'),
  ],
};

if (!canRunTests) {
  console.error(
    chalk.red.bold(
      'Screenshots will only match in linux or docker - please install and start docker.',
    ),
  );
}

module.exports = config;
