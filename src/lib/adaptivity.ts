import { BREAKPOINTS, MEDIA_QUERIES } from "../shared/breakpoints";
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
export { BREAKPOINTS };

/**
 * Медиа выражения.
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

export { MEDIA_QUERIES };

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
