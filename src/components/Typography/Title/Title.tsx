import * as React from 'react';
import { HasComponent } from '../../../types';
import { classNamesString } from '../../../lib/classNames';
import styles from './Title.module.css';

export interface TitleProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
  level?: '1' | '2' | '3';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Title
 */
export const Title = ({
  className,
  children,
  weight,
  level = '1',
  Component,
  ...restProps
}: TitleProps) => {
  if (!Component) {
    Component = ('h' + level) as React.ElementType;
  }

  return (
    <Component
      {...restProps}
      className={classNamesString(
        className,
        styles['Title'],
        styles[`Title--level-${level}`],
        weight && styles[`Title--weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
};
