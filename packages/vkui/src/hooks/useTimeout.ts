import { useCallback, useRef } from 'react';
import { canUseDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export function useTimeout(cb: () => any, duration: number) {
  const options = useRef({ cb, duration });
  useIsomorphicLayoutEffect(() => {
    options.current.cb = cb;
    options.current.duration = duration;
  }, [cb, duration]);

  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const clear = useCallback(() => {
    if (canUseDOM && timeout?.current) {
      clearTimeout(timeout.current);
    }
  }, []);
  const set = useCallback(
    (duration = options.current.duration) => {
      clear();
      if (canUseDOM) {
        timeout.current = setTimeout(() => {
          const { cb } = options.current;
          typeof cb === 'function' && cb();
        }, duration);
      }
    },
    [clear],
  );
  useIsomorphicLayoutEffect(() => clear, []);

  return { set, clear };
}
