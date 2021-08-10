const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { defaultSchemeId } = require('./package.json');

process.env.BABEL_KEEP_CSS = '1';

module.exports = {
  // CSS is optimized via postcss, we dont care about JS
  mode: 'none',
  // TODO: Once CSS is modular, replace
  // './src/styles/components.css' -> './src/index.ts'
  // './src/styles/unstable.css' -> './src/unstable/index.ts'
  entry: {
    stable: ['./src/styles/themes.css', './src/styles/components.css'],
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
