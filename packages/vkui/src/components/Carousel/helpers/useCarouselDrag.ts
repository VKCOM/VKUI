import * as React from 'react';
import { type CustomTouchEvent, type CustomTouchEventHandler } from '../../Touch/Touch';

const SLIDE_THRESHOLD = 0.05;

const isTouchEvent = (event: MouseEvent | TouchEvent): boolean => {
  return event.type.startsWith('touch');
};

/* eslint-disable jsdoc/require-jsdoc */
type GetTargetSlideIndexParams = {
  slides: HTMLElement[];
  currentSlideIndex: number;
  startScrollLeft: number;
  shiftX: number;
  looped: boolean;
};

type GetTargetSlideIndexResult = {
  targetIndex: number;
};

type UseCarouselDragParams = {
  dragDisabled: boolean;
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  slideIndex: number;
  onChange: ((current: number) => void) | undefined;
  looped: boolean;
  align: 'left' | 'center' | 'right';
  scrollToSlide: (index: number, lastIndex: number) => void;
  isAnimatingRef: React.RefObject<boolean>;
  onDragStart?: CustomTouchEventHandler;
  onDragEnd?: (e: CustomTouchEvent, targetIndex: number) => void;
};

type UseCarouselDragResult = {
  onStart: (e: CustomTouchEvent) => void;
  onMoveX: (e: CustomTouchEvent) => void;
  onEnd: (e: CustomTouchEvent) => void;
  isDraggingRef: React.RefObject<boolean>;
};
/* eslint-enable jsdoc/require-jsdoc */

const getTargetSlideIndex = (params: GetTargetSlideIndexParams): GetTargetSlideIndexResult => {
  const { slides, currentSlideIndex, startScrollLeft, shiftX, looped } = params;

  if (slides.length === 0) {
    return { targetIndex: currentSlideIndex };
  }

  const currentSlide = slides[currentSlideIndex];
  if (!currentSlide) {
    return { targetIndex: currentSlideIndex };
  }

  const slideWidth = currentSlide.offsetWidth;
  const threshold = slideWidth * SLIDE_THRESHOLD;

  if (Math.abs(shiftX) < threshold) {
    return { targetIndex: currentSlideIndex };
  }

  const currentScrollLeft = startScrollLeft - shiftX;

  let targetIndex = slides.reduce((closestIndex, slide, index) => {
    const slideLeft = slide.offsetLeft;
    const closestSlideLeft = slides[closestIndex].offsetLeft;

    const distanceToCurrent = Math.abs(slideLeft - currentScrollLeft);
    const distanceToClosest = Math.abs(closestSlideLeft - currentScrollLeft);

    return distanceToCurrent < distanceToClosest ? index : closestIndex;
  }, currentSlideIndex);

  if (targetIndex === currentSlideIndex) {
    const direction = shiftX > 0 ? -1 : 1;
    let nextIndex = currentSlideIndex + direction;

    if (looped) {
      nextIndex = (nextIndex + slides.length) % slides.length;
    } else {
      nextIndex = Math.max(0, Math.min(nextIndex, slides.length - 1));
    }

    if (nextIndex !== currentSlideIndex && Math.abs(shiftX) >= threshold) {
      targetIndex = nextIndex;
    }
  }

  if (!looped) {
    targetIndex = Math.max(0, Math.min(targetIndex, slides.length - 1));
  }

  return { targetIndex };
};

export function useCarouselDrag(params: UseCarouselDragParams): UseCarouselDragResult {
  const {
    slidesContainerRef,
    isAnimatingRef,
    slideIndex,
    onChange,
    looped,
    scrollToSlide,
    dragDisabled,
    onDragStart,
    onDragEnd,
  } = params;
  const startScrollLeftRef = React.useRef<number>(0);
  const isDraggingRef = React.useRef<boolean>(false);

  const onStart = React.useCallback(
    (e: CustomTouchEvent) => {
      if (dragDisabled || isTouchEvent(e.originalEvent) || isAnimatingRef.current) {
        return;
      }

      const container = slidesContainerRef.current;
      if (!container) {
        return;
      }
      onDragStart?.(e);
      e.originalEvent.stopPropagation();
      isDraggingRef.current = true;
      container.style.scrollSnapType = 'none';
      startScrollLeftRef.current = container.scrollLeft;
    },
    [dragDisabled, isAnimatingRef, onDragStart, slidesContainerRef],
  );

  const onMoveX = React.useCallback(
    (e: CustomTouchEvent) => {
      if (
        dragDisabled ||
        isTouchEvent(e.originalEvent) ||
        !isDraggingRef.current ||
        isAnimatingRef.current ||
        !e.isSlideX
      ) {
        return;
      }

      const container = slidesContainerRef.current;
      if (!container) {
        return;
      }

      e.originalEvent.preventDefault();

      const newScrollLeft = startScrollLeftRef.current - e.shiftX;

      if (!looped) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        container.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
      } else {
        container.scrollLeft = newScrollLeft;
      }
    },
    [dragDisabled, isAnimatingRef, slidesContainerRef, looped],
  );

  const onEnd = React.useCallback(
    (e: CustomTouchEvent) => {
      if (
        dragDisabled ||
        isTouchEvent(e.originalEvent) ||
        !isDraggingRef.current ||
        isAnimatingRef.current
      ) {
        return;
      }

      isDraggingRef.current = false;

      const container = slidesContainerRef.current;
      if (!container) {
        return;
      }
      const slides = Array.from(container.children) as HTMLElement[];
      const notFakeSlides = slides.filter((slide) => slide.dataset['fake'] === undefined);

      const { targetIndex: activeIndex } = getTargetSlideIndex({
        slides: notFakeSlides,
        currentSlideIndex: slideIndex,
        startScrollLeft: startScrollLeftRef.current,
        shiftX: e.shiftX,
        looped,
      });

      onDragEnd?.(e, activeIndex);

      if (slideIndex !== activeIndex) {
        onChange?.(activeIndex);
      } else {
        scrollToSlide(activeIndex, activeIndex);
      }
    },
    [
      dragDisabled,
      isAnimatingRef,
      slidesContainerRef,
      slideIndex,
      looped,
      onDragEnd,
      onChange,
      scrollToSlide,
    ],
  );

  return {
    onStart,
    onMoveX,
    onEnd,
    isDraggingRef,
  };
}
