import * as React from 'react';

export type SlideChangeDirection = 'forward' | 'backward';

export function useSlideChangeDirection() {
  const slideChangeDirection = React.useRef<SlideChangeDirection | null>(null);

  const setSlideChangeDirection = React.useCallback((direction: SlideChangeDirection) => {
    slideChangeDirection.current = direction;
  }, []);

  const resetSlideChangeDirection = React.useCallback(() => {
    slideChangeDirection.current = null;
  }, [slideChangeDirection]);

  const setForwardDirection = React.useCallback(() => {
    setSlideChangeDirection('forward');
  }, [setSlideChangeDirection]);

  const setBackwardDirection = React.useCallback(() => {
    setSlideChangeDirection('backward');
  }, [setSlideChangeDirection]);

  return {
    slideChangeDirection,
    setSlideChangeDirection,
    setForwardDirection,
    setBackwardDirection,
    resetSlideChangeDirection,
  };
}
