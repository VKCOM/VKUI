'use client';

import * as React from 'react';
import { useFocusTrap, type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { DEFAULT_MUTATION_OBSERVER_OPTIONS } from '../../hooks/useMutationObserver';
import type { HasChildren } from '../../types';

export interface FocusTrapInternalProps extends UseFocusTrapProps, HasChildren {
  /**
   * Ref на корневой элемент.
   */
  rootRef: React.RefObject<HTMLElement | null>;
}

export type FocusTrapProps = Omit<FocusTrapInternalProps, 'mutationObserverOptions' | 'mount'>;

export const FocusTrapInternal = ({
  autoFocus = true,
  restoreFocus = true,
  disabled = false,
  mount = true,
  autoFocusDelay = 0,
  getRestoreFocusTarget,
  rootRef,
  children,
  mutationObserverOptions = DEFAULT_MUTATION_OBSERVER_OPTIONS,
}: FocusTrapInternalProps): React.ReactNode => {
  const { beforeGuard, afterGuard } = useFocusTrap(rootRef, {
    autoFocus,
    restoreFocus,
    getRestoreFocusTarget,
    disabled,
    mount,
    autoFocusDelay,
    mutationObserverOptions,
  });

  return (
    <React.Fragment>
      {beforeGuard}
      {children}
      {afterGuard}
    </React.Fragment>
  );
};

export const FocusTrap = (props: FocusTrapProps): React.ReactNode => {
  return <FocusTrapInternal {...props} />;
};
