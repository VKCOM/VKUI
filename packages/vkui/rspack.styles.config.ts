import path from 'node:path';
import rspack, { type Configuration, type RspackPluginInstance } from '@rspack/core';
import browserslist from 'browserslist';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { makePostcssPlugins } from './scripts/postcss';

const rootDirectory = path.join(__dirname, '../../');
const browser = browserslist.readConfig(path.join(rootDirectory, '.browserslistrc'));

interface MakeCssRuleUseOptions {
  /**
   * Флаг для определения сборки css модулей
   */
  isCssModulesFile?: boolean;
}

/**
 * Конфигурация для css
 */
function makeCssRuleUse({ isCssModulesFile = false }: MakeCssRuleUseOptions = {}) {
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

const config: Configuration = {
  mode: 'production',
  entry: {
    vkui: ['./src/styles/themes.css', './src/index.ts'],
    components: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
                    generate_scoped_name: '[folder]__[local]--[hash:base64:5]',
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
    }) as unknown as RspackPluginInstance,
  ],
  stats: {
    all: false,
    assets: true,
    errors: true,
    warnings: true,
  },
  experiments: {
    css: true,
  },
};

// eslint-disable-next-line import/no-default-export -- rspack-у нужен дефолтный экспорт
export default config;
