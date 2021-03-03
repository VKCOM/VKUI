const path = require('path');
module.exports = {
  displayName: 'unit',
  roots: [path.join(__dirname, 'src')],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    '\\.e2e\\.tsx?$',
    'src/types',
    'src/testing',
  ],
};
