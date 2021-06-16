export const useWaitTransitionFinish = () => {
  const waitTransitionFinish = (element: HTMLElement, eventHandler: VoidFunction) => {
    if (element) {
      element.removeEventListener('transitionend', eventHandler);
      element.addEventListener('transitionend', eventHandler);
    }
  };

  return {
    waitTransitionFinish,
  };
};
