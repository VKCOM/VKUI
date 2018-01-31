const path = require('path');
const glob = require('glob');

let entry = glob.sync('./src/assets/svg/**/*.svg').reduce((entries, filePath) => {
  let splitedPath = filePath.split('/');
  entries[splitedPath.slice(-2).join('/').replace('.svg', '')] = filePath;
  return entries;
}, {});

const config = {
  entry,
  output: {
    path: path.resolve('./dist/icons'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react'],
            plugins: ['transform-object-rest-spread']
          }
        }, {
          loader: path.resolve('./src/loaders/svgToReact')
        }, {
          loader: 'svg-sprite-loader'
        }, {
          loader: path.resolve('./src/loaders/optimizeSvg')
        }]
      }
    ]
  },
  externals: {
    'react': 'react',
    'prop-types': 'prop-types',
    'svg-baker-runtime/browser-symbol': 'svg-baker-runtime/browser-symbol',
    'svg-sprite-loader/runtime/browser-sprite.build': 'svg-sprite-loader/runtime/browser-sprite.build'
  }
};

module.exports = config;
