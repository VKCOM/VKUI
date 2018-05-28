const path = require('path');
const icons = require('./icons');
const webpack = require('webpack');

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
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'es2015'
              ],
              'react'
            ],
            plugins: ['transform-object-rest-spread']
          }
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'icons.common'
    })
  ],
  externals: {
    'react': 'react',
    'prop-types': 'prop-types'
    // 'svg-baker-runtime/browser-symbol': 'svg-baker-runtime/browser-symbol',
    // 'svg-sprite-loader/runtime/browser-sprite.build': 'svg-sprite-loader/runtime/browser-sprite.build'
  }
};

module.exports = config;
