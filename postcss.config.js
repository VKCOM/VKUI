const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');

let plugins = [
  cssImport(),
  cssCustomProperties({ preserve: true }),
  autoprefixer(),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(csso({ restructure: false }));
}

module.exports = { plugins };
