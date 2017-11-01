const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const assets = require('postcss-assets');
const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';
const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf-8')).version;

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
          autoprefixer({ browsers: ['last 2 versions', 'android >= 4'] })
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
  plugins: [
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"production"`,
      'process.env.VKUI_VERSION': `"${version}"`
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        drop_console: true,
        unsafe: true
      },
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      comments: false
    }),
    new CssoWebpackPlugin()
  ]
};

module.exports = isProduction
  ? merge(config, prodConfig)
  : merge(config, devConfig);
