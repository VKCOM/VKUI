import * as React from "react";
import { useDOM } from "../lib/dom";
import { transitionEvent } from "../lib/supportEvents";

export const useWaitTransitionFinish = () => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const { document } = useDOM();

  const waitTransitionFinish = React.useCallback(
    (
      element: HTMLElement | null,
      eventHandler: VoidFunction,
      durationFallback: number
    ) => {
      if (element) {
        if (
          !document?.hidden &&
          transitionEvent.supported &&
          transitionEvent.name
        ) {
          element.removeEventListener(transitionEvent.name, eventHandler);
          element.addEventListener(transitionEvent.name, eventHandler);
        } else {
          if (timeoutRef?.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(eventHandler, durationFallback);
        }
      }
    },
    [document, timeoutRef]
  );

  return {
    waitTransitionFinish,
  };
};
