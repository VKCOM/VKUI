import * as React from 'react';
import { Icon16Chevron, Icon24Chevron } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ScrollArrow.module.css';

const stylesSize = {
  m: styles.sizeM,
  l: styles.sizeL,
};

const stylesDirection = {
  up: styles.directionUp,
  right: styles.directionRight,
  down: styles.directionDown,
  left: styles.directionLeft,
};

const labelDirection = {
  up: 'Назад',
  right: 'Вперед',
  down: 'Вперед',
  left: 'Назад',
};

const ArrowIcon = ({ size }: Pick<ScrollArrowProps, 'size'>) => {
  let Icon = Icon24Chevron;
  if (size === 'm') {
    Icon = Icon16Chevron;
  }

  return <Icon className={styles.defaultIcon} />;
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
  label?: string;
}

/**
 * Компонент стрелки. Используется в [HorizontalScroll](#/HorizontalScroll) и [Gallery](#/Gallery).
 *
 * @since 5.4.0
 * @see https://vkcom.github.io/VKUI/#/ScrollArrow
 */
export const ScrollArrow = ({
  size = 'l',
  offsetY,
  direction,
  label: labelProp,
  children = <ArrowIcon size={size} />,
  ...restProps
}: ScrollArrowProps): React.ReactNode => {
  const label = labelProp ?? labelDirection[direction];

  return (
    <RootComponent
      Component="button"
      type="button"
      baseClassName={classNames(styles.host, stylesSize[size], stylesDirection[direction])}
      {...restProps}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      <span className={styles.icon} style={offsetY ? { top: offsetY } : undefined}>
        {children}
      </span>
    </RootComponent>
  );
};
