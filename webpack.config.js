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
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelOptions: { babelrc: true },
          babelCore: '@babel/core'
        }
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
      react: 'react',
      'prop-types': 'prop-types',
      'react-dom': 'react-dom'
    },
    /@vkontakte\/icons/i
  ]
};

module.exports = config;
