import * as React from 'react';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useDOM } from '../../lib/dom';
import type { TimeoutId } from '../../types';

export function useAutoPlay(
  timeout: number,
  slideIndex: number,
  callbackFnProp: VoidFunction,
): void {
  const { document } = useDOM();
  const callbackFn = useStableCallback(callbackFnProp);

  React.useEffect(
    function initializeAutoPlay() {
      if (!document || !timeout) {
        return;
      }

      let timeoutId: TimeoutId = null;

      const stop = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      };

      const start = () => {
        switch (document.visibilityState) {
          case 'visible':
            stop();
            timeoutId = setTimeout(callbackFn, timeout);
            break;
          case 'hidden':
            stop();
        }
      };

      start();

      document.addEventListener('visibilitychange', start);

      return () => {
        stop();
        document.removeEventListener('visibilitychange', start);
      };
    },
    [document, timeout, slideIndex, callbackFn],
  );
}
