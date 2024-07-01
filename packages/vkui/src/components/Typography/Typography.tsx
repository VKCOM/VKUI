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
  /**
   * Делает блок инлайновым
   */
  inline?: boolean;
  /**
   * Цвет текста:
   *
   * - `initial`: Цвет будет наследоваться от родителя
   * - `primary`: Цвет будет равен значению токена `--vkui--color_text_primary`
   */
  colorType?: 'initial' | 'primary';
}

export const Typography = ({
  weight,
  Component = 'span',
  normalize,
  inline,
  colorType = 'initial',
  ...restProps
}: TypographyProps) => (
  <RootComponent
    Component={Component}
    baseClassName={classNames(
      styles['Typography'],
      colorType === 'primary' && styles['Typography--color-primary'],
      normalize && styles['Typography--normalize'],
      inline && styles['Typography--inline'],
      weight && stylesWeight[weight],
    )}
    {...restProps}
  />
);
