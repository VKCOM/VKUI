const path = require('path');
module.exports = {
  roots: [path.join(__dirname, 'src')],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    'src/types',
  ],
}
