'use client';

import * as React from 'react';
import { Icon16Chevron, Icon24Chevron } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ScrollArrow.module.css';

const stylesSize = {
  s: styles.sizeS,
  m: styles.sizeM,
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
  if (size === 's') {
    Icon = Icon16Chevron;
  }

  return <Icon className={styles.defaultIcon} />;
};

export interface ScrollArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HasRootRef<HTMLButtonElement> {
  /**
   * Направление стрелки.
   */
  direction: 'up' | 'right' | 'down' | 'left';
  /**
   * Размер стрелки.
   */
  size?: 's' | 'm';
  /**
   * Смещает иконку кнопки навигации по вертикали.
   */
  offsetY?: number | string;
  /**
   * Смещает иконку кнопки навигации по горизонтали.
   * Для `direction="left"` применяется к `left` (в LTR) или `right` (в RTL).
   * Для `direction="right"` применяется к `right` (в LTR) или `left` (в RTL).
   */
  offsetX?: number | string;
  /**
   * [a11y]: Используется для ассистивных технологий.
   */
  label?: string;
}

/**
 * Компонент стрелки. Используется в [HorizontalScroll](#/HorizontalScroll) и [Gallery](#/Gallery).
 *
 * @since 5.4.0
 * @see https://vkui.io/components/scroll-arrow
 */
export const ScrollArrow = ({
  size = 'm',
  offsetY,
  offsetX,
  direction,
  label: labelProp,
  children = <ArrowIcon size={size} />,
  ...restProps
}: ScrollArrowProps): React.ReactNode => {
  const textDirection = useConfigDirection();
  const label = labelProp ?? labelDirection[direction];

  const iconStyle: React.CSSProperties = {};
  if (offsetY) {
    iconStyle.top = offsetY;
  }
  if (offsetX) {
    const isRtl = textDirection === 'rtl';
    if (direction === 'left') {
      iconStyle[isRtl ? 'right' : 'left'] = offsetX;
    } else if (direction === 'right') {
      iconStyle[isRtl ? 'left' : 'right'] = offsetX;
    }
  }

  return (
    <RootComponent
      Component="button"
      type="button"
      baseClassName={classNames(
        styles.host,
        stylesSize[size],
        stylesDirection[direction],
        textDirection === 'rtl' && styles.rtl,
      )}
      {...restProps}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      <span
        className={styles.icon}
        style={Object.keys(iconStyle).length > 0 ? iconStyle : undefined}
      >
        {children}
      </span>
    </RootComponent>
  );
};
