import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  mode: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 */
export const Badge = ({ mode = 'new', className, ...restProps }: BadgeProps) => (
  <span
    className={classNames(
      styles['Badge'],
      {
        new: styles['Badge--mode-new'],
        prominent: styles['Badge--mode-prominent'],
      }[mode],
      className,
    )}
    {...restProps}
  />
);
