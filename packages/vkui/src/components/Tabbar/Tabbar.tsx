import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Tabbar.module.css';

export interface TabbarProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow?: boolean;
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
export const Tabbar = ({ shadow = true, mode, ...restProps }: TabbarProps) => {
  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(
        'vkuiInternalTabbar',
        styles['Tabbar'],
        platform === Platform.IOS && styles['Tabbar--ios'],
        getItemsLayoutClassName(mode, restProps.children),
        shadow && styles['Tabbar--shadow'],
      )}
      {...restProps}
    />
  );
};
