import { useRef } from 'react';
import type * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useStableCallback } from './useStableCallback';

const DEFAULT_OPTIONS: MutationObserverInit = {
  subtree: true,
  childList: true,
};

export const useMutationObserver = (
  ref: React.RefObject<HTMLElement | null> | null,
  callback: () => void,
  options: MutationObserverInit = DEFAULT_OPTIONS,
): void => {
  const stableCallback = useStableCallback(callback);
  const optionsRef = useRef<MutationObserverInit>(options);

  useIsomorphicLayoutEffect(
    function initOptions() {
      optionsRef.current = options;
    },
    [options],
  );

  useIsomorphicLayoutEffect(
    function initMutationObserver() {
      if (!ref || !ref.current) {
        return;
      }
      const observer = new MutationObserver(stableCallback);
      observer.observe(ref.current, optionsRef.current);
      return () => observer.disconnect();
    },
    [ref, stableCallback],
  );
};
