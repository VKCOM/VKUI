import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import cssModules from 'postcss-modules';
import TerserPlugin from 'terser-webpack-plugin';

dotenv.config({
  path: [
    path.resolve(import.meta.dirname, '../.env.default'),
    path.resolve(import.meta.dirname, '../.env'),
  ],
  override: true,
});

const sourceRoot = path.resolve(import.meta.dirname, 'src');
const testCases = fs.readdirSync(sourceRoot);

/** @type { import('webpack').Configuration } */
const webpackConfig = {
  context: path.resolve(import.meta.dirname, '../..'),
  mode: 'production',
  target: 'web',
  // devtool: false,
  entry: testCases.reduce(
    (entries, caseName) => {
      entries[caseName] = {
        import: path.join(sourceRoot, caseName, 'index.tsx'),
        dependOn: 'vendors',
      };
      return entries;
    },
    { vendors: ['react', 'react-dom'] },
  ),
  output: {
    path: path.join(import.meta.dirname, process.env.STATIC_BUILD_DIR),
    publicPath: '',
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'swc-loader',
        options: {
          jsc: {
            target: 'es2016',
            externalHelpers: true,
            parser: { syntax: 'typescript', tsx: true },
            transform: { react: { runtime: 'automatic' } },
            experimental: {
              plugins: [
                [
                  'swc-plugin-css-modules',
                  { generate_scoped_name: process.env.GENERATE_SCOPED_NAME },
                ],
              ],
            },
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                exportLocalsConvention: 'as-is',
                localIdentName: process.env.GENERATE_SCOPED_NAME,
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@vkontakte/vkui$': '@vkontakte/vkui/dist/cssm',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    ...testCases.map(
      (caseName) =>
        new HtmlWebpackPlugin({
          filename: `${caseName}.html`,
          scriptLoading: 'module',
          template: path.resolve(import.meta.dirname, 'index.template.html'),
          chunks: ['vendors', caseName],
          chunksSortMode: 'manual',
          minify: false,
        }),
    ),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      '...',
    ],
  },
};

export default webpackConfig;
