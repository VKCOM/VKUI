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

const GENERATE_SCOPED_NAME = 'vkui[local]';
const SWC_LOADER_BASE_OPTIONS = {
  target: 'es2016',
  externalHelpers: true,
  parser: { syntax: 'typescript', tsx: true },
  transform: { react: { runtime: 'automatic' } },
};

const workspaceRoot = path.resolve(import.meta.dirname, '../..');
const sourceRoot = path.resolve(import.meta.dirname, 'src');

const cases = fs.readdirSync(sourceRoot);

/** @type { import('webpack').Configuration } */
const webpackConfig = {
  context: workspaceRoot,
  mode: 'production',
  target: 'web',
  entry: cases.reduce(
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        options: { jsc: SWC_LOADER_BASE_OPTIONS },
      },
      {
        test: /\.jsx?$/,
        include: /node_modules\/@vkontakte\/vkui/,
        loader: 'swc-loader',
        options: {
          jsc: {
            ...SWC_LOADER_BASE_OPTIONS,
            experimental: {
              plugins: [
                ['swc-plugin-css-modules', { generate_scoped_name: GENERATE_SCOPED_NAME }],
                ['swc-plugin-transform-remove-imports', { test: '\\.css$' }],
              ],
            },
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: false } }],
      },
      {
        test: /\.module.css$/,
        include: /node_modules\/@vkontakte\/vkui/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: false, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  cssModules({ generateScopedName: GENERATE_SCOPED_NAME, getJSON: () => void 0 }),
                ],
              },
            },
          },
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
    ...cases.map(
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
