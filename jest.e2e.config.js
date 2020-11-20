const base = require('./jest.config')

module.exports = {
  ...base,
  testMatch: ['**/*.e2e.{ts,tsx}'],
  preset: 'jest-playwright-preset',
  collectCoverage: false,
  setupFilesAfterEnv: [
    ...(base.setupFilesAfterEnv || []),
    './e2e/matchers.ts'
  ],
  testEnvironment: './e2e/react-playwright.js',
  testEnvironmentOptions: {
    ...(base.testEnvironmentOptions || {}),
    'jest-playwright': {
      collectCoverage: true
    },
  },
}
