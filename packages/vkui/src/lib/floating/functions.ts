import type * as React from 'react';
import type {
  AutoPlacementType,
  FloatingPositionStrategy,
  Placement,
  PlacementWithAuto,
  UseFloatingData,
} from './types/common';
import { type FloatingComponentProps } from './types/component';

export function checkIsNotAutoPlacement(placement: PlacementWithAuto): placement is Placement {
  return !placement.startsWith('auto');
}

export function getAutoPlacementAlign(placement: AutoPlacementType): 'start' | 'end' | null {
  const align = placement.replace(/auto-|auto/, '');
  return align === 'start' || align === 'end' ? align : null;
}

const defaultGetFloatingElementHiddenStyles: Exclude<
  FloatingComponentProps['getFloatingElementHiddenStyles'],
  undefined
> = (hidden: boolean) => {
  return hidden
    ? {
        visibility: 'hidden',
      }
    : {};
};

export type ConvertFloatingDataArgs = {
  strategy: FloatingPositionStrategy;
  x: UseFloatingData['x'];
  y: UseFloatingData['y'];
  initialWidth?: React.CSSProperties['width'] | null;
  middlewareData?: UseFloatingData['middlewareData'];
  getFloatingElementHiddenStyles?: FloatingComponentProps['getFloatingElementHiddenStyles'];
};

/**
 * Note: не используем `translate3d`, чтобы в лишний раз не выносить в отдельный слой и не занимать память в GPU.
 *
 * см. https://floating-ui.com/docs/react#positioning
 */
export function convertFloatingDataToReactCSSProperties({
  strategy,
  x,
  y,
  initialWidth = 'max-content',
  middlewareData,
  getFloatingElementHiddenStyles = defaultGetFloatingElementHiddenStyles,
}: ConvertFloatingDataArgs): React.CSSProperties {
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
    if (hide) {
      const hiddenStyles = getFloatingElementHiddenStyles(hide.referenceHidden || false);
      hiddenStyles && Object.assign(styles, hiddenStyles);
    }
  }
  return styles;
}

export const getArrowCoordsByMiddlewareData = (
  middlewareData: UseFloatingData['middlewareData'],
): {
  x: number;
  y: number;
} => {
  const coords = { x: 0, y: 0 };
  if (middlewareData.arrow) {
    const { x = 0, y = 0 } = middlewareData.arrow;
    coords.x = x;
    coords.y = y;
  }
  return coords;
};
