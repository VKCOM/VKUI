import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import type { Placement } from '../../lib/floating';
import styles from './PopperArrow.module.css';

export const ARROW_PADDING = 10;
export const ARROW_WIDTH = 20;
export const ARROW_HEIGHT = 8;

type Coords = {
  x?: number;
  y?: number;
};

function getPositionsStylesByCoords(
  placement: Placement,
  coords: Coords = { x: 0, y: 0 },
): React.CSSProperties {
  if (placement.startsWith('top')) {
    return {
      top: '100%',
      left: coords.x,
    };
  } else if (placement.startsWith('right')) {
    return {
      top: coords.y,
      right: 'calc(100% - 6px)',
    };
  } else if (placement.startsWith('bottom')) {
    return {
      bottom: '100%',
      left: coords.x,
    };
  } else {
    return {
      top: coords.y,
      left: 'calc(100% - 6px)',
    };
  }
}

export interface PopperArrowProps extends HasRootRef<HTMLDivElement> {
  coords?: Coords;
  placement: Placement;
  arrowClassName?: string;
}

export const PopperArrow = ({
  coords,
  arrowClassName,
  placement,
  getRootRef,
}: PopperArrowProps) => {
  return (
    <div
      ref={getRootRef}
      style={getPositionsStylesByCoords(placement, coords)}
      className={styles['PopperArrow']}
      data-placement={placement}
    >
      <svg
        className={classNames(styles['PopperArrow__in'], arrowClassName)}
        width="20"
        height="8"
        viewBox="0 0 20 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C13 0 15.9999 8 20 8H0C3.9749 8 7 0 10 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
