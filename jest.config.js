module.exports = {
  projects: ['<rootDir>', '<rootDir>/e2e/jest.e2e.config.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    'src/types',
  ],
}
