const path = require('path');
const webpackConfig = require('../webpack.config');
const merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
  resolve: {
    alias: {
      '@rsg-components': path.resolve(__dirname, '../node_modules/react-styleguidist/lib/client/rsg-components/'),
      '@vkui': path.resolve(__dirname, '../src'),
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling'
    }
  }
})
