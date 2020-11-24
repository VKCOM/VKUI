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
  globalSetup: './jest/globalSetup.ts',
  globalTeardown: './jest/globalTeardown.ts',
  testEnvironment: './jest/jsdomPlaywrightEnv.ts',
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
