import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HasRootRef } from '../../types';
import styles from './RootComponent.module.css';

export interface RootComponentProps<T>
  extends React.AllHTMLAttributes<T>,
    HasRootRef<T>,
    HasComponent {
  baseClassName?: string | false;
}

/**
 * Базовый корневой компонент.
 */
export const RootComponent = <T,>({
  Component = 'div',
  baseClassName,
  className,
  getRootRef,
  ...restProps
}: RootComponentProps<T>): React.ReactNode => (
  <Component
    ref={getRootRef}
    className={classNames(
      className,
      baseClassName,
      styles['RootComponent'],
      restProps.hidden === true && styles['RootComponent--hidden'],
    )}
    {...restProps}
  />
);
