import * as React from 'react';
import { useStableCallback } from '../../hooks/useStableCallback';
import { animate, type DrawInterface, type TimingInterface } from '../../lib/animate';
import { cubicBezier } from '../../lib/fx';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
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
  onIdle?: VoidFunction,
): {
  getAnimateFunction: (drawFunction: DrawInterface) => () => void;
  getAnimationEasing: () => string;
  addToAnimationQueue: (func: VoidFunction) => void;
  startAnimation: () => void;
  animationInQueue: () => boolean;
  scheduleAnimationFrame: (callback: FrameRequestCallback) => void;
  cancelAnimation: () => void;
} {
  const animationQueue = React.useRef<VoidFunction[]>([]);
  const pendingFrames = React.useRef(new Set<{ id: number }>());
  const notifyIdle = useStableCallback(() => onIdle?.());

  function scheduleAnimationFrame(callback: FrameRequestCallback) {
    const frame = { id: 0 };
    pendingFrames.current.add(frame);
    frame.id = requestAnimationFrame((time) => {
      if (pendingFrames.current.delete(frame)) {
        callback(time);
        if (!animationInQueue()) {
          notifyIdle();
        }
      }
    });
  }

  const cancelAnimation = React.useCallback(() => {
    pendingFrames.current.forEach(({ id }) => cancelAnimationFrame(id));
    pendingFrames.current.clear();
    animationQueue.current.length = 0;
  }, []);

  useIsomorphicLayoutEffect(() => cancelAnimation, [cancelAnimation]);

  function getAnimateFunction(drawFunction: DrawInterface) {
    return () => {
      animate({
        duration: animationDuration,
        timing: getAnimationTiming(animationEasing),
        animationQueue: animationQueue.current,
        draw: drawFunction,
        scheduleFrame: scheduleAnimationFrame,
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
    return animationQueue.current.length > 0 || pendingFrames.current.size > 0;
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
    scheduleAnimationFrame,
    cancelAnimation,
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
