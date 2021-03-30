const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const selectorPrefixer = require('postcss-prefixer');
const csso = require('postcss-csso');
const checkKeyframes = require('./tasks/postcss-check-keyframes');

let plugins = [
  cssImport(),
  checkKeyframes(),
  cssCustomProperties({ preserve: true }),
  autoprefixer(),
  selectorPrefixer({
    prefix: 'vkui',
    ignore: [/^\.vkui/, '#mount']
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(csso({ restructure: false }));
}

module.exports = { plugins };
