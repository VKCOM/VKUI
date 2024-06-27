/**
 * Храним брейкпоинты в JS файле для синхронизации значений между TS и CSS.
 */
export declare const BREAKPOINTS: {
  DESKTOP: number;
  TABLET: number;
  SMALL_TABLET: number;
  MOBILE: number;
  MOBILE_LANDSCAPE_HEIGHT: number;
  MEDIUM_HEIGHT: number;
};

/**
 * Луч [a;+∞)
 */
export declare function widthPlus(a: number): string;
/**
 * Открытый луч (-∞;b)
 */
export declare function widthMinus(b: number): string;
/**
 * Полуинтервал [a;b)
 */
export declare function widthHalfInterval(a: number, b: number): string;
/**
 * Луч [a;+∞)
 */
export declare function heightPlus(a: number): string;
/**
 * Открытый луч (-∞;b)
 */
export declare function heightMinus(b: number): string;
/**
 * Полуинтервал [a;b)
 */
export declare function heightHalfInterval(a: number, b: number): string;
export declare const MEDIA_QUERIES: {
  DESKTOP_PLUS: string;
  TABLET: string;
  SMALL_TABLET_PLUS: string;
  SMALL_TABLET: string;
  MOBILE: string;
  MEDIUM_HEIGHT: string;
  MOBILE_LANDSCAPE_HEIGHT: string;
};
