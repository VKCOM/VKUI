import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './InputLikeDivider.module.css';

export const InputLikeDivider = ({
  children,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={classNames(styles['InputLikeDivider'], className)} {...props}>
      {children}
    </span>
  );
};
