import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import styles from './InputLikeDivider.module.css';

export const InputLikeDivider = ({
  children,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={classNamesString(styles['InputLikeDivider'], className)} {...props}>
      {children}
    </span>
  );
};
