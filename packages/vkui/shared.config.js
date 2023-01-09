const pkg = require('./package.json');
const { BREAKPOINTS, MEDIA_QUERIES } = require('./src/shared/breakpoints');

module.exports.VERSION = pkg.version;

module.exports.URLS = {
  REPOSITORY: pkg.repository.url.replace('.git', ''),
  ISSUES: pkg.bugs,
};

/**
 * Возвращает медиа выражения необходимые по дизайн-системе. У ключей синтаксис должен быть как у CSS Custom Properties.
 * <br />
 * {@link https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media}
 */
const getCustomMedias = () => {
  const customMedia = {
    '--sizeX-regular': `(min-width: ${BREAKPOINTS.SMALL_TABLET}px)`,
    '--sizeX-compact': `(max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px)`,

    "--sizeY-compact": `(pointer: fine) and (min-width: ${BREAKPOINTS.SMALL_TABLET}px), (max-height: ${BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT}px)`, // prettier-ignore
    "--sizeY-regular": `(pointer: coarse) and (min-height: ${415}px), (pointer: none) and (min-height: ${415}px), (max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px) and (min-height: ${415}px)`, // prettier-ignore

    '--hover-has': '(hover: hover)',
    '--hover-has-not': '(hover: none)',

    '--pointer-has': '(pointer: fine)',
    '--pointer-has-not': '(pointer: coarse), (pointer: none)',

    "--desktop": `(min-width: ${BREAKPOINTS.SMALL_TABLET}px) and (pointer: fine), (min-width: ${BREAKPOINTS.SMALL_TABLET}px) and (min-height: ${BREAKPOINTS.MEDIUM_HEIGHT}px)`, // prettier-ignore
    "--mobile": `(max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px), (pointer: none) and (max-height: ${BREAKPOINTS.MEDIUM_HEIGHT - 1}px), (pointer: coarse) and (max-height: ${BREAKPOINTS.MEDIUM_HEIGHT - 1}px)`, // prettier-ignore

    '--viewWidth-desktopPlus': MEDIA_QUERIES.DESKTOP_PLUS,

    '--viewWidth-tabletPlus': `(min-width: ${BREAKPOINTS.TABLET}px)`,
    '--viewWidth-tablet': MEDIA_QUERIES.TABLET,
    '--viewWidth-tabletMinus': `(max-width: ${BREAKPOINTS.TABLET - 1}px)`,

    '--viewWidth-smallTabletPlus': MEDIA_QUERIES.SMALL_TABLET_PLUS,
    '--viewWidth-smallTablet': MEDIA_QUERIES.SMALL_TABLET,
    "--viewWidth-smallTabletMinus": `(max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px)`, // prettier-ignore

    '--viewWidth-mobilePlus': `(min-width: ${BREAKPOINTS.MOBILE}px)`,
    '--viewWidth-mobile': MEDIA_QUERIES.MOBILE,

    "--viewWidth-smallMobileMinus": `(max-width: ${BREAKPOINTS.MOBILE - 1}px)`, // prettier-ignore
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
const CSS_ANIMATIONS = `${STYLES_DIR}/animations.css`;
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
  CSS_ANIMATIONS,
  TYPES_DIR,
  TEST_UTILS_DIR,
};
