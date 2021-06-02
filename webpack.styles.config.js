const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { defaultSchemeId } = require('./package.json');

process.env.BABEL_KEEP_CSS = '1';

module.exports = {
  // CSS is optimized via postcss, we dont care about JS
  mode: 'none',
  entry: {
    stable: ['./src/styles/themes.css', './src/index.ts'],
    unstable: './src/unstable/index.ts',
    components: './src/index.ts',
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
