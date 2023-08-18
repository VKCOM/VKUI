import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Typography.module.css';

const stylesWeight = {
  '1': styles['Typography--weight-1'],
  '2': styles['Typography--weight-2'],
  '3': styles['Typography--weight-3'],
};

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
  weight,
  Component = 'span',
  normalize,
  ...restProps
}: TypographyProps) => (
  <RootComponent
    Component={Component}
    baseClassName={classNames(
      styles['Typography'],
      normalize && styles['Typography--normalize'],
      weight && stylesWeight[weight],
    )}
    {...restProps}
  />
);
