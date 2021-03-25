const path = require('path');
const webpackConfig = require('../webpack.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssConfig = require('../postcss.config');

module.exports = merge(webpackConfig, {
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      maxSize: 100000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            esModule: false,
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: postcssConfig.plugins,
            },
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    alias: {
      '@rsg-components': path.resolve(__dirname, '../node_modules/react-styleguidist/lib/client/rsg-components/'),
      '@vkui': path.resolve(__dirname, '../src')
    }
  }
})
