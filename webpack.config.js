const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const assets = require('postcss-assets');
const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const cssMaps = require('postcss-map');
const autoprefixer = require('autoprefixer');
const colorsMaps = require('./src/helpers/colors');
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

const cssTransformOptions = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => {
        return [
          assets(),
          cssImport(),
          cssCustomProperties(),
          cssMaps({
            maps: [{ colors: colorsMaps }]
          }),
          autoprefixer({ browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9',
            'android >= 4'
          ] })
        ];
      }
    }
  }
];

const cssTransform = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: cssTransformOptions
});

const config = {
  entry: {
    vkui: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules\/(?!vkui)(.+)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'es2015',
              { modules: false }
            ],
            'react'
          ],
          plugins: ['transform-class-properties'],
          env: {
            production: {
              plugins: [
                'transform-react-remove-prop-types',
                'transform-class-properties'
              ]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: cssTransform
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};

const devConfig = {
  devServer: {
    outputPath: path.resolve(__dirname, 'dist'),
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'errors-only'
  }
};

const prodConfig = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"production"`,
      'process.env.VKUI_VERSION': `"${pkg.version}"`
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = isProduction
  ? merge(config, prodConfig)
  : merge(config, devConfig);
