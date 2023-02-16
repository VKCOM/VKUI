const config = require('./jest.config.js');

module.exports = {
  ...config,
  displayName: 'a11y',
  testRegex: '\\.a11y\\.test\\.tsx?$',
  collectCoverageFrom: ['src/components/**/**.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    'types\\.ts$',
    'use*.+\\.tsx?$',
    'helpers\\.tsx?$',
    'icons\\.tsx?$',
    '\\.test\\.tsx?$',
    '\\.e2e\\.tsx?$',
  ],
};
