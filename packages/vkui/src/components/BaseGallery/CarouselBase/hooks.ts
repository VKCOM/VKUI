import * as React from 'react';
import { animate, DrawInterface } from '../../../lib/animate';
import { cubicBezier } from '../../../lib/fx';
import { ANIMATION_DURATION } from './constants';

const TIMING_FUNCTION = cubicBezier(0.8, 1);

export function useSlideAnimation() {
  const animationQueue = React.useRef<VoidFunction[]>([]);

  function getAnimateFunction(drawFunction: DrawInterface) {
    return () => {
      animate({
        duration: ANIMATION_DURATION,
        timing: TIMING_FUNCTION,
        animationQueue: animationQueue.current,
        draw: drawFunction,
      });
    };
  }

  function addToAnimationQueue(func: VoidFunction) {
    animationQueue.current.push(func);
  }

  function startAnimation() {
    if (animationQueue.current.length === 1) {
      animationQueue.current[0]();
    }
  }

  return {
    getAnimateFunction,
    addToAnimationQueue,
    startAnimation,
  };
}
