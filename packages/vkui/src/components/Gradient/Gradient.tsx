import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './Gradient.module.css';

const stylesMode = {
  tint: styles['Gradient--mode-tint'],
  black: styles['Gradient--mode-black'],
  white: styles['Gradient--mode-white'],
};

const stylesTo = {
  top: styles['Gradient--to-top'],
  bottom: styles['Gradient--to-bottom'],
};

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
      className={classNames(stylesMode[mode], stylesTo[to], className)}
    >
      {children}
    </div>
  );
};
