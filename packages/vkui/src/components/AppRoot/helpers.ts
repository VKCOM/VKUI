import { generateVKUITokensClassName } from '../../helpers/generateVKUITokensClassName';
import type { SizeTypeValues } from '../../lib/adaptivity';
import type { AppearanceType } from '../../lib/appearance';
import { isRefObject } from '../../lib/isRefObject';
import type { AppRootLayout, AppRootMode, SafeAreaInsets } from './types';

type ContainerClassNamesProps = {
  mode: AppRootMode;
  layout?: AppRootLayout;
  platform: string;
  appearance: AppearanceType;
  sizeX: SizeTypeValues | 'none';
  sizeY: SizeTypeValues | 'none';
};

export function getClassNamesByMode({
  mode,
  layout,
  platform,
  appearance,
  sizeX,
  sizeY,
}: ContainerClassNamesProps): [string[], string[]] {
  const baseClassNames: string[] = ['vkui__root'];
  const stylesClassNames: string[] = [generateVKUITokensClassName(platform, appearance)];

  if (mode === 'full' || mode === 'embedded') {
    if (layout) {
      const vkuiLayoutClassNames = { card: 'vkuiLayoutCard', plain: 'vkuiLayoutPlain' };
      stylesClassNames.push(vkuiLayoutClassNames[layout]);
    }

    if (sizeX !== 'compact') {
      const vkuiSizeXClassNames = { none: 'vkuiSizeXNone', regular: 'vkuiSizeXRegular' };
      stylesClassNames.push(vkuiSizeXClassNames[sizeX]);
    }

    if (sizeY !== 'regular') {
      const vkuiSizeYClassNames = { none: 'vkuiSizeYNone', compact: 'vkuiSizeYCompact' };
      stylesClassNames.push(vkuiSizeYClassNames[sizeY]);
    }

    if (mode === 'embedded') {
      baseClassNames.push('vkui__root--embedded');
    }
  }

  return [baseClassNames, stylesClassNames];
}

export const getParentElement = (el: HTMLElement | null) => (el ? el.parentElement : null);

export const extractPortalRootByProp = (
  portalRootProp: HTMLElement | React.RefObject<HTMLElement>,
) => (isRefObject(portalRootProp) ? portalRootProp.current : portalRootProp);

export const CUSTOM_PROPERTY_INSET_PREFIX = `--vkui_internal--safe_area_inset_`;

export const setSafeAreaInsets = (
  safeAreaInsets: SafeAreaInsets | undefined,
  rootContainer: HTMLElement,
  portalContainer?: HTMLElement,
) => {
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
