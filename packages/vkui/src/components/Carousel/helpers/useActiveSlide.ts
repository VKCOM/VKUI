import * as React from 'react';
import { calculateActiveSlide } from './calculateActiveSlide';

/* eslint-disable jsdoc/require-jsdoc */
type UseActiveSlideParams = {
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  slideIndex: number;
  isAnimatingRef: React.RefObject<boolean>;
  isDraggingRef: React.RefObject<boolean>;
  looped: boolean;
  setLocalSlideIndex: (index: number) => void;
  onChange: (index: number) => void;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useActiveSlide(params: UseActiveSlideParams) {
  const {
    slidesContainerRef,
    slideIndex,
    isAnimatingRef,
    isDraggingRef,
    looped,
    setLocalSlideIndex,
    onChange,
  } = params;
  const lastSlideIndexRef = React.useRef(slideIndex);
  const scrollEndTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScrollEnd = React.useCallback(() => {
    if (!slidesContainerRef.current) {
      return;
    }

    const container = slidesContainerRef.current;
    const slides = Array.from(container.children) as HTMLElement[];
    const notFakeSlides = slides.filter((slide) => slide.dataset['fake'] === undefined);

    const { activeIndex } = calculateActiveSlide({
      container,
      slides,
      looped,
    });

    const realSlide = notFakeSlides[activeIndex];
    container.scrollLeft = realSlide.offsetLeft;

    if (activeIndex !== slideIndex && activeIndex !== lastSlideIndexRef.current) {
      lastSlideIndexRef.current = activeIndex;
      setLocalSlideIndex(activeIndex);
      onChange?.(activeIndex);
    }
  }, [looped, onChange, setLocalSlideIndex, slideIndex, slidesContainerRef]);

  const handleScroll = React.useCallback(() => {
    if (isAnimatingRef.current || isDraggingRef.current || !slidesContainerRef.current) {
      return;
    }

    const container = slidesContainerRef.current;

    if (scrollEndTimeoutRef.current) {
      clearTimeout(scrollEndTimeoutRef.current);
    }

    scrollEndTimeoutRef.current = setTimeout(() => {
      handleScrollEnd();
    }, 150);

    const slides = Array.from(container.children) as HTMLElement[];

    if (slides.length === 0) {
      return;
    }

    const { activeIndex } = calculateActiveSlide({
      container,
      slides,
      looped,
    });

    if (activeIndex !== slideIndex && activeIndex !== lastSlideIndexRef.current) {
      lastSlideIndexRef.current = activeIndex;
      setLocalSlideIndex(activeIndex);
      onChange?.(activeIndex);
    }
  }, [
    isAnimatingRef,
    isDraggingRef,
    slidesContainerRef,
    looped,
    slideIndex,
    handleScrollEnd,
    setLocalSlideIndex,
    onChange,
  ]);

  React.useEffect(() => {
    return () => {
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
    };
  }, []);

  return handleScroll;
}
