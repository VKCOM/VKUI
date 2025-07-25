'use client';

import * as React from 'react';
import { getSizeX, isCompactByViewHeight, isCompactByViewWidth } from '../../lib/adaptivity';
import type { HasChildren } from '../../types';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';

export interface AdaptivityProviderProps extends AdaptivityProps, HasChildren {}

/**
 * @see https://vkui.io/components/adaptivity-provider
 */
export const AdaptivityProvider = ({
  viewWidth,
  viewHeight,
  sizeX: sizeXProp,
  sizeY: sizeYProp,
  hasPointer,
  hasHover,
  children,
}: AdaptivityProviderProps): React.ReactNode => {
  const adaptivity = React.useMemo(() => {
    const nextProps: AdaptivityProps = {
      viewWidth,
      viewHeight,
      sizeX: sizeXProp,
      sizeY: sizeYProp,
      hasPointer,
      hasHover,
    };
    if (sizeXProp === undefined && viewWidth !== undefined) {
      nextProps.sizeX = getSizeX(viewWidth);
    }

    if (sizeYProp === undefined) {
      if (isCompactByViewWidth(viewWidth, hasPointer) || isCompactByViewHeight(viewHeight)) {
        nextProps.sizeY = 'compact';
      } else if (viewWidth !== undefined || viewHeight !== undefined) {
        nextProps.sizeY = 'regular';
      }
    }

    return nextProps;
  }, [viewWidth, viewHeight, sizeXProp, sizeYProp, hasPointer, hasHover]);

  return <AdaptivityContext.Provider value={adaptivity}>{children}</AdaptivityContext.Provider>;
};
