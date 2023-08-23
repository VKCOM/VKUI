import React from 'react';
import { HasComponent, HasRootRef } from '../../types';

export interface RootComponentProps<T>
  extends React.AllHTMLAttributes<T>,
    HasRootRef<T>,
    HasComponent {
  baseClassNames?: Array<string | false | undefined | null>;
}

function classNames(
  className: RootComponentProps<any>['className'],
  baseClassNames: RootComponentProps<any>['baseClassNames'],
) {
  let names = [];
  if (className) {
    names.push(className);
  }

  baseClassNames &&
    baseClassNames.forEach((name) => {
      if (name) {
        names.push(name);
      }
    });

  return names.join(' ');
}

/**
 * Базовый корневой компонент.
 */
export const RootComponent = <T,>({
  Component = 'div',
  baseClassNames = [],
  className,
  getRootRef,
  ...restProps
}: RootComponentProps<T>) => (
  <Component ref={getRootRef} className={classNames(className, baseClassNames)} {...restProps} />
);
