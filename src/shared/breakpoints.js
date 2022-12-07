/**
 * Храним брейкпоинты в JS файле для синхронизации значений между TS и CSS.
 *
 * @type {{
 *  DESKTOP: 1280,
 *  TABLET: 1024,
 *  SMALL_TABLET: 768,
 *  MOBILE: 320,
 *  MOBILE_LANDSCAPE_HEIGHT: 414,
 *  MEDIUM_HEIGHT: 720
 * }}
 */
const BREAKPOINTS = {
  DESKTOP: 1280,
  TABLET: 1024,
  SMALL_TABLET: 768,
  MOBILE: 320,
  MOBILE_LANDSCAPE_HEIGHT: 414,
  MEDIUM_HEIGHT: 720,
};

const MEDIA_QUERIES = {
  DESKTOP_PLUS: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,

  TABLET: `(min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.DESKTOP - 1}px)`, // prettier-ignore

  SMALL_TABLET: `(min-width: ${BREAKPOINTS.SMALL_TABLET}px) and (max-width: ${BREAKPOINTS.TABLET - 1}px)`, // prettier-ignore

  MOBILE: `(min-width: ${BREAKPOINTS.MOBILE}px) and (max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px)`, // prettier-ignore

  MEDIUM_HEIGHT: `(min-height: ${BREAKPOINTS.MEDIUM_HEIGHT}px)`,

  MOBILE_LANDSCAPE_HEIGHT: `(min-height: ${BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT + 1}px)`, // prettier-ignore
};

module.exports = { BREAKPOINTS, MEDIA_QUERIES };
