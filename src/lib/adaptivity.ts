import { type PlatformType, Platform } from "./platform";

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

/**
 * Медиа выражения.
 *
 * Должны соответствовать аналогичным медиа выражениям в `styles/customMedia.css`.
 */

export type MediaQueries = Record<
  | "desktopPlus"
  | "tablet"
  | "smallTablet"
  | "mobile"
  | "mediumHeight"
  | "mobileLandscapeHeight",
  MediaQueryList
>;

export const MEDIA_QUERIES = {
  DESKTOP_PLUS: `(min-width: ${Breakpoints.DESKTOP}px)`,

  TABLET: `(min-width: ${Breakpoints.TABLET}px) and (max-width: ${Breakpoints.DESKTOP - 1}px)`, // prettier-ignore

  SMALL_TABLET: `(min-width: ${Breakpoints.SMALL_TABLET}px) and (max-width: ${Breakpoints.TABLET - 1}px)`, // prettier-ignore

  MOBILE: `(min-width: ${Breakpoints.MOBILE}px) and (max-width: ${Breakpoints.SMALL_TABLET - 1}px)`, // prettier-ignore

  MEDIUM_HEIGHT: `(min-height: ${Breakpoints.MEDIUM_HEIGHT}px)`,

  MOBILE_LANDSCAPE_HEIGHT: `(min-height: ${Breakpoints.MOBILE_LANDSCAPE_HEIGHT + 1}px)`, // prettier-ignore
};

/**
 * Утилиты для определения текущих параметров адаптивности.
 */
export function getViewWidthByMediaQueries(mediaQueries: MediaQueries) {
  /* eslint-disable no-restricted-properties */
  if (mediaQueries.desktopPlus.matches) {
    return ViewWidth.DESKTOP;
  }
  if (mediaQueries.tablet.matches) {
    return ViewWidth.TABLET;
  }
  if (mediaQueries.smallTablet.matches) {
    return ViewWidth.SMALL_TABLET;
  }
  if (mediaQueries.mobile.matches) {
    return ViewWidth.MOBILE;
  }
  /* eslint-enable no-restricted-properties */
  return ViewWidth.SMALL_MOBILE;
}

export function getViewHeightByMediaQueries(mediaQueries: MediaQueries) {
  /* eslint-disable no-restricted-properties */
  if (mediaQueries.mediumHeight.matches) {
    return ViewHeight.MEDIUM;
  }
  if (mediaQueries.mobileLandscapeHeight.matches) {
    return ViewHeight.SMALL;
  }
  /* eslint-enable no-restricted-properties */
  return ViewHeight.EXTRA_SMALL;
}

export function getSizeX(viewWidth: ViewWidth) {
  return viewWidth <= ViewWidth.MOBILE ? SizeType.COMPACT : SizeType.REGULAR;
}

export function getSizeY(
  viewWidth: ViewWidth,
  viewHeight: ViewHeight,
  hasMouse: boolean
) {
  if (
    (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse) ||
    viewHeight <= ViewHeight.EXTRA_SMALL
  ) {
    return SizeType.COMPACT;
  }
  return SizeType.REGULAR;
}

export function checkIsDesktop(
  viewWidth: number,
  viewHeight: number,
  hasMouse: boolean,
  platform: PlatformType
): boolean {
  return (
    (viewWidth >= ViewWidth.SMALL_TABLET &&
      (hasMouse || viewHeight >= ViewHeight.MEDIUM)) ||
    platform === Platform.VKCOM
  );
}
