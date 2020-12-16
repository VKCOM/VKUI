import * as path from 'path';
import { promisify } from 'util';
import cbGlob from 'glob';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('../webpack.config.js');
const glob = promisify(cbGlob);

const { externals, plugins = [], devServer, resolve = {}, output = {}, ...baseWebpackConfig } = webpackConfig;

export async function generateWebpackConfig() {
  const testFiles = await glob(path.join(__dirname, '../src/**/*.e2e.{ts,tsx}'));
  return {
    ...baseWebpackConfig,
    entry: {
      main: [path.resolve(__dirname, 'browser/runtime.ts'), ...testFiles],
      vkui: [path.resolve(__dirname, 'styles.test.css')],
    },
    output: {
      ...output,
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      ...resolve,
      alias: {
        ...resolve.alias,
        '@react-playwright': path.resolve(__dirname, 'browser/mount.ts'),
      },
    },
    devServer: {
      ...devServer,
      contentBase: path.join(__dirname, 'dist'),
    },
    module: {
      ...webpackConfig.module,
      rules: [
        ...(webpackConfig.module || {}).rules,
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
      ...plugins,
      new MiniCssExtractPlugin(),
    ],
  };
};
