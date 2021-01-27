const path = require('path');
module.exports = {
  projects: ['<rootDir>', '<rootDir>/e2e/jest.e2e.config.js'],
  collectCoverage: true,
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', {
      configFile: path.resolve(__dirname, 'babel.global-css.config.js'),
    }],
  },
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    '\\.e2e\\.tsx?$',
    'src/types',
    'src/testing',
  ],
}
