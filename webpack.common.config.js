const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { VKUI_PACKAGE, generateScopedName } = require('./shared');

const isProduction = process.env.NODE_ENV === 'production';

const sandbox = process.env.SANDBOX;

const styleLoader = {
  loader: 'style-loader',
  options: {
    // singleton is faster, but does not support sourcemaps
    injectType: isProduction ? 'singletonStyleTag' : 'styleTag',
    attributes: {
      class: 'vkui-style',
    },
  },
};

const rules = [
  {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    loader: 'swc-loader',
  },
  {
    test: /\.(jpeg|jpg|png|woff|woff2|svg|otf)$/,
    type: 'asset/resource',
    generator: {
      filename: 'static/[name].[hash:8].[ext]',
    },
  },
  {
    test: /\.css$/,
    exclude: sandbox ? new RegExp(`${sandbox}|\\.module\\.css$`) : /\.module\.css$/,
    use: [styleLoader, 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.css$/,
    include: /\.module\.css$/,
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            mode: 'pure',
            getLocalIdent(context, localIdentName, localName) {
              return generateScopedName(localName);
            },
            exportLocalsConvention: 'asIs',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            isSandbox: Boolean(sandbox),
          },
        },
      },
    ],
  },
];

if (sandbox) {
  rules.push({
    test: /\.css$/,
    include: new RegExp(sandbox),
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            isSandbox: true,
          },
        },
      },
    ],
  });
}

const config = {
  entry: {
    vkui: `./${VKUI_PACKAGE.PATHS.JS_MAIN_EXPORT}`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  module: {
    rules,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  stats: {
    children: false,
  },
  externals: [
    {
      'react': 'react',
      'react-dom': 'react-dom',
    },
    /@vkontakte\/icons/i,
  ],
};

const devConfig = {
  mode: 'development',
};

const prodConfig = {
  mode: 'production',
};

module.exports = isProduction ? merge(config, prodConfig) : merge(config, devConfig);
