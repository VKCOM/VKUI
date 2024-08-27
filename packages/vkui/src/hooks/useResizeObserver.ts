import { useEffect } from 'react';
import type * as React from 'react';
import { CustomResizeObserver } from '../lib/floating/customResizeObserver';
import { useStableCallback } from './useStableCallback';

/**
 * Хук вызывает переданный коллбэк при изменении размеров элемента.
 */
export function useResizeObserver(
  ref: React.MutableRefObject<HTMLElement | null> | React.RefObject<HTMLElement | null> | null,
  callback: (element: HTMLElement) => void,
): void {
  const stableCallback = useStableCallback(callback);

  useEffect(
    function addResizeObserverHandler() {
      /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
      if (!ref || !ref.current) {
        return;
      }
      const element = ref.current;
      const observer = new CustomResizeObserver(() => stableCallback(element));
      observer.observe(element);
      observer.appendToTheDOM();

      return () => observer.disconnect();
    },
    [ref, stableCallback],
  );
}
