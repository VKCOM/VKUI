import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { Placement } from '../../lib/floating';
import type { HasRootRef } from '../../types';
import { DefaultIcon } from './DefaultIcon';
import styles from './PopperArrow.module.css';

type Coords = {
  x?: number;
  y?: number;
};

const placementClassNames = {
  right: styles['PopperArrow--placement-right'],
  bottom: styles['PopperArrow--placement-bottom'],
  left: styles['PopperArrow--placement-left'],
};

export interface PopperArrowProps extends HasRootRef<HTMLDivElement> {
  coords?: Coords;
  placement: Placement;
  arrowClassName?: string;
  Icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
}

export const PopperArrow = ({
  coords,
  arrowClassName,
  placement,
  getRootRef,
  Icon = DefaultIcon,
}: PopperArrowProps) => {
  const [arrowPlacement, arrowStyles] = getArrowPositionData(placement, coords);

  return (
    <div
      ref={getRootRef}
      style={arrowStyles}
      className={classNames(
        styles['PopperArrow'],
        arrowPlacement && placementClassNames[arrowPlacement],
      )}
    >
      <Icon className={classNames(styles['PopperArrow__in'], arrowClassName)} />
    </div>
  );
};

function getArrowPositionData(
  placement: Placement,
  coords: Coords = { x: 0, y: 0 },
): [undefined | 'right' | 'bottom' | 'left', React.CSSProperties] {
  if (placement.startsWith('top')) {
    return [
      'bottom',
      {
        top: '100%',
        left: coords.x,
      },
    ];
  } else if (placement.startsWith('right')) {
    return [
      'left',
      {
        top: coords.y,
        left: 0,
      },
    ];
  } else if (placement.startsWith('bottom')) {
    return [
      undefined,
      {
        bottom: '100%',
        left: coords.x,
      },
    ];
  } else {
    return [
      'right',
      {
        top: coords.y,
        right: 0,
      },
    ];
  }
}
