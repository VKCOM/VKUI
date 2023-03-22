const commonConfig = require('./jest.config.js');

/**
 * @type {import('jest').Config}
 */
const config = {
  ...commonConfig,
  displayName: 'a11y',
  testRegex: '\\.a11y\\.test\\.tsx?$',
  collectCoverageFrom: ['src/components/**/**.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    ...commonConfig.coveragePathIgnorePatterns,
    'use*.+\\.tsx?$',
    'helpers\\.tsx?$',
    'icons\\.tsx?$',
  ],
};

module.exports = config;
