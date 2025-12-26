import * as React from 'react';
import { AdaptivityContext } from '../../components/AdaptivityProvider/AdaptivityContext';
import type { SizeTypeValues } from '../../lib/adaptivity';
import { usePlatform } from '../usePlatform';
import {
  densityCompactMediaQueryProps,
  densityRegularMediaQueryProps,
  deviceTypeMediaQueryMapProps,
  sizeXCompactMediaQueryProps,
  sizeXRegularMediaQueryProps,
  viewWidthMediaQueryMapProps,
} from './constants';
import { getAdaptiveDensityType, getAdaptiveDeviceType, getAdaptiveViewWidth } from './helpers';
import type {
  AdaptiveDensityType,
  AdaptiveViewWidth,
  UseAdaptivityConditionalRender,
} from './types';

/**
 * @private
 *
 * @param legacySizeX Значение из хука `useAdaptivityConditionalRender`
 * @param viewWidth Значение из хука `useAdaptivityConditionalRender`
 * @param legacySizeXContext Значение из хука `useAdaptivity`
 *
 * TODO [>=10]: #9015 удалить функцию и перенести `viewWidth.smallTabletMinus` в рендер React-элемента.
 */
export const getAdaptivityConditionalRenderForSizeXCompact = (
  viewWidth: AdaptiveViewWidth,
  legacySizeX: AdaptiveDensityType,
  legacySizeXContext: SizeTypeValues | undefined,
) => (legacySizeXContext === undefined ? viewWidth.smallTabletMinus : legacySizeX.compact);

export const useAdaptivityConditionalRender = (): UseAdaptivityConditionalRender => {
  const {
    sizeX: sizeXContext,
    density: densityContext,
    viewWidth: viewWidthContext,
    viewHeight: viewHeightContext,
    hasPointer: hasPointerContext,
  } = React.useContext(AdaptivityContext);
  const platform = usePlatform();

  return React.useMemo(() => {
    const sizeX = getAdaptiveDensityType(
      sizeXContext,
      sizeXCompactMediaQueryProps,
      sizeXRegularMediaQueryProps,
    );
    const density = getAdaptiveDensityType(
      densityContext,
      densityCompactMediaQueryProps,
      densityRegularMediaQueryProps,
    );
    const viewWidth = getAdaptiveViewWidth(viewWidthContext, viewWidthMediaQueryMapProps);
    const deviceType = getAdaptiveDeviceType(
      viewWidthContext,
      viewHeightContext,
      hasPointerContext,
      platform,
      deviceTypeMediaQueryMapProps,
    );
    return {
      sizeX,
      sizeY: density,
      density,
      viewWidth,
      deviceType,
    };
  }, [
    sizeXContext,
    densityContext,
    viewWidthContext,
    viewHeightContext,
    hasPointerContext,
    platform,
  ]);
};
