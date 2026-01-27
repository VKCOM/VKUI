import type { TimingInterface } from '../../../lib/animate';
import { cubicBezier } from '../../../lib/fx';
import type { CubicBezierEasingType, PredefinedEasingType } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
type ScrollToSlideParams = {
  container: HTMLElement;
  targetSlide: HTMLElement;
  align: 'left' | 'center' | 'right';
  onStart?: () => void;
  onComplete?: () => void;
  animationDuration?: number;
  animationEasing?: PredefinedEasingType | CubicBezierEasingType;
};
type CalculateTargetScrollPositionParams = {
  slide: HTMLElement;
  container: HTMLElement;
  align: 'left' | 'center' | 'right';
};

type CalculateTargetScrollPositionResult = {
  targetScrollLeft: number;
};
/* eslint-enable jsdoc/require-jsdoc */

export function calculateTargetScrollPosition(
  params: CalculateTargetScrollPositionParams,
): CalculateTargetScrollPositionResult {
  const { slide, container, align } = params;
  const slideLeft = slide.offsetLeft;
  const slideWidth = slide.offsetWidth;
  const containerWidth = container.clientWidth;

  let targetScrollLeft: number;

  if (align === 'center') {
    targetScrollLeft = slideLeft - (containerWidth - slideWidth) / 2;
  } else if (align === 'right') {
    targetScrollLeft = slideLeft + slideWidth - containerWidth;
  } else {
    targetScrollLeft = slideLeft;
  }

  return { targetScrollLeft };
}

const PRESET_ANIMATION_EASING: Record<PredefinedEasingType, CubicBezierEasingType> = {
  'linear': [0, 0, 1, 1],
  'ease': [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

function getAnimationTiming(
  animationEasing: PredefinedEasingType | CubicBezierEasingType,
): TimingInterface {
  if (typeof animationEasing === 'string') {
    return cubicBezier(...PRESET_ANIMATION_EASING[animationEasing]);
  }

  return cubicBezier(...animationEasing);
}

export function scrollToSlide(params: ScrollToSlideParams): void {
  const {
    container,
    targetSlide,
    align,
    onStart,
    onComplete,
    animationEasing = 'ease',
    animationDuration = 240,
  } = params;
  const startScrollLeft = container.scrollLeft;
  const { targetScrollLeft } = calculateTargetScrollPosition({
    slide: targetSlide,
    container,
    align,
  });

  if (Math.abs(startScrollLeft - targetScrollLeft) < 1) {
    onComplete?.();
    return;
  }

  const duration = animationDuration;
  const startTime = performance.now();

  container.style.scrollSnapType = 'none';

  const timing = getAnimationTiming(animationEasing);

  const animate = () => {
    const elapsed = performance.now() - startTime;
    const timeFraction = Math.min(elapsed / duration, 1);

    const progress = timing(timeFraction);

    container.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      container.style.scrollSnapType = '';
      container.scrollLeft = targetScrollLeft;
      onComplete?.();
    }
  };

  onStart?.();
  requestAnimationFrame(animate);
}
