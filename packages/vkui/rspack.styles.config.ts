import * as path from 'node:path';
import * as rspack from '@rspack/core';
import browserslist from 'browserslist';
import { CleanOnDoneRspackPlugin } from './scripts/CleanOnDoneRspackPlugin.ts';
import { makePostcssPlugins } from './scripts/postcss.ts';

const rootDirectory = path.join(import.meta.dirname, '../../');
const browser = browserslist.readConfig(path.join(rootDirectory, '.browserslistrc'));
/**
 * Конфигурация для css
 */
function makeCssRuleUse({ isCssModulesFile = false }: { isCssModulesFile?: boolean } = {}) {
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

const config: rspack.Configuration = {
  mode: 'production',
  entry: {
    vkui: ['./src/styles/themes.css', './src/index.ts'],
    components: './src/index.ts',
  },
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: '[name].js.tmp',
    cssFilename: '[name].css',
    module: true,
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
          // https://github.com/parcel-bundler/lightningcss/issues/1180
          targets: browser.defaults.filter((v) => !v.startsWith('Android ')),
        },
      }),
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new CleanOnDoneRspackPlugin(['dist/*.tmp', 'dist/*.tmp.*']),
    new rspack.CircularDependencyRspackPlugin({
      failOnError: true,
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
  },
  performance: { maxAssetSize: 10_000_000, maxEntrypointSize: 10_000_000 },
};

// eslint-disable-next-line import/no-default-export -- rspack-у нужен дефолтный экспорт
export default config;
