'use client';

import * as React from 'react';
import { type ScreenSpinnerProps } from './types';

export interface ScreenSpinnerContextProps {
  /**
   * Тип отображения спиннера.
   */
  state: NonNullable<ScreenSpinnerProps['state']>;
  /**
   * Текст под иконкой.
   */
  label?: ScreenSpinnerProps['label'];
  /**
   * Кастомная иконка, работает совместно со `state="custom"`.
   */
  customIcon?: ScreenSpinnerProps['customIcon'];
}

export const ScreenSpinnerContext: React.Context<ScreenSpinnerContextProps> =
  React.createContext<ScreenSpinnerContextProps>({
    state: 'loading',
    label: undefined,
    customIcon: undefined,
  });
