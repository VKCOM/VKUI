import type * as React from 'react';
import type { SpinnerProps } from '../Spinner/Spinner';

export interface ScreenSpinnerProps extends SpinnerProps {
  state?: 'loading' | 'cancelable' | 'done' | 'error';
  mode?: 'shadow' | 'overlay';
  /**
   * Текст под иконкой
   */
  caption?: React.ReactNode;
  cancelLabel?: string;
}
