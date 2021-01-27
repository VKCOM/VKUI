const path = require('path');
module.exports = {
  displayName: 'unit',
  roots: [path.join(__dirname, 'src')],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', {
      configFile: path.resolve(__dirname, 'babel.global-css.config.js'),
    }],
  },
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    '\\.e2e\\.tsx?$',
    'src/types',
    'src/testing',
  ],
};
