const path = require('path');

const config = {
  entry: {
    about_24: './src/assets/svg/24/about_24.svg'
  },
  output: {
    path: path.resolve('./dist/icons'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'es2015',
                { modules: false }
              ],
              'react'
            ],
            plugins: ['transform-class-properties', 'transform-object-rest-spread'],
            env: {
              production: {
                plugins: [
                  'transform-react-remove-prop-types',
                  'transform-class-properties'
                ]
              }
            }
          }
        }, {
          loader: 'svg-sprite-loader'
        }]
      }
    ]
  }
};

module.exports = config;
