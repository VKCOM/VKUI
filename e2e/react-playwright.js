const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment').default;
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const path = require('path');

module.exports = class ReactPlaywrightEnvironment extends PlaywrightEnvironment {
  async setup() {
    const { externals, resolve = {}, output = {}, ...baseWebpackConfig } = webpackConfig
    const compiler = webpack({
      ...baseWebpackConfig,
      entry: {
        main: path.join(__dirname, './browser-env.js'),
      },
      output: {
        ...output,
        path: path.resolve(__dirname, 'dist'),
      },
      resolve: {
        ...resolve,
        alias: {
          ...resolve.alias,
          // 'jest-puppeteer-react-plugin': path.resolve(__dirname, 'render.browser.js'),
        }
      }
    });
    const compilerHooks = new Promise((resolve, reject) => {
      compiler.hooks.done.tapAsync('jest-puppeteer-react-plugin', (stats, callback) => {
        console.log('done');
        if (stats.hasErrors()) {
          // spinner.fail('Webpack build failed');
          reject(stats);
        } else {
          // spinner.succeed('Webpack build finished');
          resolve(stats);
        }
        callback();
      });
    });
    
    this.devServer = new WebpackDevServer(compiler, {
      contentBase: path.join(__dirname, 'dist'),
    });
    this.devServer.listen(9000);
    
    await compilerHooks
    console.log('compiler done')

    await super.setup()
    console.log('playwright done')
  }

  async teardown() {
    await super.teardown();
    this.devServer.close();
  }
}