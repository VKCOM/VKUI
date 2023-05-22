import * as React from 'react';
import {
  Icon16Chevron,
  Icon16ChevronLeft,
  Icon24Chevron,
  Icon24ChevronCompactLeft,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import styles from './ScrollArrow.module.css';

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
  className,
  getRootRef,
  children = <ArrowIcon direction={direction} size={size} />,
  ...restProps
}: ScrollArrowProps) => {
  return (
    <button
      className={classNames(
        styles['ScrollArrow'],
        {
          m: styles['ScrollArrow--size-m'],
          l: styles['ScrollArrow--size-l'],
        }[size],
        {
          left: styles['ScrollArrow--direction-left'],
          right: styles['ScrollArrow--direction-right'],
        }[direction],
        className,
      )}
      ref={getRootRef}
      {...restProps}
    >
      <span className={styles['ScrollArrow__icon']} style={offsetY ? { top: offsetY } : undefined}>
        {children}
      </span>
    </button>
  );
};
