import type * as React from 'react';
import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';
import type { SpinnerProps } from '../Spinner/Spinner';

export type ScreenSpinnerProps = Omit<SpinnerProps, 'size'> & {
  /**
   * Тип отображения спиннера
   */
  state?: 'loading' | 'cancelable' | 'done' | 'error' | 'custom';
  /**
   * Кастомная иконка, работает совместно со `state="custom"`
   */
  customIcon?: React.ReactNode;
  /**
   * Внешний отображения спиннера
   */
  mode?: 'shadow' | 'overlay';
  /**
   * Текст под иконкой
   */
  label?: React.ReactNode;
  /**
   * Используется при `state='cancelable'`. Делает доступным для ассистивных технологий
   */
  cancelLabel?: string;
  /**
   * - При передаче `true` в качестве портала будет использован `portalRoot`
   * из контекста `AppRoot` если он передан в `AppRoot`, иначе `document.body`.
   * - При передаче элемента будут игнорироваться `portalRoot` и `disablePortal` из контекста `AppRoot`.
   *
   * По умолчанию в качестве портала будет использован `document.body`
   */
  usePortal?: AppRootPortalProps['usePortal'];
};
