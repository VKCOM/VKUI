import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { Placement } from '../../lib/floating';
import type { HasRootRef } from '../../types';
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

const DEFAULT_ARROW_WIDTH = 20;
const DEFAULT_ARROW_HEIGHT = 8;

/**
 * Примечание 1.
 *
 * В компоненте, SVG элемент `<path />` представляет собой стрелку с платформой в виде прямоугольника в 1px. Платформа
 * служит для исправления проблемы с белой полоской между контентом и стрелкой, которая зачастую проявляется при
 * изменении масштаба страницы.
 *
 * Чтобы исправление сработало нужно:
 * 1. Прибавить высоту платформы к `height` и `viewBox` SVG контейнера.
 * 2. Сместить положение SVG контейнера на высоту платформы – сделано в CSS через `translateY(1px)`.
 *
 * https://github.com/VKCOM/VKUI/issues/2123
 */
const PLATFORM_HEIGHT = 1;
const ARROW_HEIGHT_WITH_WHITE_SPACE = DEFAULT_ARROW_HEIGHT + PLATFORM_HEIGHT;

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
        width={DEFAULT_ARROW_WIDTH}
        height={ARROW_HEIGHT_WITH_WHITE_SPACE}
        viewBox={`0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z" fill="currentColor" />
      </svg>
    </div>
  );
};
