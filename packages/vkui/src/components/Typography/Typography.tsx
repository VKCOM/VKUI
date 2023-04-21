import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
import styles from './Typography.module.css';

export interface HasCaps {
  caps?: boolean;
}

export interface TypographyProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent,
    HasRootRef<HTMLElement> {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
  /**
   * Убирает внешние отступы
   */
  normalize?: boolean;
}

export const Typography = ({
  className,
  weight,
  Component = 'span',
  normalize,
  getRootRef,
  ...restProps
}: TypographyProps) => (
  <Component
    {...restProps}
    ref={getRootRef}
    className={classNames(
      className,
      normalize && styles['Typography--normalize'],
      weight &&
        {
          '1': styles['Typography--weight-1'],
          '2': styles['Typography--weight-2'],
          '3': styles['Typography--weight-3'],
        }[weight],
    )}
  />
);
