import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Gradient.module.css';

export interface GradientProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Тип градиента
   */
  mode?: 'tint' | 'default';
  /**
   * Направление градиента
   */
  to?: 'top' | 'bottom';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Gradient
 */
export const Gradient = ({ mode = 'default', to = 'top', ...restProps }: GradientProps) => {
  return (
    <RootComponent
      role="presentation"
      {...restProps}
      baseClassName={classNames(
        styles['Gradient'],
        mode !== 'default' && styles['Gradient--mode-tint'],
        to === 'bottom' && styles['Gradient--to-bottom'],
      )}
    />
  );
};
