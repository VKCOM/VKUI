import { isRefObject } from '../../lib/isRefObject';
import type { AppRootUserSelectMode, SafeAreaInsets } from './types';
import styles from './AppRoot.module.css';

export const getParentElement = (el: HTMLElement | null): HTMLElement | null =>
  el ? el.parentElement : null;

export const extractPortalRootByProp = (
  portalRootProp: HTMLElement | React.RefObject<HTMLElement>,
): HTMLElement | null => (isRefObject(portalRootProp) ? portalRootProp.current : portalRootProp);

export const CUSTOM_PROPERTY_INSET_PREFIX = `--vkui_internal--safe_area_inset_`;

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
