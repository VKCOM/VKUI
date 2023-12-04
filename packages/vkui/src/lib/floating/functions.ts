import * as React from 'react';
import type {
  AutoPlacementType,
  FloatingPositionStrategy,
  Placement,
  PlacementWithAuto,
  UseFloatingData,
} from './types/common';

export function checkIsNotAutoPlacement(placement: PlacementWithAuto): placement is Placement {
  return !placement.startsWith('auto');
}

export function getAutoPlacementAlign(placement: AutoPlacementType): 'start' | 'end' | null {
  const align = placement.replace(/auto-|auto/, '');
  return align === 'start' || align === 'end' ? align : null;
}

/**
 * Note: не используем `translate3d`, чтобы в лишний раз не выносить в отдельный слой и не занимать память в GPU.
 *
 * см. https://floating-ui.com/docs/react#positioning
 */
export function convertFloatingDataToReactCSSProperties(
  strategy: FloatingPositionStrategy,
  x: UseFloatingData['x'],
  y: UseFloatingData['y'],
  initialWidth: React.CSSProperties['width'] | null = 'max-content',
  middlewareData?: UseFloatingData['middlewareData'],
): React.CSSProperties {
  const styles: React.CSSProperties = {
    position: strategy,
    top: y,
    right: 'auto',
    bottom: 'auto',
    left: x,
  };
  if (initialWidth !== null) {
    styles.width = initialWidth;
  }
  if (middlewareData) {
    const hide = middlewareData.hide;
    if (hide && hide.referenceHidden) {
      styles['visibility'] = 'hidden';
    }
  }
  return styles;
}

export const getArrowCoordsByMiddlewareData = (
  middlewareData: UseFloatingData['middlewareData'],
) => {
  const coords = { x: 0, y: 0 };
  if (middlewareData.arrow) {
    const { x = 0, y = 0 } = middlewareData.arrow;
    coords.x = x;
    coords.y = y;
  }
  return coords;
};
