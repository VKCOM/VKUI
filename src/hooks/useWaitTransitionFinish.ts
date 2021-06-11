import { transitionEvent } from '../lib/supportEvents';

export const useWaitTransitionFinish = () => {
  const waitTransitionFinish = (element: HTMLElement, eventHandler: VoidFunction) => {
    if (element) {
      element.removeEventListener(transitionEvent.name, eventHandler);
      element.addEventListener(transitionEvent.name, eventHandler);
    }
  };

  return {
    waitTransitionFinish,
  };
};
