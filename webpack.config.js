const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssTransformOptions = require('./postcss.config.js');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    vkui: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader']
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
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
  stats: {
    children: false
  },
  mode: isProduction ? 'production' : 'development',
  externals: [
    {
      'react': 'react',
      'prop-types': 'prop-types',
      'react-dom': 'react-dom'
    },
    /@vkontakte\/icons/i
  ]
};

module.exports = config;
