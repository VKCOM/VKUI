const { getPlaywrightEnv } = require('jest-playwright-preset/lib/PlaywrightEnvironment');

module.exports = getPlaywrightEnv('jsdom');
