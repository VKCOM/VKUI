import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export const useWaitTransitionFinish = (): ((
  element: HTMLElement | undefined | null,
  eventHandler: (e?: TransitionEvent) => void,
  durationFallback: number,
) => void) => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const detach = React.useRef(noop);

  const remove = React.useCallback(() => {
    detach.current();
    detach.current = noop;
  }, []);

  const waitTransitionFinish = React.useCallback(
    (
      element: HTMLElement | undefined | null,
      eventHandler: (e?: TransitionEvent) => void,
      durationFallback: number,
    ) => {
      if (!element) {
        return;
      }

      if (!element.ownerDocument.hidden) {
        remove();
        element.addEventListener('transitionend', eventHandler);
        detach.current = () => {
          element.removeEventListener('transitionend', eventHandler);
        };
      } else {
        if (timeoutRef?.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(eventHandler, durationFallback);
      }
    },
    [remove, timeoutRef],
  );

  return waitTransitionFinish;
};
