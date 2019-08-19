const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    cssImport(),
    cssCustomProperties({ preserve: true }),
    autoprefixer()
  ]
}
