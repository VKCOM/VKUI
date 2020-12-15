// Jest test environment must be in JS
const { getPlaywrightEnv } = require('jest-playwright-preset/lib/PlaywrightEnvironment');
module.exports = getPlaywrightEnv('jsdom');
