const config = require('./jest.config.js');

module.exports = {
  ...config,
  displayName: 'a11y',
  testRegex: '\\.a11y\\.test\\.tsx?$',
  collectCoverageFrom: ['src/components/**/**.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    ...config.coveragePathIgnorePatterns,
    'use*.+\\.tsx?$',
    'helpers\\.tsx?$',
    'icons\\.tsx?$',
  ],
};
