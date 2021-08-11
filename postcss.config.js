const path = require('path');
const cssCustomProperties = require('postcss-custom-properties');
const scopeRoot = require('./tasks/postcss-scope-root.js');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const selectorPrefixer = require('postcss-prefixer');
const csso = require('postcss-csso');
const checkKeyframes = require('./tasks/postcss-check-keyframes');
const { defaultSchemeId } = require('./package.json');

const animationsSource = path.join(__dirname, 'src/styles/animations.css')
const cssPropSources = [
  path.join(__dirname, 'src/styles/bright_light.css'),
  path.join(__dirname, 'src/styles/constants.css'),
  animationsSource,
];

let plugins = [
  cssImport(),
  checkKeyframes({
    importFrom: animationsSource
  }),
  cssCustomProperties({
    importFrom: cssPropSources,
    preserve: true
  }),
  // postcss-custom-properties only works with :root
  scopeRoot({
    customPropRoot: '.vkui__root, .vkui__portal-root',
    except: path.resolve(`./src/styles/${defaultSchemeId}.css`)
  }),
  autoprefixer(),
  selectorPrefixer({
    prefix: 'vkui',
    ignore: [/^\.vkui/, '#mount']
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(csso({ restructure: false }));
}

module.exports = { plugins, cssPropSources };
