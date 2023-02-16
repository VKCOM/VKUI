import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { HasComponent } from '../../../types';
import styles from './Subhead.module.css';

const sizeYClassNames = {
  none: styles['Subhead--sizeY-none'],
  [SizeType.COMPACT]: styles['Subhead--sizeY-compact'],
};

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
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Component
      {...restProps}
      className={classNames(
        className,
        styles['Subhead'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        weight && styles[`Subhead--weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
};
