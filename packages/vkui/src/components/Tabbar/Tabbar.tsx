import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
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
      return 'vkuiInternalTabbarLayoutHorizontal';
    case 'vertical':
      return 'vkuiInternalTabbarLayoutVertical';
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
        styles.host,
        platform === 'ios' && styles.hostIos,
        getItemsLayoutClassName(mode, restProps.children),
        shadow && styles.hostShadow,
      )}
      {...restProps}
    />
  );
};
