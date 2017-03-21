const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const assets = require('postcss-assets');
const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

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
          autoprefixer({ browsers: ['last 2 versions'] })
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
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: cssTransform
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  }
};

const devConfig = {
  devtool: 'source-map',
  devServer: {
    outputPath: path.resolve(__dirname, '..', 'dist'),
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
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = isProduction
  ? merge(config, prodConfig)
  : merge(config, devConfig);
