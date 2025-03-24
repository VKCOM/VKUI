import type * as React from 'react';
import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';
import type { SpinnerProps } from '../Spinner/Spinner';

export type ScreenSpinnerProps = Omit<SpinnerProps, 'size'> &
  Pick<AppRootPortalProps, 'usePortal'> & {
    /**
     * Тип отображения спиннера.
     */
    state?: 'loading' | 'cancelable' | 'done' | 'error' | 'custom';
    /**
     * Кастомная иконка, работает совместно со `state="custom"`.
     */
    customIcon?: React.ReactNode;
    /**
     * Внешний вид отображения спиннера.
     */
    mode?: 'shadow' | 'overlay';
    /**
     * Текст под иконкой.
     */
    label?: React.ReactNode;
    /**
     * Используется при `state='cancelable'`. Делает доступным для ассистивных технологий.
     */
    cancelLabel?: string;
  };
