'use client';

import * as React from 'react';
import { useFocusTrap, type UseFocusTrapProps } from '../../hooks/useFocusTrap';
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
  rootRef,
  children,
}: FocusTrapInternalProps): React.ReactNode => {
  const { beforeGuard, afterGuard } = useFocusTrap(rootRef, {
    autoFocus,
    restoreFocus,
    disabled,
    mount,
    autoFocusDelay,
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
