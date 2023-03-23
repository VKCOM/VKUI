const fs = require('fs');
const path = require('path');

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/package.swcrc`, 'utf-8'));
swcConfig.exclude = [];

/**
 * @type {import('jest').Config}
 */
const config = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...swcConfig }],
  },
  displayName: 'unit',
  roots: [path.join(__dirname, 'src')],
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
  testRegex: '[^(\\.a11y)]\\.test\\.tsx?$',
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/**.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    '\\.storybook',
    'types\\.ts$',
    'src/testing',
    'src/storybook',
    '\\.test\\.tsx?$',
    '\\.e2e\\.tsx?$',
    '\\.stories\\.tsx?$',
  ],
  testEnvironment: 'jsdom',
};

module.exports = config;
