const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const baseSetup = require('jest-playwright-preset/setup');
const { generateWebpackConfig } = require('../generateWebpackConfig');

module.exports = async function setup(jestConfig) {
  const webpackConfig = await generateWebpackConfig()
  const compiler = webpack(webpackConfig);
  const compilerDone = new Promise((resolve, reject) => {
    compiler.hooks.done.tapAsync('@jest-playwright', (stats, callback) => {
      if (stats.hasErrors()) {
        reject(stats);
      } else {
        resolve(stats);
      }
      callback();
    });
  });
  
  const devServer = new WebpackDevServer(compiler, {
    noInfo: true,
    stats: 'minimal',
    ...webpackConfig.devServer,
  });
  devServer.listen(9000);
  global.__DEV_SERVER__ = devServer;
  
  await compilerDone;

  await baseSetup(jestConfig);
}
