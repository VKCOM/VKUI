const iconPkg = require('@vkontakte/icons/package.json');
const tokensPkg = require('@vkontakte/vkui-tokens/package.json');
const pkg = require('../../packages/vkui/package.json');

module.exports.VERSION = pkg.version;

module.exports.URLS = {
  REPOSITORY: pkg.repository.url.replace('.git', ''),
  ISSUES: pkg.bugs,
  HOMEPAGE: pkg.homepage,
  NPM: 'https://www.npmjs.com/package/@vkontakte/vkui',
  TOKENS: tokensPkg.homepage,
  ICONS: iconPkg.homepage,
};

const ROOT_DIR = 'packages/vkui';
const TS_CONFIG_FOR_DIST = `${ROOT_DIR}/tsconfig.dist.json`;
const SRC_DIR = `${ROOT_DIR}/src`;
const JS_BREAKPOINTS = `${SRC_DIR}/lib/adaptivity/breakpoints.ts`;
const COMPONENTS_DIR = `${SRC_DIR}/components`;
const STYLES_DIR = `${SRC_DIR}/styles`;
const CSS_CONSTANTS = `${STYLES_DIR}/constants.css`;
const CSS_DYNAMIC_TOKENS = `${STYLES_DIR}/dynamicTokens.css`;
const CSS_CUSTOM_MEDIAS = `${STYLES_DIR}/customMedias.generated.css`;
const TYPES_DIR = `${SRC_DIR}/types`;
const TEST_UTILS_DIR = `${SRC_DIR}/testing`;

module.exports.PATHS = {
  ROOT_DIR,
  SRC_DIR,
  JS_BREAKPOINTS,
  TS_CONFIG_FOR_DIST,
  COMPONENTS_DIR,
  STYLES_DIR,
  CSS_CONSTANTS,
  CSS_DYNAMIC_TOKENS,
  CSS_CUSTOM_MEDIAS,
  TYPES_DIR,
  TEST_UTILS_DIR,
};
