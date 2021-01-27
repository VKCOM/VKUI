import * as path from 'path';
import { promisify } from 'util';
import cbGlob from 'glob';
const babelOptions = require('../babel.css-modules.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = promisify(cbGlob);

export async function generateWebpackConfig() {
  const testFiles = await glob(path.join(__dirname, '../src/**/*.e2e.{ts,tsx}'));
  return {
    entry: {
      'main': [path.resolve(__dirname, 'browser/runtime.ts'), ...testFiles],
      'test-styles': [path.resolve(__dirname, 'styles.test.css')],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@react-playwright': path.resolve(__dirname, 'browser/mount.ts'),
      },
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babelOptions,
          },
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                [require.resolve('babel-plugin-istanbul'), {
                  exclude: [
                    '**/*.d.ts',
                    '**/*.e2e.tsx',
                    'e2e/',
                    'src/types',
                    'src/testing',
                  ],
                }],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader', options: { url: false } },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
  };
};
