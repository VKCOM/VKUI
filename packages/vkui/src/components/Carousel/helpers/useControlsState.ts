import * as React from 'react';
import { calculateControlsState } from './calculateControlsState';
import { calculateRealSlides } from './calculateRealSlides';

/* eslint-disable jsdoc/require-jsdoc */
type UseArrowsStateParams = {
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  showArrows: boolean;
  dragDisabled: boolean;
  looped: boolean;
};

type UseArrowsStateResult = {
  canSlideLeft: boolean;
  canSlideRight: boolean;
  canDrag: boolean;
  updateControlsState: () => void;
};
/* eslint-enable jsdoc/require-jsdoc */

const calculateIsFullyVisible = (slidesContainerRef: React.RefObject<HTMLDivElement | null>) => {
  const container = slidesContainerRef.current;
  if (!container) {
    return false;
  }
  const slides = Array.from(container.children) as HTMLElement[];
  const realSlides = calculateRealSlides(slides);
  const firstSlide = realSlides[0];
  const lastSlide = realSlides[realSlides.length - 1];
  const slidesWidth = lastSlide.scrollLeft + lastSlide.scrollWidth - firstSlide.scrollLeft;
  return container.scrollWidth <= slidesWidth;
};

export function useControlsState(params: UseArrowsStateParams): UseArrowsStateResult {
  const { slidesContainerRef, showArrows, dragDisabled, looped } = params;
  const [canSlideLeft, setCanSlideLeft] = React.useState(false);
  const [canSlideRight, setCanSlideRight] = React.useState(false);
  const [canDrag, setCanDrag] = React.useState(false);

  const updateControlsState = React.useCallback(() => {
    if (!slidesContainerRef.current) {
      return;
    }

    const isFullyVisible = calculateIsFullyVisible(slidesContainerRef);

    const state = calculateControlsState({
      container: slidesContainerRef.current,
      looped,
      showArrows,
      dragDisabled,
      isFullyVisible,
    });
    setCanSlideLeft(state.canSlideLeft);
    setCanSlideRight(state.canSlideRight);
    setCanDrag(state.canDrag);
  }, [dragDisabled, looped, showArrows, slidesContainerRef]);

  return {
    canSlideLeft,
    canSlideRight,
    canDrag,
    updateControlsState,
  };
}
