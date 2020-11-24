import baseTeardown from 'jest-playwright-preset/teardown';

module.exports = async function teardown(config) {
  await baseTeardown(config);
  // I don't know why, but devServer closes in watch mode, too
  if (!config.watch && !config.watchAll) {
    global['__DEV_SERVER__'].close();
  }
};
