import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';

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
}: RootComponentProps<T>) => (
  <Component ref={getRootRef} className={classNames(baseClassName, className)} {...restProps} />
);
