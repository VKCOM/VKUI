import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getSizeYClassName } from '../../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { HasComponent } from '../../../types';
import styles from './Subhead.module.css';

export interface SubheadProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Subhead
 */
export const Subhead = ({
  className,
  children,
  weight,
  Component = 'h5',
  ...restProps
}: SubheadProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <Component
      {...restProps}
      className={classNames(
        className,
        styles['Subhead'],
        getSizeYClassName(styles['Subhead'], sizeY),
        weight && styles[`Subhead--weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
};
