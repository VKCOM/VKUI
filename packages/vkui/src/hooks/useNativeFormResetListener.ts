import type * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export const useNativeFormResetListener = (
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: Event) => void,
): void => {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    // eslint-disable-next-line no-restricted-properties
    const formEl = ref.current.closest('form');

    if (!formEl) {
      return;
    }

    formEl.addEventListener('reset', handler);

    return () => {
      formEl.removeEventListener('reset', handler);
    };
  }, [ref, handler]);
};
