import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  mode: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 */
export const Badge = ({ mode = 'new', className, ...restProps }: BadgeProps) => (
  <span
    className={classNamesString(styles['Badge'], styles[`Badge--mode-${mode}`], className)}
    {...restProps}
  />
);
