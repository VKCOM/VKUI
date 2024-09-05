import type * as React from 'react';
import type { SpinnerProps } from '../Spinner/Spinner';

export type ScreenSpinnerProps = Omit<SpinnerProps, 'size'> & {
  state?: 'loading' | 'cancelable' | 'done' | 'error' | 'custom';
  /**
   * Кастомная иконка, работает совместно со `state="custom"`
   */
  customIcon?: React.ReactNode;
  mode?: 'shadow' | 'overlay';
  cancelLabel?: string;
};
