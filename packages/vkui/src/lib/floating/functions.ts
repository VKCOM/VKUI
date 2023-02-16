import * as React from 'react';
import type {
  AutoPlacementType,
  FloatingPositionStrategy,
  Placement,
  PlacementWithAuto,
  UseFloatingData,
} from './types';

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
): React.CSSProperties {
  const styles: React.CSSProperties = {
    position: strategy,
    top: y || 0,
    right: 'auto',
    bottom: 'auto',
    left: x || 0,
  };
  if (initialWidth !== null) {
    styles.width = initialWidth;
  }
  return styles;
}
