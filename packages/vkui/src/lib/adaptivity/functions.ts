import type { Exact } from '../../types';
import { type PlatformType } from '../platform';
import {
  BREAKPOINTS,
  SizeTypeValues,
  VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP,
  ViewHeight,
  ViewHeightType,
  ViewWidth,
  ViewWidthType,
} from './constants';
import type { CSSBreakpointsClassNames, MediaQueries } from './types';

/**
 * @public
 */
export function getViewWidthByViewportWidth(viewportWidth: number) {
  if (viewportWidth >= BREAKPOINTS.DESKTOP) {
    return ViewWidth.DESKTOP;
  }
  if (viewportWidth >= BREAKPOINTS.TABLET) {
    return ViewWidth.TABLET;
  }
  if (viewportWidth >= BREAKPOINTS.SMALL_TABLET) {
    return ViewWidth.SMALL_TABLET;
  }
  if (viewportWidth >= BREAKPOINTS.MOBILE) {
    return ViewWidth.MOBILE;
  }
  return ViewWidth.SMALL_MOBILE;
}

export function getViewWidthByMediaQueries(mediaQueries: MediaQueries): ViewWidthType {
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

/**
 * @public
 */
export function getViewHeightByViewportHeight(viewportHeight: number) {
  if (viewportHeight >= BREAKPOINTS.MEDIUM_HEIGHT) {
    return ViewHeight.MEDIUM;
  }
  if (viewportHeight >= BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT) {
    return ViewHeight.SMALL;
  }
  return ViewHeight.EXTRA_SMALL;
}

export function getViewHeightByMediaQueries(mediaQueries: MediaQueries): ViewHeightType {
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

export function getSizeX(viewWidth: ViewWidthType): SizeTypeValues {
  return viewWidth <= ViewWidth.MOBILE ? 'compact' : 'regular';
}

export function isCompactByViewWidth(viewWidth: ViewWidthType | undefined, hasPointer?: boolean) {
  return viewWidth !== undefined && viewWidth >= ViewWidth.SMALL_TABLET && hasPointer;
}

export function isCompactByViewHeight(viewHeight: ViewHeightType | undefined) {
  return viewHeight !== undefined && viewHeight <= ViewHeight.EXTRA_SMALL;
}

export function getSizeY(
  viewWidth: ViewWidthType,
  viewHeight: ViewHeightType,
  hasPointer: boolean,
): SizeTypeValues {
  if (isCompactByViewWidth(viewWidth, hasPointer) || isCompactByViewHeight(viewHeight)) {
    return 'compact';
  }
  return 'regular';
}

/**
 * Проверка на Desktop.
 *
 * Функция гарантировано вернёт `boolean` или `null` в зависимости от условий.
 *
 * Возвращаем `null` в случае, если у нас недостаточно данных, чтобы определить платформу.
 *
 * ⚠️ При передаче 'vkcom' всегда будет возвращать `true`.
 */
export function tryToCheckIsDesktop(viewWidth: ViewWidthType, viewHeight: ViewHeightType, hasPointer: undefined | boolean, platform?: PlatformType): boolean; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: ViewWidthType, viewHeight: undefined, hasPointer: boolean, platform?: PlatformType): boolean; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined | ViewWidthType, viewHeight: undefined, hasPointer: undefined, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined, viewHeight: undefined | ViewHeightType, hasPointer: undefined, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined, viewHeight: undefined, hasPointer: undefined | boolean, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined | ViewWidthType, viewHeight: undefined | ViewHeightType, hasPointer: undefined | boolean, platform?: PlatformType): null | boolean; // prettier-ignore
export function tryToCheckIsDesktop(
  viewWidth: undefined | ViewWidthType,
  viewHeight: undefined | ViewHeightType,
  hasPointer: undefined | boolean,
  platform?: PlatformType,
): null | boolean {
  // см. https://github.com/VKCOM/VKUI/pull/2473
  const IS_VKCOM_CRUTCH = platform === 'vkcom';

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

/**
 * Конвертирует `viewWidth` в CSS брейкпоинты (см. тесты для наглядности).
 *
 * > Note: используется восклицательный знак (!), чтобы принудить TS поверить, что св-во точно не может быть
 * > `undefined`. Это всё из-за применения `Partial<...>` для объекта.
 */
export function viewWidthToClassName<T extends Partial<CSSBreakpointsClassNames>>(
  breakpointClassNames: Exact<CSSBreakpointsClassNames, T>,
  viewWidth: ViewWidthType | 'none' = 'none',
): string | null {
  if (viewWidth === 'none') {
    return breakpointClassNames.hasOwnProperty('none') ? breakpointClassNames['none']! : null;
  }

  const breakpoints: string[] = [];
  const breakpointName = VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP[viewWidth];

  if (breakpointClassNames.hasOwnProperty(breakpointName)) {
    breakpoints.push(breakpointClassNames[breakpointName]!);
  }

  if (viewWidth >= ViewWidth.MOBILE) {
    if (breakpointClassNames.hasOwnProperty('mobilePlus')) {
      breakpoints.push(breakpointClassNames['mobilePlus']!);
    }
  }

  if (viewWidth >= ViewWidth.SMALL_TABLET) {
    if (breakpointClassNames.hasOwnProperty('smallTabletPlus')) {
      breakpoints.push(breakpointClassNames['smallTabletPlus']!);
    }
  } else {
    if (breakpointClassNames.hasOwnProperty('smallTabletMinus')) {
      breakpoints.push(breakpointClassNames['smallTabletMinus']!);
    }
  }

  if (viewWidth >= ViewWidth.TABLET) {
    if (breakpointClassNames.hasOwnProperty('tabletPlus')) {
      breakpoints.push(breakpointClassNames['tabletPlus']!);
    }
  } else {
    if (breakpointClassNames.hasOwnProperty('tabletMinus')) {
      breakpoints.push(breakpointClassNames['tabletMinus']!);
    }
  }

  return breakpoints.length > 0 ? breakpoints.join(' ') : null;
}
