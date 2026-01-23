import * as React from 'react';
import { type CubicBezierEasingType, type PredefinedEasingType } from '../types';
import { scrollToSlide } from './scrollToSlide';

/* eslint-disable jsdoc/require-jsdoc */
type ScrollTask = {
  index: number;
  lastIndex: number;
  direction: 'forward' | 'backward' | 'auto';
};

type UseScrollToSlideParams = {
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  align: 'left' | 'center' | 'right';
  animationDuration?: number;
  animationEasing?: PredefinedEasingType | CubicBezierEasingType;
};

type UseScrollToSlideResult = {
  scrollToSlide: (
    index: number,
    lastIndex: number,
    direction?: 'forward' | 'backward' | 'auto',
  ) => void;
  isAnimatingRef: React.RefObject<boolean>;
};
/* eslint-enable jsdoc/require-jsdoc */

const getTargetSlideForward = (slides: HTMLElement[], lastSlideIndex: number, index: number) => {
  return slides.slice(lastSlideIndex).find((slide) => Number(slide.dataset.index) === index);
};

const getTargetSlideBackward = (slides: HTMLElement[], lastSlideIndex: number, index: number) => {
  return [...slides.slice(0, lastSlideIndex).reverse()].find(
    (slide) => Number(slide.dataset.index) === index,
  );
};

export function useScrollToSlide(params: UseScrollToSlideParams): UseScrollToSlideResult {
  const { slidesContainerRef, align, animationDuration, animationEasing } = params;
  const queueRef = React.useRef<ScrollTask[]>([]);
  const isAnimatingRef = React.useRef(false);

  const processQueue = React.useCallback(
    function process() {
      if (isAnimatingRef.current || !slidesContainerRef.current || queueRef.current.length === 0) {
        return;
      }

      const task = queueRef.current.shift();
      if (!task) {
        return;
      }

      const container = slidesContainerRef.current;
      const slides = Array.from(container.children) as HTMLElement[];
      const notFakeSlides = slides.filter((slide) => slide.dataset['fake'] === undefined);

      const handleStart = () => {
        isAnimatingRef.current = true;
      };

      const handleComplete = () => {
        isAnimatingRef.current = false;
        process();
      };

      if (task.direction === 'auto') {
        const targetSlide = notFakeSlides[task.index];
        if (targetSlide) {
          scrollToSlide({
            container,
            targetSlide,
            align,
            onStart: handleStart,
            onComplete: handleComplete,
            animationDuration,
            animationEasing,
          });
        } else {
          handleComplete();
        }
        return;
      }

      const lastSlide = notFakeSlides[task.lastIndex];
      const lastSlideIndex = slides.indexOf(lastSlide);

      const complete = (targetSlide: HTMLElement) => {
        const realIndex = Number(targetSlide.dataset.index);
        const realSlide = notFakeSlides[realIndex];
        container.scrollLeft = realSlide.offsetLeft;
        handleComplete();
      };

      const targetSlide =
        task.direction === 'forward'
          ? getTargetSlideForward(slides, lastSlideIndex, task.index)
          : getTargetSlideBackward(slides, lastSlideIndex, task.index);

      if (targetSlide) {
        scrollToSlide({
          container,
          targetSlide,
          align,
          onStart: handleStart,
          onComplete: () => complete(targetSlide),
          animationDuration,
          animationEasing,
        });
      } else {
        handleComplete();
      }
    },
    [slidesContainerRef, align, animationDuration, animationEasing],
  );

  const scrollFn = React.useCallback(
    (index: number, lastIndex: number, direction: 'forward' | 'backward' | 'auto' = 'auto') => {
      if (!slidesContainerRef.current) {
        return;
      }

      queueRef.current.push({ index, lastIndex, direction });

      if (!isAnimatingRef.current) {
        processQueue();
      }
    },
    [processQueue, slidesContainerRef],
  );

  return {
    scrollToSlide: scrollFn,
    isAnimatingRef,
  };
}
