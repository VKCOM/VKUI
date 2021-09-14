import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { canUseDOM } from '../lib/dom';

export function useTimeout(cb: () => any, duration: number) {
  const options = React.useRef({ cb, duration });
  useIsomorphicLayoutEffect(() => {
    options.current.cb = cb;
    options.current.duration = duration;
  }, [cb, duration]);

  const timeout = React.useRef<ReturnType<typeof setTimeout>>();
  const clear = React.useCallback(() => canUseDOM && clearTimeout(timeout.current), []);
  const set = React.useCallback(() => {
    clear();
    if (canUseDOM) {
      timeout.current = setTimeout(() => {
        const { cb } = options.current;
        typeof cb === 'function' && cb();
      }, options.current.duration);
    }
  }, []);
  React.useEffect(() => clear, []);

  return { set, clear };
}
