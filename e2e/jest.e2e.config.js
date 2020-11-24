const base = require('../jest.unit.config')
const path = require('path');

module.exports = {
  ...base,
  displayName: 'e2e',
  testMatch: ['**/*.e2e.{ts,tsx}'],
  preset: 'jest-playwright-preset',
  collectCoverage: false,
  setupFilesAfterEnv: [
    ...(base.setupFilesAfterEnv || []),
    path.join(__dirname, 'jest/matchers.ts'),
  ],
  globalSetup: path.join(__dirname, 'jest/globalSetup.ts'),
  globalTeardown: path.join(__dirname, 'jest/globalTeardown.ts'),
  testEnvironment: path.join(__dirname, 'jest/jsdomPlaywrightEnv.ts'),
  testEnvironmentOptions: {
    ...(base.testEnvironmentOptions || {}),
    'jest-playwright': {
      collectCoverage: true
    },
  },
  moduleNameMapper: {
    '@react-playwright': path.join(__dirname, 'index.ts'),
  },
}
