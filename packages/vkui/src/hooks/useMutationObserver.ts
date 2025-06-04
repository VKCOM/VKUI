import type * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useStableCallback } from './useStableCallback';

export const DEFAULT_MUTATION_OBSERVER_OPTIONS: MutationObserverInit = {
  subtree: true,
  childList: true,
};

export const useMutationObserver = (
  ref: React.RefObject<HTMLElement | null> | null,
  callback: () => void,
  options: MutationObserverInit = DEFAULT_MUTATION_OBSERVER_OPTIONS,
): void => {
  const stableCallback = useStableCallback(callback);

  useIsomorphicLayoutEffect(() => {
    if (!ref || !ref.current) {
      return;
    }
    const observer = new MutationObserver(stableCallback);
    observer.observe(ref.current, options);
    return () => observer.disconnect();
  }, [ref, stableCallback]);
};
