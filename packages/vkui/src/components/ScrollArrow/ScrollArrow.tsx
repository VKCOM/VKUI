import * as React from 'react';
import {
  Icon16Chevron,
  Icon16ChevronLeft,
  Icon24Chevron,
  Icon24ChevronCompactLeft,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './ScrollArrow.module.css';

const stylesSize = {
  m: styles['ScrollArrow--size-m'],
  l: styles['ScrollArrow--size-l'],
};

const stylesDirection = {
  left: styles['ScrollArrow--direction-left'],
  right: styles['ScrollArrow--direction-right'],
};

const ArrowIcon = ({ size, direction }: Pick<ScrollArrowProps, 'size' | 'direction'>) => {
  if (size === 'm') {
    return direction === 'left' ? <Icon16ChevronLeft /> : <Icon16Chevron />;
  }

  return direction === 'left' ? <Icon24ChevronCompactLeft /> : <Icon24Chevron />;
};

export interface ScrollArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HasRootRef<HTMLButtonElement> {
  /**
   * Направление стрелки
   */
  direction: 'left' | 'right';
  /**
   * Размер стрелки
   */
  size?: 'm' | 'l';
  /**
   * Смещает иконку кнопки навигации по вертикали.
   */
  offsetY?: number | string;
}

/**
 * Компонент стрелки из HorizontalScroll
 *
 * @since 5.4.0
 * @see https://vkcom.github.io/VKUI/#/ScrollArrow
 */
export const ScrollArrow = ({
  size = 'l',
  offsetY,
  direction,
  children = <ArrowIcon direction={direction} size={size} />,
  ...restProps
}: ScrollArrowProps) => {
  return (
    <RootComponent
      Component="button"
      type="button"
      baseClassName={classNames(
        styles['ScrollArrow'],
        stylesSize[size],
        stylesDirection[direction],
      )}
      {...restProps}
    >
      <span className={styles['ScrollArrow__icon']} style={offsetY ? { top: offsetY } : undefined}>
        {children}
      </span>
    </RootComponent>
  );
};
