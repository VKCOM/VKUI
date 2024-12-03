import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import type { HasComponent, HasRootRef } from '../../types';
import styles from './RootComponent.module.css';

export interface RootComponentProps<T>
  extends React.AllHTMLAttributes<T>,
    HasRootRef<T>,
    HasComponent {
  baseClassName?: string | false;
  baseStyle?: React.CSSProperties;
}

/**
 * Базовый корневой компонент.
 */
export const RootComponent = <T,>({
  Component = 'div',
  baseClassName,
  className,
  baseStyle,
  style,
  getRootRef,
  ...restProps
}: RootComponentProps<T>): React.ReactNode => (
  <Component
    ref={getRootRef}
    className={classNames(
      className,
      baseClassName,
      styles.host,
      restProps.hidden === true && styles.hidden,
    )}
    style={mergeStyle(baseStyle, style)}
    {...restProps}
  />
);
