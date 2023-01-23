/**
 * Храним брейкпоинты в JS файле для синхронизации значений между TS и CSS.
 *
 * @type {{
 *  DESKTOP: 1280,
 *  TABLET: 1024,
 *  SMALL_TABLET: 768,
 *  MOBILE: 320,
 *  MOBILE_LANDSCAPE_HEIGHT: 415,
 *  MEDIUM_HEIGHT: 720
 * }}
 */
const BREAKPOINTS = {
  DESKTOP: 1280,
  TABLET: 1024,
  SMALL_TABLET: 768,
  MOBILE: 320,
  MOBILE_LANDSCAPE_HEIGHT: 415,
  MEDIUM_HEIGHT: 720,
};

// WARNING: Не используйте различия между медиа выражениями
// `(max-width: 767px)` - `(min-width: 768px)`, так как размеры могут быть
// дробными `767.333px`.
//
// Вместо этого используйте `(not (min-width: 768px))` - `(min-width: 768px)`!
const MEDIA_QUERIES = {
  DESKTOP_PLUS: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,

  TABLET: `(min-width: ${BREAKPOINTS.TABLET}px) and (not (min-width: ${BREAKPOINTS.DESKTOP}px))`,

  SMALL_TABLET_PLUS: `(min-width: ${BREAKPOINTS.SMALL_TABLET}px)`,
  SMALL_TABLET: `(min-width: ${BREAKPOINTS.SMALL_TABLET}px) and (not (min-width: ${BREAKPOINTS.TABLET}px))`,

  MOBILE: `(min-width: ${BREAKPOINTS.MOBILE}px) and (not (min-width: ${BREAKPOINTS.SMALL_TABLET}px))`,

  MEDIUM_HEIGHT: `(min-height: ${BREAKPOINTS.MEDIUM_HEIGHT}px)`,

  MOBILE_LANDSCAPE_HEIGHT: `(min-height: ${BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT}px)`,
};

module.exports = { BREAKPOINTS, MEDIA_QUERIES };
