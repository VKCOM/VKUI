import { useCallback, useRef } from 'react';
import { noop } from '@vkontakte/vkjs';
import { useDOM } from '../lib/dom';
import { transitionEvent } from '../lib/supportEvents';

export const useWaitTransitionFinish = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { document } = useDOM();
  const detach = useRef(noop);

  const remove = useCallback(() => {
    detach.current();
    detach.current = noop;
  }, []);

  const waitTransitionFinish = useCallback(
    (
      element: HTMLElement | undefined | null,
      eventHandler: VoidFunction,
      durationFallback: number,
    ) => {
      if (element) {
        if (!document?.hidden && transitionEvent.supported && transitionEvent.name) {
          remove();
          element.addEventListener(transitionEvent.name, eventHandler);
          detach.current = () => {
            if (transitionEvent.name) {
              element.removeEventListener(transitionEvent.name, eventHandler);
            }
          };
        } else {
          if (timeoutRef?.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(eventHandler, durationFallback);
        }
      }
    },
    [document, remove, timeoutRef],
  );

  return {
    waitTransitionFinish,
  };
};
