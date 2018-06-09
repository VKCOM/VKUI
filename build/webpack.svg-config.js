const path = require('path');
const icons = require('./icons');

const config = {
  entry: icons.entry,
  output: {
    path: path.resolve('./dist/icons'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: path.resolve('./build/loaders/svgToReact')
        }, {
          loader: 'svg-sprite-loader'
        }, {
          loader: path.resolve('./build/loaders/optimizeSvg')
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      minChunks: 2,
      name: 'icons.common',
      chunks: 'all'
    }
  },
  mode: 'production',
  externals: {
    'react': 'react',
    'prop-types': 'prop-types'
  }
};

module.exports = config;
