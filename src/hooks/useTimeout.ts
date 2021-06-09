import { useCallback, useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { canUseDOM } from '../lib/dom';

export function useTimeout(cb: () => any, duration: number) {
  const options = useRef({ cb, duration });
  useIsomorphicLayoutEffect(() => {
    options.current.cb = cb;
    options.current.duration = duration;
  }, [cb, duration]);

  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const clear = useCallback(() => canUseDOM && clearTimeout(timeout.current), []);
  const set = useCallback(() => {
    clear();
    if (canUseDOM) {
      timeout.current = setTimeout(() => {
        const { cb } = options.current;
        typeof cb === 'function' && cb();
      }, options.current.duration);
    }
  }, []);
  useEffect(() => clear, []);

  return { set, clear };
}
