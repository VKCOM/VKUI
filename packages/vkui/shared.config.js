const pkg = require('./package.json');
const {
  BREAKPOINTS,
  MEDIA_QUERIES,
  widthPlus,
  widthMinus,
  heightMinus,
  heightPlus,
} = require('./src/shared/breakpoints');

module.exports.VERSION = pkg.version;

module.exports.URLS = {
  REPOSITORY: pkg.repository.url.replace('.git', ''),
  ISSUES: pkg.bugs,
};

/**
 * Возвращает медиа выражения необходимые по дизайн-системе. У ключей синтаксис должен быть как у CSS Custom Properties.
 *
 * > ❗️IMPORTANT❗️
 * > При изменении функции следует вызвать команду `yarn workspace @vkontakte/vkui run generate:css-custom-medias`,
 * > для обновления CSS файла, и закоммитить изменения.
 *
 * {@link https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media}
 */
const getCustomMedias = () => {
  const customMedia = {
    '--sizeX-regular': widthPlus(BREAKPOINTS.SMALL_TABLET),
    '--sizeX-compact': widthMinus(BREAKPOINTS.SMALL_TABLET),

    '--sizeY-compact': `(pointer: fine) and ${widthPlus(BREAKPOINTS.SMALL_TABLET)}, ${heightMinus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}`, // prettier-ignore
    '--sizeY-regular': `(pointer: coarse) and ${heightPlus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}, (pointer: none) and ${heightPlus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}, ${widthMinus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}`, // prettier-ignore

    '--hover-has': '(hover: hover)',
    '--hover-has-not': '(hover: none)',

    '--pointer-has': '(pointer: fine)',
    '--pointer-has-not': '(pointer: coarse), (pointer: none)',

    '--desktop': `${widthPlus(BREAKPOINTS.SMALL_TABLET)} and (pointer: fine), ${widthPlus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(BREAKPOINTS.MEDIUM_HEIGHT)}`, // prettier-ignore
    '--mobile': `${widthMinus(BREAKPOINTS.SMALL_TABLET)}, (pointer: none) and ${heightMinus(BREAKPOINTS.MEDIUM_HEIGHT)}, (pointer: coarse) and ${heightMinus(BREAKPOINTS.MEDIUM_HEIGHT)}`, // prettier-ignore

    '--viewWidth-desktopPlus': MEDIA_QUERIES.DESKTOP_PLUS,

    '--viewWidth-tabletPlus': widthPlus(BREAKPOINTS.TABLET),
    '--viewWidth-tablet': MEDIA_QUERIES.TABLET,
    '--viewWidth-tabletMinus': widthMinus(BREAKPOINTS.TABLET),

    '--viewWidth-smallTabletPlus': MEDIA_QUERIES.SMALL_TABLET_PLUS,
    '--viewWidth-smallTablet': MEDIA_QUERIES.SMALL_TABLET,
    '--viewWidth-smallTabletMinus': widthMinus(BREAKPOINTS.SMALL_TABLET),

    '--viewWidth-mobilePlus': widthPlus(BREAKPOINTS.MOBILE),
    '--viewWidth-mobile': MEDIA_QUERIES.MOBILE,

    '--viewWidth-smallMobileMinus': widthMinus(BREAKPOINTS.MOBILE),
  };

  return { customMedia };
};

module.exports.getCustomMedias = getCustomMedias;

const ROOT_DIR = 'packages/vkui';
const TS_CONFIG_FOR_DIST = `${ROOT_DIR}/tsconfig.dist.json`;
const SRC_DIR = `${ROOT_DIR}/src`;
const JS_MAIN_EXPORT = `${SRC_DIR}/vkui.js`;
const COMPONENTS_DIR = `${SRC_DIR}/components`;
const STYLES_DIR = `${SRC_DIR}/styles`;
const CSS_CONSTANTS = `${STYLES_DIR}/constants.css`;
const CSS_CUSTOM_MEDIAS = `${STYLES_DIR}/customMedias.generated.css`;
const TYPES_DIR = `${SRC_DIR}/types`;
const TEST_UTILS_DIR = `${SRC_DIR}/testing`;

module.exports.PATHS = {
  ROOT_DIR,
  SRC_DIR,
  JS_MAIN_EXPORT,
  TS_CONFIG_FOR_DIST,
  COMPONENTS_DIR,
  STYLES_DIR,
  CSS_CONSTANTS,
  CSS_CUSTOM_MEDIAS,
  TYPES_DIR,
  TEST_UTILS_DIR,
};
