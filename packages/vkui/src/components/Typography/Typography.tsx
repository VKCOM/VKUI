import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Typography.module.css';

const stylesWeight = {
  '1': styles.weight1,
  '2': styles.weight2,
  '3': styles.weight3,
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
   * Включает акцентный тип начертания шрифта.
   * Используются токены fontWeightAccent[1, 2, 3]
   * Используется только вместе с `weight`
   */
  useAccentWeight?: boolean;
  /**
   * Убирает внешние отступы
   */
  normalize?: boolean;
  /**
   * Делает блок инлайновым
   */
  inline?: boolean;
}

export const Typography = ({
  weight,
  useAccentWeight,
  Component = 'span',
  normalize,
  inline,
  ...restProps
}: TypographyProps): React.ReactNode => (
  <RootComponent
    Component={Component}
    baseClassName={classNames(
      styles.host,
      normalize && styles.normalize,
      inline && styles.inline,
      weight && stylesWeight[weight],
      weight && useAccentWeight && styles.accent,
    )}
    {...restProps}
  />
);
