import * as React from 'react';
import { animate, type DrawInterface, type TimingInterface } from '../../lib/animate';
import { cubicBezier } from '../../lib/fx';
import type { BaseGalleryProps, CubicBezierEasingType, PredefinedEasingType } from './types';

const PRESET_ANIMATION_EASING: Record<PredefinedEasingType, CubicBezierEasingType> = {
  'linear': [0, 0, 1, 1],
  'ease': [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

export function useSlideAnimation(
  animationDuration: NonNullable<BaseGalleryProps['animationDuration']>,
  animationEasing: PredefinedEasingType | CubicBezierEasingType,
): {
  getAnimateFunction: (drawFunction: DrawInterface) => () => void;
  getAnimationEasing: () => string;
  addToAnimationQueue: (func: VoidFunction) => void;
  startAnimation: () => void;
  animationInQueue: () => boolean;
} {
  const animationQueue = React.useRef<VoidFunction[]>([]);

  function getAnimateFunction(drawFunction: DrawInterface) {
    return () => {
      animate({
        duration: animationDuration,
        timing: getAnimationTiming(animationEasing),
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

  function animationInQueue() {
    return !!animationQueue.current.length;
  }

  function getAnimationEasing() {
    return `cubic-bezier(${(typeof animationEasing === 'string' ? PRESET_ANIMATION_EASING[animationEasing] : animationEasing).join(', ')})`;
  }

  return {
    animationInQueue,
    getAnimateFunction,
    addToAnimationQueue,
    startAnimation,
    getAnimationEasing,
  };
}

function getAnimationTiming(
  animationEasing: PredefinedEasingType | CubicBezierEasingType,
): TimingInterface {
  if (typeof animationEasing === 'string') {
    return cubicBezier(...PRESET_ANIMATION_EASING[animationEasing]);
  }

  return cubicBezier(...animationEasing);
}
