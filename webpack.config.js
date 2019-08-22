const path = require('path');
const merge = require('webpack-merge');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    vkui: './src/vkui.js'
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
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader']
      }
    ]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
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
