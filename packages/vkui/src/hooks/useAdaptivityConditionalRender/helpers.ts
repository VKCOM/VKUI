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
  AdaptiveDensityType,
  AdaptiveDeviceType,
  AdaptiveViewWidth,
  DeviceTypeCSSBreakpoints,
  ElementProps,
  ViewWidthCSSBreakpoints,
} from './types';

export const getAdaptiveDensityType = (
  type: undefined | SizeTypeValues,
  compactMediaQueryProps: ElementProps,
  regularMediaQueryProps: ElementProps,
): AdaptiveDensityType => {
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
    smallTabletMinus:
      viewWidth === undefined
        ? viewWidthMapProps.smallTabletMinus
        : viewWidth < ViewWidth.SMALL_TABLET
          ? forcedProps
          : false,
    smallTabletPlus:
      viewWidth === undefined
        ? viewWidthMapProps.smallTabletPlus
        : viewWidth >= ViewWidth.SMALL_TABLET
          ? forcedProps
          : false,
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
