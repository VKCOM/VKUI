import {
  SizeTypeValues,
  tryToCheckIsDesktop,
  ViewHeightType,
  ViewWidth,
  ViewWidthType,
} from '../../lib/adaptivity';
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
  type: undefined | SizeTypeValues,
  compactClassNames: Record<'mq' | 'compact', ElementProps>,
  regularClassNames: Record<'mq' | 'regular', ElementProps>,
): AdaptiveSizeType => {
  return {
    compact:
      type === undefined
        ? compactClassNames.mq
        : type === 'compact'
        ? compactClassNames[type]
        : false,
    regular:
      type === undefined
        ? regularClassNames.mq
        : type === 'regular'
        ? regularClassNames[type]
        : false,
  };
};

export const getAdaptiveViewWidth = (
  viewWidth: undefined | ViewWidthType,
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
  viewWidth: undefined | ViewWidthType,
  viewHeight: undefined | ViewHeightType,
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
