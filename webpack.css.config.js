const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // CSS is already optimized, we dont care about JS
  mode: 'none',
  entry: {
    vkui: './dist/cssm/index.js',
    unstable: './dist/cssm/unstable/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js.tmp',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
  stats: {
    all: false,
    assets: true,
    errors: true,
    warnings: true,
  },
};
