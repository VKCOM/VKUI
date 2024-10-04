import { isRefObject } from '../../lib/isRefObject';
import type { AppRootUserSelectMode, SafeAreaInsets } from './types';
import styles from './AppRoot.module.css';

export const getParentElement = (el: HTMLElement | null): HTMLElement | null =>
  el ? el.parentElement : null;

export const extractPortalRootByProp = (
  portalRootProp: HTMLElement | React.RefObject<HTMLElement>,
): HTMLElement | null => (isRefObject(portalRootProp) ? portalRootProp.current : portalRootProp);

export const CUSTOM_PROPERTY_INSET_PREFIX = `--vkui_internal--safe_area_inset_`;

export const setSafeAreaInsets = (
  safeAreaInsets: SafeAreaInsets | undefined,
  rootContainer: HTMLElement,
  portalContainer?: HTMLElement,
): (() => void) => {
  if (!safeAreaInsets) {
    return () => void 0;
  }

  for (const key in safeAreaInsets) {
    if (safeAreaInsets.hasOwnProperty(key) && typeof safeAreaInsets[key] === 'number') {
      const propertyKey = `${CUSTOM_PROPERTY_INSET_PREFIX}${key}`;
      const propertyValue = safeAreaInsets[key];
      rootContainer.style.setProperty(propertyKey, `${propertyValue}px`);
      if (portalContainer) {
        portalContainer.style.setProperty(propertyKey, `${propertyValue}px`);
      }
    }
  }

  return function unset() {
    for (const key in safeAreaInsets) {
      if (safeAreaInsets.hasOwnProperty(key)) {
        const propertyKey = `${CUSTOM_PROPERTY_INSET_PREFIX}${key}`;
        rootContainer.style.removeProperty(propertyKey);
        if (portalContainer) {
          portalContainer.style.removeProperty(propertyKey);
        }
      }
    }
  };
};

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
