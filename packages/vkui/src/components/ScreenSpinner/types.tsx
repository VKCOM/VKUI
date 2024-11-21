import type * as React from 'react';
import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';
import type { SpinnerProps } from '../Spinner/Spinner';

export type ScreenSpinnerProps = Omit<SpinnerProps, 'size'> & {
  state?: 'loading' | 'cancelable' | 'done' | 'error' | 'custom';
  /**
   * Кастомная иконка, работает совместно со `state="custom"`
   */
  customIcon?: React.ReactNode;
  mode?: 'shadow' | 'overlay';
  /**
   * Текст под иконкой
   */
  label?: React.ReactNode;
  cancelLabel?: string;
  usePortal?: AppRootPortalProps['usePortal'];
};
