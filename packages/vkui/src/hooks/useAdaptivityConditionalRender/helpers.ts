import { SizeType, tryToCheckIsDesktop, ViewHeight, ViewWidth } from '../../lib/adaptivity';
import type { PlatformType } from '../../lib/platform';
import type {
  AdaptiveDeviceType,
  AdaptiveSizeType,
  AdaptiveViewWidth,
  DeviceTypeCSSBreakpoints,
  ElementProps,
  ViewWidthCSSBreakpoints,
} from './types';

export const getAdaptiveSizeType = (
  type: undefined | SizeType,
  compactClassNames: Record<'mq' | SizeType.COMPACT, ElementProps>,
  regularClassNames: Record<'mq' | SizeType.REGULAR, ElementProps>,
): AdaptiveSizeType => {
  return {
    compact:
      type === undefined
        ? compactClassNames.mq
        : type === SizeType.COMPACT
        ? compactClassNames[type]
        : false,
    regular:
      type === undefined
        ? regularClassNames.mq
        : type === SizeType.REGULAR
        ? regularClassNames[type]
        : false,
  };
};

export const getAdaptiveViewWidth = (
  viewWidth: undefined | ViewWidth,
  viewWidthClassNames: Record<ViewWidthCSSBreakpoints, Record<'mq' | 'forced', ElementProps>>,
): AdaptiveViewWidth => {
  return {
    tabletMinus:
      viewWidth === undefined
        ? viewWidthClassNames.tabletMinus.mq
        : viewWidth < ViewWidth.TABLET
        ? viewWidthClassNames.tabletMinus.forced
        : false,
    tabletPlus:
      viewWidth === undefined
        ? viewWidthClassNames.tabletPlus.mq
        : viewWidth >= ViewWidth.TABLET
        ? viewWidthClassNames.tabletPlus.forced
        : false,
  };
};

export const getAdaptiveDeviceType = (
  viewWidth: undefined | ViewWidth,
  viewHeight: undefined | ViewHeight,
  hasPointer: undefined | boolean,
  platform: PlatformType,
  deviceTypeClassNames: Record<DeviceTypeCSSBreakpoints, Record<'mq' | 'forced', ElementProps>>,
): AdaptiveDeviceType => {
  const isDesktop = tryToCheckIsDesktop(viewWidth, viewHeight, hasPointer, platform);

  if (isDesktop === null) {
    return {
      mobile: deviceTypeClassNames.mobile.mq,
      desktop: deviceTypeClassNames.desktop.mq,
    };
  }

  if (isDesktop) {
    return {
      mobile: false,
      desktop: deviceTypeClassNames.desktop.forced,
    };
  }

  return {
    mobile: deviceTypeClassNames.mobile.forced,
    desktop: false,
  };
};
