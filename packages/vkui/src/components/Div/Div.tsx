import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import styles from './Div.module.css';

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Div
 *
 * test
 */
export const Div = ({ children, getRootRef, className, ...restProps }: DivProps) => {
  return (
    <div {...restProps} ref={getRootRef} className={classNames(styles['Div'], className)}>
      {children}
    </div>
  );
};
