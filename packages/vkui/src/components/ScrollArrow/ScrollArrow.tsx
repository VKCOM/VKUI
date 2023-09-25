import * as React from 'react';
import { Icon16Chevron, Icon24Chevron } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './ScrollArrow.module.css';

const stylesSize = {
  m: styles['ScrollArrow--size-m'],
  l: styles['ScrollArrow--size-l'],
};

const stylesDirection = {
  up: styles['ScrollArrow--direction-up'],
  right: styles['ScrollArrow--direction-right'],
  down: styles['ScrollArrow--direction-down'],
  left: styles['ScrollArrow--direction-left'],
};

const ArrowIcon = ({ size }: Pick<ScrollArrowProps, 'size'>) => {
  let Icon = Icon24Chevron;
  if (size === 'm') {
    Icon = Icon16Chevron;
  }

  return <Icon className={styles['ScrollArrow__defaultIcon']} />;
};

export interface ScrollArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HasRootRef<HTMLButtonElement> {
  /**
   * Направление стрелки
   */
  direction: 'up' | 'right' | 'down' | 'left';
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
  children = <ArrowIcon size={size} />,
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
