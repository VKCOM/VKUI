const path = require('path');
module.exports = {
  displayName: 'unit',
  roots: [path.join(__dirname, 'src')],
  setupFilesAfterEnv: [path.join(__dirname, 'src/testing/setup.ts')],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    '\\.e2e\\.tsx?$',
    'src/types',
    'src/testing',
  ],
};
