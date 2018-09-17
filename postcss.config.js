const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = [
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
          cssImport(),
          cssCustomProperties({ preserve: true }),
          autoprefixer()
        ];
      }
    }
  }
];
