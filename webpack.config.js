const path = require('path');
const merge = require('webpack-merge');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    vkui: './src/vkui.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|woff|svg|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'static/',
            name: '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  stats: {
    children: false,
  },
  externals: [
    {
      'react': 'react',
      'prop-types': 'prop-types',
      'react-dom': 'react-dom',
    },
    /@vkontakte\/icons/i,
  ],
};

const devConfig = {
  mode: 'development',
};

const prodConfig = {
  mode: 'production',
};

module.exports = isProduction
  ? merge(config, prodConfig)
  : merge(config, devConfig);
