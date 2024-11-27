// Используется в папке styleguide/

const iconPkg = require('./node_modules/@vkontakte/icons/package.json');
const tokensPkg = require('./node_modules/@vkontakte/vkui-tokens/package.json');
const vkuiPgk = require('./packages/vkui/package.json');

const ROOT_DIR = 'packages/vkui';
const TS_CONFIG_FOR_DIST = `${ROOT_DIR}/tsconfig.dist.json`;
const SRC_DIR = `${ROOT_DIR}/src`;
const COMPONENTS_DIR = `${SRC_DIR}/components`;

module.exports.VKUI_PACKAGE = {
  VERSION: vkuiPgk.version,

  URLS: {
    REPOSITORY: vkuiPgk.repository.url.replace('.git', ''),
    ISSUES: vkuiPgk.bugs,
    HOMEPAGE: vkuiPgk.homepage,
    NPM: 'https://www.npmjs.com/package/@vkontakte/vkui',
    TOKENS: tokensPkg.homepage,
    ICONS: iconPkg.homepage,
  },

  PATHS: {
    ROOT_DIR,
    SRC_DIR,
    TS_CONFIG_FOR_DIST,
    COMPONENTS_DIR,
  },
};
