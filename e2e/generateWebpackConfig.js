const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const webpackConfig = require('../webpack.config.js');

const { externals, devServer, resolve = {}, output = {}, ...baseWebpackConfig } = webpackConfig;

async function generateWebpackConfig() {
  const testFiles = await glob(path.join(__dirname, '../src/**/*.e2e.{ts,tsx}'));
  return {
    ...baseWebpackConfig,
    entry: {
      main: [path.resolve(__dirname, 'browser/runtime.ts'), ...testFiles],
    },
    output: {
      ...output,
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      ...resolve,
      alias: {
        ...resolve.alias,
        '@react-playwright': path.resolve(__dirname, 'browser/mount.ts'),
      },
    },
    devServer: {
      ...devServer,
      contentBase: path.join(__dirname, 'dist'),
    }
  };
};

module.exports = {
  generateWebpackConfig,
};
