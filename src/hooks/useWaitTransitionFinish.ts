import * as React from 'react';
import { transitionEvent } from '../lib/supportEvents';

export const useWaitTransitionFinish = () => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const waitTransitionFinish = (element: HTMLElement, eventHandler: VoidFunction, durationFallback: number) => {
    if (element) {
      if (transitionEvent.supported) {
        element.removeEventListener(transitionEvent.name, eventHandler);
        element.addEventListener(transitionEvent.name, eventHandler);
      } else {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(eventHandler, durationFallback);
      }
    }
  };

  return {
    waitTransitionFinish,
  };
};
