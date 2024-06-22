import * as React from 'react';
import { CustomResizeObserver } from '../lib/floating/customResizeObserver';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useStableCallback } from './useStableCallback';

interface UseResizeObserverConfig {
  // Флаг определяет, нужно ли использовать MutationObserver
  // Это позволяет покрыть большую часть кейсов и не переусложнять код
  useMutationObserver?: boolean;
}

const DEFAULT_CONFIG: UseResizeObserverConfig = {
  useMutationObserver: false,
};

/**
 * Хук вызывает переданный коллбэк при изменении размеров элемента.
 */
export function useResizeObserver(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: (rect: DOMRect) => void,
  config: UseResizeObserverConfig = DEFAULT_CONFIG,
) {
  const stableCallback = useStableCallback(callback);

  useIsomorphicLayoutEffect(
    function addResizeObserverHandler() {
      if (!ref.current) {
        return;
      }
      const element = ref.current;
      const observer = new CustomResizeObserver(() => {
        stableCallback(element.getBoundingClientRect());
      });
      if (config.useMutationObserver) {
        observer.observeUsingMutationObserver(element);
      } else {
        observer.observe(element);
        observer.appendToTheDOM();
      }

      return () => observer.disconnect();
    },
    [ref],
  );
}
