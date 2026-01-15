'use client';

import * as React from 'react';
import { getSizeX, isCompactByViewHeight, isCompactByViewWidth } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import type { HasChildren } from '../../types';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';

const warn = warnOnce('AdaptivityProvider');

export interface AdaptivityProviderProps extends AdaptivityProps, HasChildren {}

/**
 * @see https://vkui.io/components/adaptivity-provider
 */
export const AdaptivityProvider = ({
  viewWidth,
  viewHeight,
  sizeX: sizeXProp,
  sizeY: sizeYProp,
  density: densityProp,
  hasPointer,
  hasHover,
  children,
}: AdaptivityProviderProps): React.ReactNode => {
  const adaptivity = React.useMemo(() => {
    const nextProps: AdaptivityProps = {
      viewWidth,
      viewHeight,
      sizeX: sizeXProp,
      sizeY: sizeYProp || densityProp,
      density: densityProp || sizeYProp,
      hasPointer,
      hasHover,
    };

    if (process.env.NODE_ENV === 'development') {
      if (sizeXProp !== undefined) {
        warn(
          'Свойство устарело начиная с 8.0.0 и будет удалено в **VKUI v10**. Для обратной совместимости, используйте `viewWidth={ViewWidth.MOBILE}` вместо `sizeX="compact"` и `viewWidth={ViewWidth.SMALL_TABLET}` вместо `sizeX="compact"` (см. Https://github.com/VKCOM/VKUI/issues/9015).',
        );
      }
      if (sizeYProp !== undefined) {
        warn(
          'Свойство устарело начиная с 8.0.0 и будет удалено в **VKUI v10**. Используйте `density` (см. Https://github.com/VKCOM/VKUI/issues/9015).',
        );
      }
      if (hasHover !== undefined) {
        warn(
          'Свойство устарело начиная с 7.3.0 и будет удалено в **VKUI v9**. Используйте `hasPointer` (см. https://github.com/VKCOM/VKUI/pull/8490).',
        );
      }
    }

    // TODO [>=10]: #9015 удалить этот блок
    if (sizeXProp === undefined && viewWidth !== undefined) {
      nextProps.sizeX = getSizeX(viewWidth);
    }

    // TODO [>=10]: #9015 удалить sizeY
    if (sizeYProp === undefined && densityProp === undefined) {
      if (isCompactByViewWidth(viewWidth, hasPointer) || isCompactByViewHeight(viewHeight)) {
        nextProps.sizeY = 'compact';
        nextProps.density = 'compact';
      } else if (viewWidth !== undefined || viewHeight !== undefined) {
        nextProps.sizeY = 'regular';
        nextProps.density = 'regular';
      }
    }

    return nextProps;
  }, [viewWidth, viewHeight, sizeXProp, sizeYProp, densityProp, hasPointer, hasHover]);

  return <AdaptivityContext.Provider value={adaptivity}>{children}</AdaptivityContext.Provider>;
};
