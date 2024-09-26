import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './InputLike.module.css';

export const InputLikeDivider = ({
  children,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLSpanElement>): React.ReactNode => {
  return (
    <span className={classNames(styles.divider, className)} {...props}>
      {children}
    </span>
  );
};
