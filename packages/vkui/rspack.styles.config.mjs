// @ts-check

import path from 'node:path';
import rspack from '@rspack/core';
import browserslist from 'browserslist';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { makePostcssPlugins } from './scripts/postcss.cjs';

const rootDirectory = path.join(import.meta.dirname, '../../');
const browser = browserslist.readConfig(path.join(rootDirectory, '.browserslistrc'));
/**
 * Конфигурация для css
 *
 * @param {Object} [options={}]
 * @param {boolean} [options.isCssModulesFile=false] Флаг для определения сборки css модулей
 */
function makeCssRuleUse({ isCssModulesFile = false } = {}) {
  return [
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: makePostcssPlugins({ isVKUIPackageBuild: true, isCssModulesFile }),
        },
      },
    },
  ];
}

/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: 'production',
  entry: {
    vkui: ['./src/styles/themes.css', './src/index.ts'],
    components: './src/index.ts',
  },
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: '[name].js.tmp',
    cssFilename: '[name].css',
  },
  module: {
    rules: [
      {
        sideEffects: true,
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            experimental: {
              plugins: [
                [
                  'swc-plugin-css-modules',
                  {
                    generate_scoped_name: 'vkui[folder]__[local]',
                  },
                ],
              ],
            },
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: makeCssRuleUse(),
        type: 'css',
      },
      {
        test: /\.module\.css$/,
        use: makeCssRuleUse({ isCssModulesFile: true }),
        type: 'css',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: {
          targets: browser.defaults,
        },
      }),
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [],
      cleanAfterEveryBuildPatterns: ['*.tmp', '*.tmp.*'],
    }),
    new rspack.CircularDependencyRspackPlugin({
      failOnError: true,
      allowAsyncCycles: false,
    }),
  ],
  stats: {
    all: false,
    assets: true,
    errors: true,
    warnings: true,
  },
  experiments: {
    css: true,
    outputModule: true,
  },
  performance: { maxAssetSize: 10_000_000, maxEntrypointSize: 10_000_000 },
};

// eslint-disable-next-line import/no-default-export -- rspack-у нужен дефолтный экспорт
export default config;
