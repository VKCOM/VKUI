import type * as React from 'react';
import { type Alignment, type Side } from '../../lib/floating';
import { type CustomSelectOptionProps } from '../CustomSelectOption/CustomSelectOption';
import { type SelectValue } from '../NativeSelect/NativeSelect';

/* eslint-disable jsdoc/require-jsdoc */
export type MousePosition = {
  x: React.MouseEvent['clientX'];
  y: React.MouseEvent['clientY'];
};
/* eslint-enable jsdoc/require-jsdoc */

export interface CustomSelectOptionInterface {
  /**
   * Значение.
   */
  value: Exclude<SelectValue, null>;
  /**
   * Отображаемый текст.
   */
  label: React.ReactElement | string;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
  [index: string]: any;
}

export interface CustomSelectRenderOption<T extends CustomSelectOptionInterface>
  extends CustomSelectOptionProps {
  /**
   * Данные об опции.
   */
  option: T;
}

type PopupDirectionSide = Extract<Side, 'top' | 'bottom'>;
export type PopupDirection = PopupDirectionSide | `${PopupDirectionSide}-${Alignment}`;
