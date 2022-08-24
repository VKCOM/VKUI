/**
 * Базовые параметры адаптивности.
 */
export enum ViewWidth {
  SMALL_MOBILE = 1,
  MOBILE,
  SMALL_TABLET,
  TABLET,
  DESKTOP,
}

export enum ViewHeight {
  EXTRA_SMALL = 1,
  SMALL,
  MEDIUM,
}

export enum SizeType {
  COMPACT = "compact",
  REGULAR = "regular",
}

/**
 * Брейкпоинты.
 */
export const enum Breakpoints {
  DESKTOP = 1280,
  TABLET = 1024,
  SMALL_TABLET = 768,
  MOBILE = 320,
  MOBILE_LANDSCAPE_HEIGHT = 414,
  MEDIUM_HEIGHT = 720,
}
