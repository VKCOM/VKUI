import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { Placement } from '../../lib/floating';
import type { HasDataAttribute, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { DefaultIcon } from './DefaultIcon';
import styles from './FloatingArrow.module.css';

export type Coords = {
  /** Координата x. */
  x?: number;
  /** Координата y. */
  y?: number;
};

export const placementClassNames = {
  right: styles.placementRight,
  bottom: styles.placementBottom,
  left: styles.placementLeft,
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
  /**
   * Координаты стрелки.
   */
  coords?: Coords;
  /**
   * Расположение всплывающего элемента.
   */
  placement?: Placement;
  /**
   * Стили иконки.
   */
  iconStyle?: React.CSSProperties;
  /**
   * `className` для иконки.
   */
  iconClassName?: string;
  /**
   * Иконка для отображения стрелки.
   */
  Icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
}

/**
 * Иконка-стрелка для всплывающих окон.
 *
 * @since 7.0.0
 */
export const FloatingArrow = ({
  offset,
  isStaticOffset,
  coords,
  iconStyle,
  iconClassName,
  placement = 'bottom',
  Icon = DefaultIcon,
  ...restProps
}: FloatingArrowProps): React.ReactNode => {
  const [arrowPlacement, arrowStyles] = getArrowPositionData(
    placement,
    coords,
    offset,
    isStaticOffset,
  );

  return (
    <RootComponent
      baseStyle={arrowStyles}
      baseClassName={classNames(styles.host, arrowPlacement && placementClassNames[arrowPlacement])}
      {...restProps}
    >
      <Icon className={classNames(styles.in, iconClassName)} style={iconStyle} />
    </RootComponent>
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
    const xOffsetProp = getXOffsetProp(placement, isStaticOffset);
    return [
      'bottom',
      {
        top: '100%',
        [xOffsetProp]: withOffset(false),
      },
    ];
  } else if (placement.startsWith('right')) {
    const yOffsetProp = getYOffsetProp(placement, isStaticOffset);
    return [
      'left',
      {
        [yOffsetProp]: withOffset(true),
        left: 0,
      },
    ];
  } else if (placement.startsWith('bottom')) {
    const xOffsetProp = getXOffsetProp(placement, isStaticOffset);
    return [
      undefined,
      {
        bottom: '100%',
        [xOffsetProp]: withOffset(false),
      },
    ];
  } else {
    const yOffsetProp = getYOffsetProp(placement, isStaticOffset);
    return [
      'right',
      {
        [yOffsetProp]: withOffset(true),
        right: 0,
      },
    ];
  }
}

function getXOffsetProp(placement: Placement, isStaticOffset: boolean) {
  return placement.endsWith('end') && isStaticOffset ? 'right' : 'left';
}

function getYOffsetProp(placement: Placement, isStaticOffset: boolean) {
  return placement.endsWith('end') && isStaticOffset ? 'bottom' : 'top';
}
