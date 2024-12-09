import { useEffect } from 'react';
import type * as React from 'react';
import { useDOM } from '../lib/dom';
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
  const { window } = useDOM();

  useEffect(
    function addResizeObserverHandler() {
      /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
      if (!ref || !ref.current || !window) {
        return;
      }
      const element = ref.current;
      const canUseResizeObserver =
        'ResizeObserver' in window && window.ResizeObserver !== undefined;

      const observeFn = () => stableCallback(element);

      const observer: ResizeObserver | CustomResizeObserver = canUseResizeObserver
        ? // eslint-disable-next-line compat/compat
          new ResizeObserver(observeFn)
        : new CustomResizeObserver(observeFn);
      observer.observe(element);

      if (observer instanceof CustomResizeObserver) {
        observer.appendToTheDOM();
      }

      return () => observer.disconnect();
    },
    [ref, stableCallback, window],
  );
}
