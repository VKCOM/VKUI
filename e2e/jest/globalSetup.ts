import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import baseSetup from 'jest-playwright-preset/setup';
import { generateWebpackConfig } from '../generateWebpackConfig';

let devServer: WebpackDevServer;
async function setupWebpack() {
  const webpackConfig = await generateWebpackConfig();
  const compiler = webpack(webpackConfig);
  const compilerDone = new Promise((resolve, reject) => {
    compiler.hooks.watchRun.tapAsync('@jest-playwright', (_, callback) => {
      console.log('\nBuilding browser bundle...');
      callback();
    });
    compiler.hooks.done.tapAsync('@jest-playwright', (stats, callback) => {
      if (stats.hasErrors()) {
        console.log('Build failed');
        reject(stats);
      } else {
        console.log('Build OK');
        resolve(stats);
      }
      callback();
    });
  });

  devServer = new WebpackDevServer(compiler, {
    noInfo: true,
    stats: 'minimal',
    ...webpackConfig.devServer,
  });
  devServer.listen(9000);
  global['__DEV_SERVER__'] = devServer;

  return compilerDone;
}

module.exports = async function setup(jestConfig) {
  // do not re-run webpack in watch mode
  // https://github.com/facebook/jest/issues/6800
  if (devServer) {
    return new Promise((ok) => devServer.middleware.waitUntilValid(ok));
  }

  await setupWebpack();
  await baseSetup(jestConfig);
};
