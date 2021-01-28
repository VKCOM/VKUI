const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // CSS is already optimized, we dont care about JS
  mode: 'none',
  entry: {
    stable: './dist/cssm/index.js',
    unstable: './dist/cssm/unstable/index.js',
    default_scheme: './src/styles/bright_light.css',
    global: './dist/cssm/styles/global.css',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js.tmp',
  },
  optimization: {
    splitChunks: {
      chunks: chunk => ['stable', 'unstable'].includes(chunk.name),
      cacheGroups: {
        // capture all common deps between stable & unstable
        vkui: {
          name: 'vkui',
          test: (_, chunks) => chunks.some(chunk => chunk.name === 'stable'),
        }
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
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
