'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasRef, HTMLAttributesWithRootRef } from '../../types';
import styles from './SplitLayout.module.css';

export interface SplitLayoutProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   *
   * @deprecated Будет удалeно в **VKUI v8**.
   * Начиная с **VKUI v7** компоненты можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  popout?: React.ReactNode;
  /**
   * Свойство для отрисовки `ModalRoot`.
   *
   * @deprecated Будет удалeно в **VKUI v8**.
   * Начиная с **VKUI v7**  `ModalRoot` можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  modal?: React.ReactNode;
  /**
   * Компонент для отрисовки заголовка.
   */
  header?: React.ReactNode;
  /**
   * Центрирует контент.
   */
  center?: boolean;
}

/**
 * @see https://vkui.io/components/split-layout
 */
export const SplitLayout = ({
  header,
  children,
  getRootRef,
  getRef,
  className,
  center,
  modal,
  popout,
  ...restProps
}: SplitLayoutProps): React.ReactNode => {
  const platform = usePlatform();

  return (
    <div className={classNames(styles.host, platform === 'ios' && styles.ios)} ref={getRootRef}>
      {header}
      <div
        {...restProps}
        ref={getRef}
        className={classNames(
          styles.inner,
          !!header && styles.innerHeader,
          center && styles.innerCenter,
          className,
        )}
      >
        {children}
        {modal}
        {popout}
      </div>
    </div>
  );
};
