import * as React from 'react';
import {
  Icon24Chevron,
  Icon24ChevronCompactLeft,
  Icon16Chevron,
  Icon16ChevronLeft,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { Tappable } from '../Tappable/Tappable';
import styles from './HorizontalScrollArrow.module.css';

export interface HorizontalScrollArrowProps {
  direction: 'left' | 'right';
  size?: 'm' | 'l';
  onClick(event: React.MouseEvent): void;
  className?: string;
}

export const HorizontalScrollArrow = ({
  size = 'l',
  direction,
  onClick,
  className,
  ...restProps
}: HorizontalScrollArrowProps) => {
  let ArrowIcon: React.ComponentType<unknown>;

  if (size === 'm') {
    ArrowIcon = direction === 'left' ? Icon16ChevronLeft : Icon16Chevron;
  } else {
    ArrowIcon = direction === 'left' ? Icon24ChevronCompactLeft : Icon24Chevron;
  }

  return (
    <Tappable
      {...restProps}
      Component="button"
      hasHover={false}
      hasActive={false}
      className={classNames(
        styles['HorizontalScrollArrow'],
        styles[`HorizontalScrollArrow--size-${size}`],
        styles[`HorizontalScrollArrow--direction-${direction}`],
        className,
      )}
      onClick={onClick}
    >
      <span className={styles['HorizontalScrollArrow__icon']}>
        <ArrowIcon />
      </span>
    </Tappable>
  );
};
