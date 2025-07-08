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

const stylesStrategy = {
  fixed: styles.fixed,
  absolute: styles.absolute,
  none: undefined,
};

export interface PopoutWrapperProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позволяет сделать прозрачную подложку.
   */
  noBackground?: boolean;
  /**
   * @deprecated Будет удалён в **VKUI v8**
   * Используйте `strategy` вместо этого свойства.
   *
   * Включает фиксированное позиционирование.
   *
   * При значении `false` у компонента не задан никакой `position`.
   */
  fixed?: boolean;
  /**
   * Стратегия позиционирования:
   *
   * - `fixed`: у контейнера выставлен `position: fixed`
   * - `absolute`: у контейнера выставлен `position: absolute`
   * - `none`: у контейнера не выставлен `position`.
   *
   * @default 'fixed'
   */
  strategy?: 'fixed' | 'absolute' | 'none';
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
   * Позволяет задать z-index через токен или числом.
   */
  zIndex?: number | string;
}

/**
 * @see https://vkui.io/components/popout-wrapper
 */
export const PopoutWrapper = ({
  alignY = 'center',
  alignX = 'center',
  closing = false,
  noBackground = false,
  strategy: strategyProp,
  // TODO [>=8]: удалить свойство
  fixed = true,
  children,
  onClick,
  zIndex = 'var(--vkui--z_index_popout)',
  ...restProps
}: PopoutWrapperProps): React.ReactNode => {
  const strategy = strategyProp || (fixed ? 'fixed' : 'none');

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        stylesAlignY[alignY],
        stylesAlignX[alignX],
        closing ? styles.closing : styles.opened,
        strategy && stylesStrategy[strategy],
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
