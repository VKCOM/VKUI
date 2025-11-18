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

const stylesAlign = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

export function weightClassNames(weight: '1' | '2' | '3' | undefined, useAccentWeight = false) {
  if (!weight) {
    return '';
  }

  return classNames(stylesWeight[weight], useAccentWeight && styles.accent);
}

export interface HasCaps {
  /**
   * Отображение текста в верхнем регистре.
   */
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
   * Используется только вместе с `weight`.
   */
  useAccentWeight?: boolean;
  /**
   * Убирает внешние отступы.
   */
  normalize?: boolean;
  /**
   * Делает блок инлайновым.
   */
  inline?: boolean;
  /**
   * Выравнивание текста. Не имеет эффекта при inline={true}.
   */
  align?: 'start' | 'center' | 'end';
}

export const Typography = ({
  weight,
  useAccentWeight,
  Component = 'span',
  normalize,
  inline,
  align,
  ...restProps
}: TypographyProps): React.ReactNode => (
  <RootComponent
    Component={Component}
    baseClassName={classNames(
      styles.host,
      normalize && styles.normalize,
      inline && styles.inline,
      weightClassNames(weight, useAccentWeight),
      align && stylesAlign[align],
    )}
    {...restProps}
  />
);
