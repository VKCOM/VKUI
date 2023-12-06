import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { Placement } from '../../lib/floating';
import type { HasDataAttribute, HTMLAttributesWithRootRef } from '../../types';
import { DefaultIcon } from './DefaultIcon';
import styles from './FloatingArrow.module.css';

export type Coords = {
  x?: number;
  y?: number;
};

const placementClassNames = {
  right: styles['FloatingArrow--placement-right'],
  bottom: styles['FloatingArrow--placement-bottom'],
  left: styles['FloatingArrow--placement-left'],
};

export interface FloatingArrowProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasDataAttribute {
  /**
   * Сдвиг стрелки относительно текущих координат.
   */
  offset?: number;
  /**
   * Включает абсолютное смещение по `offset`.
   */
  isStaticOffset?: boolean;
  coords?: Coords;
  placement?: Placement;
  iconStyle?: React.CSSProperties;
  iconClassName?: string;
  Icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
}

/**
 * @private
 */
export const FloatingArrow = ({
  offset,
  isStaticOffset,
  coords,
  iconStyle,
  iconClassName,
  placement = 'bottom',
  getRootRef,
  Icon = DefaultIcon,
  ...restProps
}: FloatingArrowProps) => {
  const [arrowPlacement, arrowStyles] = getArrowPositionData(
    placement,
    coords,
    offset,
    isStaticOffset,
  );

  return (
    <div
      ref={getRootRef}
      style={arrowStyles}
      className={classNames(
        styles['FloatingArrow'],
        arrowPlacement && placementClassNames[arrowPlacement],
      )}
      {...restProps}
    >
      <Icon className={classNames(styles['FloatingArrow__in'], iconClassName)} style={iconStyle} />
    </div>
  );
};

function getArrowPositionData(
  placement: Placement,
  coords: Coords = { x: 0, y: 0 },
  offset = 0,
  isStaticOffset = false,
): [undefined | 'right' | 'bottom' | 'left', React.CSSProperties] {
  const withOffset = (isVerticalPlacement: boolean) => {
    const parsedCoords = { x: coords.x || 0, y: coords.y || 0 };

    if (isVerticalPlacement) {
      return isStaticOffset ? offset : parsedCoords.y + offset;
    } else {
      return isStaticOffset ? offset : parsedCoords.x + offset;
    }
  };

  if (placement.startsWith('top')) {
    return [
      'bottom',
      {
        top: '100%',
        left: withOffset(false),
      },
    ];
  } else if (placement.startsWith('right')) {
    return [
      'left',
      {
        top: withOffset(true),
        left: 0,
      },
    ];
  } else if (placement.startsWith('bottom')) {
    return [
      undefined,
      {
        bottom: '100%',
        left: withOffset(false),
      },
    ];
  } else {
    return [
      'right',
      {
        top: withOffset(true),
        right: 0,
      },
    ];
  }
}
