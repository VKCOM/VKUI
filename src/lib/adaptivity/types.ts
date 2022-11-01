/**
 * Соответствуют тому, что генерирует функция `getCustomMedias()`.
 *
 * {@link import('../../shared.js') ../../shared.js}
 */
export type CSSBreakpoints =
  | "desktopPlus"
  | "tabletPlus"
  | "tablet"
  | "tabletMinus"
  | "smallTabletPlus"
  | "smallTablet"
  | "smallTabletMinus"
  | "mobilePlus"
  | "mobile"
  | "smallMobileMinus";

/**
 * JS брейкпоинты выделены в отдельный тип, т.к. на данный момент нужны не все брейкпоинты, что используются в
 * адаптивности через CSS, а также имеются свои тонкости по типу `mobileLandscapeHeight`.
 */
export type JSBreakpoints =
  | "desktopPlus"
  | "tablet"
  | "smallTablet"
  | "mobile"
  | "mediumHeight"
  | "mobileLandscapeHeight";

export type MediaQueries = Record<JSBreakpoints, MediaQueryList>;
