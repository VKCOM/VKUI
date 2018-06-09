const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const cssMaps = require('postcss-map');
const autoprefixer = require('autoprefixer');
const colorsMaps = require('../src/helpers/colors');
const fontMaps = require('../src/helpers/fonts');

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
          cssCustomProperties(),
          cssMaps({
            maps: [{ colors: colorsMaps.values, fontFamilies: fontMaps.families }]
          }),
          autoprefixer()
        ];
      }
    }
  }
];
