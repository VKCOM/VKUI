const base = require('../jest.config')
const path = require('path');

module.exports = {
  ...base,
  testMatch: ['**/*.e2e.{ts,tsx}'],
  preset: 'jest-playwright-preset',
  collectCoverage: false,
  setupFilesAfterEnv: [
    ...(base.setupFilesAfterEnv || []),
    './jest/matchers.ts'
  ],
  globalSetup: './jest/globalSetup.js',
  globalTeardown: './jest/globalTeardown.js',
  testEnvironment: './jest/jsdomPlaywrightEnv.js',
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
