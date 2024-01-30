import * as React from 'react';
import { hasMouse as _hasPointer } from '@vkontakte/vkjs';
import { getSizeX, isCompactByViewHeight, isCompactByViewWidth } from '../../lib/adaptivity';
import { HasChildren } from '../../types';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';

export interface AdaptivityProviderProps extends AdaptivityProps, HasChildren {}

/**
 * @see https://vkcom.github.io/VKUI/#/AdaptivityProvider
 */
export const AdaptivityProvider = ({
  viewWidth,
  viewHeight,
  sizeX: sizeXProp,
  sizeY: sizeYProp,
  hasPointer: hasPointerProp,
  hasHover,
  children,
}: AdaptivityProviderProps) => {
  const hasPointer = hasPointerProp ?? _hasPointer;

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

    if (sizeYProp === undefined && (viewWidth !== undefined || viewHeight !== undefined)) {
      if (
        (viewWidth !== undefined && isCompactByViewWidth(viewWidth, hasPointer)) ||
        (viewHeight !== undefined && isCompactByViewHeight(viewHeight))
      ) {
        nextProps.sizeY = 'compact';
      } else {
        nextProps.sizeY = 'regular';
      }
    }

    return nextProps;
  }, [viewWidth, viewHeight, sizeXProp, sizeYProp, hasPointer, hasHover]);

  return <AdaptivityContext.Provider value={adaptivity}>{children}</AdaptivityContext.Provider>;
};
