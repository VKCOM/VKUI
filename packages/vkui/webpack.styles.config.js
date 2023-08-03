const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { makePostcssPlugins } = require('./scripts/postcss');

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

module.exports = {
  // CSS is optimized via postcss, we dont care about JS
  mode: 'none',
  entry: {
    stable: ['./src/styles/themes.css', './src/index.ts'],
    components: './src/index.ts',
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
    splitChunks: {
      chunks: (chunk) => ['stable'].includes(chunk.name),
      cacheGroups: {
        // capture all common deps
        vkui: {
          name: 'vkui',
          test: (module, { chunkGraph }) =>
            chunkGraph.getModuleChunks(module).some((chunk) => chunk.name === 'stable'),
        },
      },
    },
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
