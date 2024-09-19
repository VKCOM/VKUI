import path from 'node:path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getMinimizerOptions, makePostcssPlugins } from './scripts/postcss.js';

/**
 * Конфигурация для css
 * @param {Object} config - Конфигурация.
 * @param {boolean | undefined} config.isCssModulesFile - Сборка module.css файлов.
 */
function makeCssRuleUse({ isCssModulesFile = false } = {}) {
  return [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: false,
      },
    },
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

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  entry: {
    vkui: ['./src/styles/themes.css', './src/index.ts'],
    components: './src/index.ts',
  },
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: '[name].js.tmp',
  },
  module: {
    rules: [
      {
        sideEffects: true,
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        options: {
          jsc: {
            experimental: {
              plugins: [
                [
                  'swc-plugin-css-modules',
                  {
                    generate_scoped_name: 'vkui[local]',
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
      },
      {
        test: /\.module\.css$/,
        use: makeCssRuleUse({ isCssModulesFile: true }),
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin({ minimizerOptions: getMinimizerOptions(true) })],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
  stats: {
    all: false,
    assets: true,
    errors: true,
    warnings: true,
  },
};

// eslint-disable-next-line import/no-default-export -- требуется для webpack
export default config;
