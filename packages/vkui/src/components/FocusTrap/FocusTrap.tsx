'use client';

import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusTrap, type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { DEFAULT_MUTATION_OBSERVER_OPTIONS } from '../../hooks/useMutationObserver';
import type { HasComponent, HasRootRef } from '../../types';

export interface FocusTrapInternalProps<T extends HTMLElement = HTMLElement>
  extends UseFocusTrapProps,
    Omit<React.AllHTMLAttributes<T>, keyof UseFocusTrapProps>,
    HasRootRef<T>,
    HasComponent {}

export type FocusTrapProps<T extends HTMLElement = HTMLElement> = Omit<
  FocusTrapInternalProps<T>,
  'captureEscapeKeyboardEvent' | 'mutationObserverOptions'
>;

export const FocusTrapInternal = <T extends HTMLElement = HTMLElement>({
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
}: FocusTrapInternalProps<T>): React.ReactNode => {
  const ref = useExternRef<T>(getRootRef);

  const { beforeGuard, afterGuard } = useFocusTrap(ref, {
    onClose,
    autoFocus,
    restoreFocus,
    disabled,
    mount,
    timeout,
    captureEscapeKeyboardEvent,
    mutationObserverOptions,
  });

  return (
    <Component tabIndex={-1} ref={ref} {...restProps}>
      {beforeGuard}
      {children}
      {afterGuard}
    </Component>
  );
};

export const FocusTrap = <T extends HTMLElement = HTMLElement>(
  props: FocusTrapProps<T>,
): React.ReactNode => {
  return <FocusTrapInternal {...props} />;
};
