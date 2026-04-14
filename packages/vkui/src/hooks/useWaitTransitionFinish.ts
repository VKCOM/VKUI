import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useDOM } from '../lib/dom';

type WaitTransitionFinishOptions = {
  getDurationFallback?: () => number;
  isMotionDisabled?: () => boolean;
};

type WaitTransitionFinishArgs = {
  element: HTMLElement | undefined | null;
  eventHandler: (e?: TransitionEvent) => void;
  durationFallback?: number;
  isMotionDisabled?: boolean;
};

type WaitTransitionFinishWithArgs = (args: WaitTransitionFinishArgs) => void;

export const useWaitTransitionFinish = (
  options?: WaitTransitionFinishOptions,
): WaitTransitionFinishWithArgs => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const { document } = useDOM();
  const detach = React.useRef(noop);

  const remove = React.useCallback(() => {
    detach.current();
    detach.current = noop;
  }, []);

  const clearTimeoutRef = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const dispose = React.useCallback(() => {
    remove();
    clearTimeoutRef();
  }, [clearTimeoutRef, remove]);

  const waitTransitionFinish = React.useCallback(
    (args: WaitTransitionFinishArgs) => {
      const durationFallback = args.durationFallback ?? options?.getDurationFallback?.() ?? 0;
      const isMotionDisabled = args.isMotionDisabled ?? options?.isMotionDisabled?.() ?? false;

      dispose();

      if (isMotionDisabled) {
        timeoutRef.current = setTimeout(args.eventHandler);
        return;
      }

      if (args.element && !document?.hidden) {
        args.element.addEventListener('transitionend', args.eventHandler);
        detach.current = () => {
          args.element?.removeEventListener('transitionend', args.eventHandler);
        };
      } else {
        timeoutRef.current = setTimeout(args.eventHandler, durationFallback);
      }
    },
    [dispose, document, options],
  );

  React.useEffect(() => dispose, [dispose]);

  return waitTransitionFinish;
};
