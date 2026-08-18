import { useEffect } from 'react';
import * as React from 'react';
import { isWindow, useDOM } from '../lib/dom';
import { isRefObject } from '../lib/isRefObject';
import { useStableCallback } from './useStableCallback';

/**
 * Хук вызывает переданный коллбэк при изменении размеров элемента.
 */
export function useResizeObserver(
  ref: React.RefObject<HTMLElement | null> | Window | null | undefined,
  callback: (element: HTMLElement | Window) => void,
): void {
  const stableCallback = useStableCallback(callback);

  useEffect(
    function addResizeObserverHandler() {
      if (!ref) {
        return;
      }

      if (isWindow(ref)) {
        const onResize = () => stableCallback(ref);
        ref.addEventListener('resize', onResize);
        return () => ref.removeEventListener('resize', onResize);
      }

      /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
      if (!isRefObject(ref) || !ref.current) {
        return;
      }
      const element = ref.current;

      const observeFn = () => stableCallback(element);

      // eslint-disable-next-line compat/compat
      const observer: ResizeObserver = new ResizeObserver(observeFn);
      observer.observe(element);

      return () => observer.disconnect();
    },
    [ref, stableCallback],
  );
}

export function useResizeObserverElement<T extends HTMLElement>(
  callback: (element: T) => void,
): React.RefObject<T | null> {
  const ref = React.useRef<T>(null);
  const stableCallback = useStableCallback(callback);

  useEffect(
    function addResizeObserverHandler() {
      if (!ref?.current) {
        return;
      }

      const element = ref.current;

      const observeFn = () => stableCallback(element);

      const observer: ResizeObserver = new ResizeObserver(observeFn);
      observer.observe(element);

      return () => observer.disconnect();
    },
    [stableCallback],
  );

  return ref;
}

export function useWindowResizeEventListener(listener: (event: UIEvent) => void) {
  const { window } = useDOM();
  const stableListener = useStableCallback(listener);

  useEffect(
    function addResizeObserverHandler() {
      if (!window) {
        return;
      }

      window.addEventListener('resize', stableListener);
      return () => window.removeEventListener('resize', stableListener);
    },
    [stableListener, window],
  );
}
