module.exports = {
  roots: ['src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    'src/types',
  ],
}
