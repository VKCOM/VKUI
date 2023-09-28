import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export function useAutoFocus(
  ref: React.RefObject<HTMLElement | null>,
  autoFocus: boolean | undefined,
) {
  useIsomorphicLayoutEffect(() => {
    if (!autoFocus || !ref.current) {
      return;
    }

    ref.current.focus();
  }, []);
}
