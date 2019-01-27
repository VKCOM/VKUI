const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const cssTransformOptions = require('./postcss.config.js');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    vkui: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, ...cssTransformOptions]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin('[name].css')
  ],
  stats: {
    children: false
  },
  mode: process.env.NODE_ENV || 'development',
  externals: [
    {
      'react': 'react',
      'prop-types': 'prop-types',
      'react-dom': 'react-dom'
    },
    /@vkontakte\/icons/i
  ]
};

const devConfig = {};

const prodConfig = {};

module.exports = isProduction
  ? merge(config, prodConfig)
  : merge(config, devConfig);
