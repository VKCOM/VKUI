import * as path from 'path';
import { promisify } from 'util';
import cbGlob from 'glob';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpackCommonConfig from '../webpack.common.config';
import { VKUI_PACKAGE } from '../shared';

const glob = promisify(cbGlob);

// TODO Использовать webpack-merge и удалить @ts-expect-error
const {
  externals,
  plugins = [],
  // @ts-expect-error: TS2339 В webpackCommonConfig нет этого поля
  devServer,
  resolve = {},
  output = {},
  ...baseWebpackConfig
} = webpackCommonConfig;

export async function generateWebpackConfig() {
  process.env.BABEL_KEEP_CSS = '1';
  const testFiles = await glob(
    path.join(__dirname, `../${VKUI_PACKAGE.PATHS.SRC_DIR}/**/*.e2e.{ts,tsx}`),
  );
  return {
    ...baseWebpackConfig,
    entry: {
      main: [
        path.resolve(__dirname, 'browser/runtime.ts'),
        path.resolve(__dirname, 'styles.test.css'),
        ...testFiles,
      ],
    },
    output: {
      ...output,
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      ...resolve,
      alias: {
        // @ts-expect-error: TS239 В webpackCommonConfig нет этого поля
        ...resolve.alias,
        '@project-e2e/helpers': path.resolve(__dirname, 'browser/mount.ts'),
      },
    },
    devServer: {
      ...devServer,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
    },
    module: {
      ...webpackCommonConfig.module,
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  require.resolve('babel-plugin-istanbul'),
                  {
                    exclude: [
                      '**/*.d.ts',
                      '**/*.e2e.tsx',
                      'e2e/',
                      `${VKUI_PACKAGE.PATHS.TYPES_DIR}`,
                      `${VKUI_PACKAGE.PATHS.TEST_UTILS_DIR}`,
                    ],
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader', options: { url: false, modules: false } },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      ...plugins,
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.APPEARANCE': JSON.stringify(process.env.APPEARANCE),
        'process.env.BROWSER': JSON.stringify(process.env.BROWSER),
        'process.env.PLATFORM': JSON.stringify(process.env.PLATFORM),
      }),
    ],
  };
}
