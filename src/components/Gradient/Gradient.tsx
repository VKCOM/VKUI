import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import styles from './Gradient.module.css';

export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Тип градиента
   */
  mode?: 'tint' | 'white' | 'black';
  /**
   * Направление градиента
   */
  to?: 'top' | 'bottom';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Gradient
 */
export const Gradient = ({
  mode = 'tint',
  children,
  to = 'top',
  className,
  ...restProps
}: GradientProps) => {
  return (
    <div
      role="presentation"
      {...restProps}
      className={classNamesString(
        styles['Gradient'],
        styles[`Gradient--mode-${mode}`],
        styles[`Gradient--to-${to}`],
        className,
      )}
    >
      {children}
    </div>
  );
};
