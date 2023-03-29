import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import styles from './Tabbar.module.css';

export interface TabbarProps extends React.HTMLAttributes<HTMLDivElement> {
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
export const Tabbar = ({ children, shadow = true, mode, className, ...restProps }: TabbarProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        'vkuiInternalTabbar',
        styles['Tabbar'],
        platform === Platform.IOS && styles['Tabbar--ios'],
        getItemsLayoutClassName(mode, children),
        shadow && styles['Tabbar--shadow'],
        className,
      )}
      {...restProps}
    >
      <div className={styles['Tabbar__in']}>{children}</div>
    </div>
  );
};
