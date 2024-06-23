import * as React from 'react';
import { CustomResizeObserver } from '../lib/floating/customResizeObserver';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useStableCallback } from './useStableCallback';

/**
 * Хук вызывает переданный коллбэк при изменении размеров элемента.
 */
export function useResizeObserver(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: (rect: DOMRect) => void,
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
      observer.observe(element);
      observer.appendToTheDOM();

      return () => observer.disconnect();
    },
    [ref],
  );
}
