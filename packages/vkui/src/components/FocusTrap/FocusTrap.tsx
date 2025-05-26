'use client';

import { type AllHTMLAttributes } from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusTrap, type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import type { HasComponent, HasRootRef } from '../../types';

export interface FocusTrapProps<T extends HTMLElement = HTMLElement>
  extends UseFocusTrapProps,
    Omit<AllHTMLAttributes<T>, keyof UseFocusTrapProps>,
    HasRootRef<T>,
    HasComponent {}

const DEFAULT_MUTATION_OBSERVER_OPTIONS: MutationObserverInit = {
  subtree: true,
  childList: true,
};

/**
 * @see https://vkcom.github.io/VKUI/#/FocusTrap
 */
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
