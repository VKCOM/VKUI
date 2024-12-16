'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutWrapper.module.css';

const stylesAlignX = {
  center: styles.alignXCenter,
  left: styles.alignXLeft,
  right: styles.alignXRight,
};

const stylesAlignY = {
  center: styles.alignYCenter,
  top: styles.alignYTop,
  bottom: styles.alignYBottom,
};

export interface PopoutWrapperProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позволяет сделать прозрачную подложку
   */
  noBackground?: boolean;
  /**
   * Включает фиксированное позиционирование.
   *
   * По умолчанию у компонента не задан никакой `position`.
   */
  fixed?: boolean;
  /**
   * Выравнивает контент по горизонтали.
   */
  alignX?: 'left' | 'center' | 'right';
  /**
   * Выравнивает контент по вертикали.
   */
  alignY?: 'top' | 'center' | 'bottom';
  /**
   * Спрячет компонент через fade-out анимацию.
   */
  closing?: boolean;
  /**
   * Позволяет задать z-index через токен или числом
   */
  zIndex?: number | string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PopoutWrapper
 */
export const PopoutWrapper = ({
  alignY = 'center',
  alignX = 'center',
  closing = false,
  noBackground = false,
  fixed = true,
  children,
  onClick,
  zIndex = 'var(--vkui--z_index_popout)',
  ...restProps
}: PopoutWrapperProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        stylesAlignY[alignY],
        stylesAlignX[alignX],
        closing ? styles.closing : styles.opened,
        fixed && styles.fixed,
        !noBackground && styles.masked,
      )}
      baseStyle={{ zIndex }}
    >
      <div className={styles.container}>
        <div className={styles.overlay} onClick={onClick} />
        <div className={styles.content}>{children}</div>
      </div>
    </RootComponent>
  );
};
