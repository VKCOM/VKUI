import {
  type SizeTypeValues,
  tryToCheckIsDesktop,
  type ViewHeightType,
  ViewWidth,
  type ViewWidthType,
} from '../../lib/adaptivity';
import type { PlatformType } from '../../lib/platform';
import { forcedProps } from './constants';
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
  compactMediaQueryProps: ElementProps,
  regularMediaQueryProps: ElementProps,
): AdaptiveSizeType => {
  return {
    compact: type === undefined ? compactMediaQueryProps : type === 'compact' ? forcedProps : false,
    regular: type === undefined ? regularMediaQueryProps : type === 'regular' ? forcedProps : false,
  };
};

export const getAdaptiveViewWidth = (
  viewWidth: undefined | ViewWidthType,
  viewWidthMapProps: Record<ViewWidthCSSBreakpoints, ElementProps>,
): AdaptiveViewWidth => {
  return {
    tabletMinus:
      viewWidth === undefined
        ? viewWidthMapProps.tabletMinus
        : viewWidth < ViewWidth.TABLET
          ? forcedProps
          : false,
    tabletPlus:
      viewWidth === undefined
        ? viewWidthMapProps.tabletPlus
        : viewWidth >= ViewWidth.TABLET
          ? forcedProps
          : false,
  };
};

export const getAdaptiveDeviceType = (
  viewWidth: undefined | ViewWidthType,
  viewHeight: undefined | ViewHeightType,
  hasPointer: undefined | boolean,
  platform: PlatformType,
  deviceTypeMapProps: Record<DeviceTypeCSSBreakpoints, ElementProps>,
): AdaptiveDeviceType => {
  const isDesktop = tryToCheckIsDesktop(viewWidth, viewHeight, hasPointer, platform);

  if (isDesktop === null) {
    return {
      mobile: deviceTypeMapProps.mobile,
      desktop: deviceTypeMapProps.desktop,
    };
  }

  if (isDesktop) {
    return {
      mobile: false,
      desktop: forcedProps,
    };
  }

  return {
    mobile: forcedProps,
    desktop: false,
  };
};
