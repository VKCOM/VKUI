'use client';

import { type AllHTMLAttributes } from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusTrap, type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { DEFAULT_MUTATION_OBSERVER_OPTIONS } from '../../hooks/useMutationObserver';
import type { HasComponent, HasRootRef } from '../../types';

export interface FocusTrapProps<T extends HTMLElement = HTMLElement>
  extends UseFocusTrapProps,
    Omit<AllHTMLAttributes<T>, keyof UseFocusTrapProps>,
    HasRootRef<T>,
    HasComponent {}

export const FocusTrap = <T extends HTMLElement = HTMLElement>({
  Component = 'div',
  onClose,
  autoFocus = true,
  restoreFocus = true,
  disabled = false,
  mount = true,
  timeout = 0,
  getRootRef,
  children,
  captureEscapeKeyboardEvent = true,
  mutationObserverOptions = DEFAULT_MUTATION_OBSERVER_OPTIONS,
  ...restProps
}: FocusTrapProps<T>): React.ReactNode => {
  const ref = useExternRef<T>(getRootRef);

  useFocusTrap(ref, {
    autoFocus,
    restoreFocus,
    disabled,
    mount,
    timeout,
    onClose,
    captureEscapeKeyboardEvent,
    mutationObserverOptions,
  });

  return (
    <Component tabIndex={-1} ref={ref} {...restProps}>
      {children}
    </Component>
  );
};
