const path = require('path');
const webpackConfig = require('../webpack.config');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');

module.exports = merge(webpackConfig, {
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
      '@vkui': path.resolve(__dirname, '../src'),
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
});
