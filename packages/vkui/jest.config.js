const path = require('path');

module.exports = {
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
  ],
};
