import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useDOM } from '../lib/dom';
import { transitionEvent } from '../lib/supportEvents';

export const useWaitTransitionFinish = () => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const { document } = useDOM();
  const detach = React.useRef(noop);

  const remove = React.useCallback(() => {
    detach.current();
    detach.current = noop;
  }, []);

  const waitTransitionFinish = React.useCallback(
    (element: HTMLElement | null, eventHandler: VoidFunction, durationFallback: number) => {
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
