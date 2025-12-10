import * as React from 'react';
import { isRefObject } from '../../lib/isRefObject';
import type { AppRootUserSelectMode, SafeAreaInsets } from './types';
import styles from './AppRootStyleContainer/AppRootStyleContainer.module.css';

export const extractPortalRootByProp = (
  portalRootProp: HTMLElement | React.RefObject<HTMLElement>,
): HTMLElement | null => (isRefObject(portalRootProp) ? portalRootProp.current : portalRootProp);

export const CUSTOM_PROPERTY_INSET_PREFIX = `--vkui_internal--safe_area_inset_`;

export function useSafeAreaInsetsMemo(safeAreaInsetsProp: SafeAreaInsets | undefined) {
  const { top, right, bottom, left } = safeAreaInsetsProp ?? {};
  const safeAreaInsets = React.useMemo(
    () => ({
      top,
      right,
      bottom,
      left,
    }),
    [top, right, bottom, left],
  );

  return safeAreaInsets;
}

export function getSafeAreaInsetsAsCssVariables(
  safeAreaInsets: SafeAreaInsets | undefined,
): Record<string, string> {
  if (!safeAreaInsets) {
    return {};
  }

  const cssVariables: Record<string, string> = {};

  for (const key in safeAreaInsets) {
    if (safeAreaInsets.hasOwnProperty(key) && typeof safeAreaInsets[key] === 'number') {
      const propertyKey = `${CUSTOM_PROPERTY_INSET_PREFIX}${key}`;
      const propertyValue = safeAreaInsets[key];

      cssVariables[propertyKey] = `${propertyValue}px`;
    }
  }

  return cssVariables;
}

export function getUserSelectModeClassName({
  userSelectMode,
  isWebView,
  hasPointer,
}: {
  userSelectMode: AppRootUserSelectMode | undefined;
  isWebView: boolean;
  hasPointer: boolean | undefined;
}): string | null {
  switch (userSelectMode) {
    case 'enabled-with-pointer': {
      if (hasPointer) {
        return null;
      }

      const enableByHasPointerMediaQuery = hasPointer === undefined;
      if (enableByHasPointerMediaQuery) {
        return styles.pointerNone;
      }

      return styles.userSelectNone;
    }
    case 'disabled':
      return styles.userSelectNone;
    case 'enabled':
      return null;
    default:
      return isWebView ? styles.userSelectNone : null;
  }
}
