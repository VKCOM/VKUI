const path = require('path');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { VKUI_PACKAGE } = require('../shared');
const webpackCommonConfig = require('../webpack.common.config');

module.exports = merge(webpackCommonConfig, {
  plugins: [
    new DefinePlugin({
      'process.env.VKUI_STYLEGUIDE_PROPSPARSER': process.env.VKUI_STYLEGUIDE_PROPSPARSER,
    }),
  ],
  resolve: {
    alias: {
      '@rsg-components': path.resolve(
        __dirname,
        '../node_modules/react-styleguidist/lib/client/rsg-components/',
      ),
      '@vkui': path.resolve(__dirname, `../${VKUI_PACKAGE.PATHS.SRC_DIR}`),
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
  externals: [
    {
      'prop-types': 'prop-types',
    },
  ],
});
