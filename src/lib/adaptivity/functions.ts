import { type PlatformType, Platform } from '../platform';
import type { MediaQueries } from './types';
import { SizeType, ViewHeight, ViewWidth } from './constants';

export function getViewWidthByMediaQueries(mediaQueries: MediaQueries): ViewWidth {
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

export function getViewHeightByMediaQueries(mediaQueries: MediaQueries): ViewHeight {
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

export function getSizeX(viewWidth: ViewWidth): SizeType {
  return viewWidth <= ViewWidth.MOBILE ? SizeType.COMPACT : SizeType.REGULAR;
}

export function getSizeY(
  viewWidth: ViewWidth,
  viewHeight: ViewHeight,
  hasPointer: boolean,
): SizeType {
  if ((viewWidth >= ViewWidth.SMALL_TABLET && hasPointer) || viewHeight <= ViewHeight.EXTRA_SMALL) {
    return SizeType.COMPACT;
  }
  return SizeType.REGULAR;
}

/**
 * Проверка на Desktop.
 *
 * Функция гарантировано вернёт `boolean` или `null` в зависимости от условий.
 *
 * Возвращаем `null` в случае, если у нас недостаточно данных, чтобы определить платформу.
 *
 * ⚠️ При передаче Platform.VKCOM всегда будет возвращать `true`.
 */
export function tryToCheckIsDesktop(viewWidth: ViewWidth, viewHeight: ViewHeight, hasPointer: undefined | boolean, platform?: PlatformType): boolean; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: ViewWidth, viewHeight: undefined, hasPointer: boolean, platform?: PlatformType): boolean; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined | ViewWidth, viewHeight: undefined, hasPointer: undefined, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined, viewHeight: undefined | ViewHeight, hasPointer: undefined, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined, viewHeight: undefined, hasPointer: undefined | boolean, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined | ViewWidth, viewHeight: undefined | ViewHeight, hasPointer: undefined | boolean, platform?: PlatformType): null | boolean; // prettier-ignore
export function tryToCheckIsDesktop(
  viewWidth: undefined | ViewWidth,
  viewHeight: undefined | ViewHeight,
  hasPointer: undefined | boolean,
  platform?: PlatformType,
): null | boolean {
  // см. https://github.com/VKCOM/VKUI/pull/2473
  const IS_VKCOM_CRUTCH = platform === Platform.VKCOM;

  if (
    ((viewWidth === undefined || hasPointer === undefined) &&
      (viewWidth === undefined || viewHeight === undefined)) ||
    (hasPointer === undefined && viewHeight === undefined)
  ) {
    return IS_VKCOM_CRUTCH ? true : null;
  }

  const widthIsLikeDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
  const otherParametersIsLikeDesktop =
    hasPointer || (viewHeight !== undefined ? viewHeight >= ViewHeight.MEDIUM : false);

  return (widthIsLikeDesktop && otherParametersIsLikeDesktop) || IS_VKCOM_CRUTCH;
}
