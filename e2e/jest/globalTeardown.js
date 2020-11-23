const baseTeardown = require('jest-playwright-preset/teardown');

module.exports = async function teardown(config) {
  await baseTeardown(config);
  global.__DEV_SERVER__.close();
}
