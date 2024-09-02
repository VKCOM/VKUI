import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutWrapper.module.css';

const stylesAlignX = {
  center: styles['PopoutWrapper--alignX-center'],
  left: styles['PopoutWrapper--alignX-left'],
  right: styles['PopoutWrapper--alignX-right'],
};

const stylesAlignY = {
  center: styles['PopoutWrapper--alignY-center'],
  top: styles['PopoutWrapper--alignY-top'],
  bottom: styles['PopoutWrapper--alignY-bottom'],
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
  ...restProps
}: PopoutWrapperProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['PopoutWrapper'],
        stylesAlignY[alignY],
        stylesAlignX[alignX],
        closing ? styles['PopoutWrapper--closing'] : styles['PopoutWrapper--opened'],
        fixed && styles['PopoutWrapper--fixed'],
        !noBackground && styles['PopoutWrapper--masked'],
      )}
    >
      <div className={styles['PopoutWrapper__container']}>
        <div className={styles['PopoutWrapper__overlay']} onClick={onClick} />
        <div className={styles['PopoutWrapper__content']}>{children}</div>
      </div>
    </RootComponent>
  );
};
