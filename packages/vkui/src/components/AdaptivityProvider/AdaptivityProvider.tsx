import * as React from 'react';
import { hasMouse as _hasPointer } from '@vkontakte/vkjs';
import { BridgeAdaptivity, useBridgeAdaptivity } from '../../hooks/useBridgeAdaptivity';
import { BREAKPOINTS, SizeType, ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import { HasChildren } from '../../types';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';

const warn = warnOnce('AdaptivityProvider');

export interface AdaptivityProviderProps extends AdaptivityProps, HasChildren {}

/**
 * @see https://vkcom.github.io/VKUI/#/AdaptivityProvider
 */
export const AdaptivityProvider = ({
  viewWidth,
  viewHeight,
  sizeX,
  sizeY,
  hasPointer,
  hasHover,
  children,
}: AdaptivityProviderProps) => {
  // TODO [>=6]: удалить использование хука (#5049)
  /* eslint-disable @typescript-eslint/naming-convention */
  const LEGACY_isPerhapsPropsByBridgeTypeAdaptive =
    viewWidth !== undefined &&
    viewHeight !== undefined &&
    sizeX !== undefined &&
    sizeY !== undefined;
  const LEGACY_isPerhapsPropsByBridgeTypeForceMobile =
    viewWidth !== undefined && sizeX !== undefined && sizeY !== undefined;
  const LEGACY_disableInternalUseBridgeAdaptivity =
    LEGACY_isPerhapsPropsByBridgeTypeAdaptive || LEGACY_isPerhapsPropsByBridgeTypeForceMobile;
  const LEGACY_bridge = useBridgeAdaptivity(LEGACY_disableInternalUseBridgeAdaptivity);
  /* eslint-enable @typescript-eslint/naming-convention */

  if (process.env.NODE_ENVIRONMENT === 'development') {
    // TODO [>=6]: удалить warn
    if (!LEGACY_disableInternalUseBridgeAdaptivity) {
      warn("[@vkontakte/vk-bridge's deprecated] Если вы используете VK Bridge, то используйте хук `useAdaptivity()` из @vkontakte/vk-bridge-react и результат передайте в компонент (см. https://github.com/VKCOM/VKUI/issues/5049)"); // prettier-ignore
    }
  }

  const adaptivity = React.useMemo(
    () =>
      calculateAdaptivity(
        {
          viewWidth,
          viewHeight,
          sizeX,
          sizeY,
          hasPointer,
          hasHover,
        },
        LEGACY_bridge,
      ),
    [viewWidth, viewHeight, sizeX, sizeY, hasPointer, hasHover, LEGACY_bridge],
  );

  return <AdaptivityContext.Provider value={adaptivity}>{children}</AdaptivityContext.Provider>;
};

function calculateAdaptivity(
  { viewWidth, viewHeight, sizeX, sizeY, hasPointer, hasHover }: AdaptivityProps,
  LEGACY_bridge: BridgeAdaptivity, // eslint-disable-line @typescript-eslint/naming-convention
) {
  // TODO [>=6]: удалить блок кода c использованием LEGACY_bridge (#5049)
  //  https://github.com/VKCOM/VKUI/blob/v5.5.5/packages/vkui/src/components/AdaptivityProvider/AdaptivityProvider.tsx#L46-L92
  if (LEGACY_bridge.type === 'adaptive') {
    const { viewportWidth, viewportHeight } = LEGACY_bridge;

    if (viewportWidth >= BREAKPOINTS.DESKTOP) {
      viewWidth = ViewWidth.DESKTOP;
    } else if (viewportWidth >= BREAKPOINTS.TABLET) {
      viewWidth = ViewWidth.TABLET;
    } else if (viewportWidth >= BREAKPOINTS.SMALL_TABLET) {
      viewWidth = ViewWidth.SMALL_TABLET;
    } else if (viewportWidth >= BREAKPOINTS.MOBILE) {
      viewWidth = ViewWidth.MOBILE;
    } else {
      viewWidth = ViewWidth.SMALL_MOBILE;
    }

    if (viewportHeight >= BREAKPOINTS.MEDIUM_HEIGHT) {
      viewHeight = ViewHeight.MEDIUM;
    } else if (viewportHeight >= BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT) {
      viewHeight = ViewHeight.SMALL;
    } else {
      viewHeight = ViewHeight.EXTRA_SMALL;
    }

    if (viewWidth <= ViewWidth.MOBILE) {
      sizeX = SizeType.COMPACT;
    } else {
      sizeX = SizeType.REGULAR;
    }

    if (
      (viewWidth >= ViewWidth.SMALL_TABLET && _hasPointer) ||
      viewHeight <= ViewHeight.EXTRA_SMALL
    ) {
      sizeY = SizeType.COMPACT;
    } else {
      sizeY = SizeType.REGULAR;
    }
  } else if (
    LEGACY_bridge.type === 'force_mobile' ||
    LEGACY_bridge.type === 'force_mobile_compact'
  ) {
    viewWidth = ViewWidth.MOBILE;
    sizeX = SizeType.COMPACT;

    if (LEGACY_bridge.type === 'force_mobile_compact') {
      sizeY = SizeType.COMPACT;
    } else {
      sizeY = SizeType.REGULAR;
    }
  } else {
    if (sizeX === undefined && viewWidth !== undefined) {
      if (viewWidth <= ViewWidth.MOBILE) {
        sizeX = SizeType.COMPACT;
      } else {
        sizeX = SizeType.REGULAR;
      }
    }
    if (sizeY === undefined && viewWidth !== undefined && viewHeight !== undefined) {
      if (
        (viewWidth >= ViewWidth.SMALL_TABLET && _hasPointer) ||
        viewHeight <= ViewHeight.EXTRA_SMALL
      ) {
        sizeY = SizeType.COMPACT;
      } else {
        sizeY = SizeType.REGULAR;
      }
    }
  }

  return {
    viewWidth,
    viewHeight,
    sizeX,
    sizeY,
    hasPointer,
    hasHover,
  };
}
