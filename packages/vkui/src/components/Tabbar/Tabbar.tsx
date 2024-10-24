'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Tabbar.module.css';

export interface TabbarProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Флаг, который скрывает тень (Android) или границы (iOS)
   */
  plain?: boolean;
  /**
   * Задает расположение элементов (вертикальное/горизонтальное)
   */
  mode?: 'vertical' | 'horizontal' | 'auto';
}

const getItemsLayoutClassName = (
  itemsLayout: TabbarProps['mode'],
  children: TabbarProps['children'],
): string => {
  switch (itemsLayout) {
    case 'horizontal':
      return 'vkuiInternalTabbar--layout-horizontal';
    case 'vertical':
      return 'vkuiInternalTabbar--layout-vertical';
    default:
      return React.Children.count(children) > 2
        ? getItemsLayoutClassName('vertical', [])
        : getItemsLayoutClassName('horizontal', []);
  }
};

/**
 * @see https://vkcom.github.io/VKUI/#/Tabbar
 */
export const Tabbar = ({ plain = false, mode, ...restProps }: TabbarProps): React.ReactNode => {
  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(
        'vkuiInternalTabbar',
        styles.host,
        platform === 'ios' && styles.ios,
        getItemsLayoutClassName(mode, restProps.children),
        !plain && styles.shadow,
      )}
      {...restProps}
    />
  );
};
