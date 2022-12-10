import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { HasRootRef } from '../../types';
import styles from './Div.module.css';

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Div
 */
export const Div = ({ children, getRootRef, className, ...restProps }: DivProps) => {
  return (
    <div {...restProps} ref={getRootRef} className={classNamesString(styles['Div'], className)}>
      {children}
    </div>
  );
};
