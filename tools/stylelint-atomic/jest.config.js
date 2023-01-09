const path = require('path');

module.exports = {
  preset: 'jest-preset-stylelint',
  testEnvironment: 'jsdom',
  setupFiles: [path.resolve(__dirname, 'jest.setup.js')],
};
