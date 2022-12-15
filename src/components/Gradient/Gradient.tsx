import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
      className={classNames(
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
