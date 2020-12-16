const path = require('path');
module.exports = {
  displayName: 'unit',
  roots: [path.join(__dirname, 'src')],
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    'src/types',
  ],
}
