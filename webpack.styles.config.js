const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { defaultSchemeId } = require('./package.json');

module.exports = {
  // CSS is optimized via postcss, we dont care about JS
  mode: 'none',
  entry: {
    vkui: './src/styles/vkui.css',
    unstable: './src/styles/unstable.css',
    components: './src/styles/components.css',
    default_scheme: `./src/styles/${defaultSchemeId}.css`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js.tmp',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
  stats: {
    all: false,
    assets: true,
    errors: true,
    warnings: true,
  }
};
