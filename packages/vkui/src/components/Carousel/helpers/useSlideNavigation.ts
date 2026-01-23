import * as React from 'react';
import { clamp } from '../../../helpers/math';

/* eslint-disable jsdoc/require-jsdoc */
type UseSlideNavigationParams = {
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  slideIndex: number;
  slidesCount: number;
  looped: boolean;
  onChange: ((index: number) => void) | undefined;
  onPrevClick?: (event: React.MouseEvent) => void;
  onNextClick?: (event: React.MouseEvent) => void;
};

type UseSlideNavigationResult = {
  slideLeft: (event: React.MouseEvent) => void;
  slideRight: (event: React.MouseEvent) => void;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useSlideNavigation(params: UseSlideNavigationParams): UseSlideNavigationResult {
  const {
    slidesContainerRef,
    slideIndex,
    slidesCount,
    looped,
    onChange,
    onPrevClick,
    onNextClick,
  } = params;
  const slideLeft = React.useCallback(
    (event: React.MouseEvent) => {
      if (!slidesContainerRef.current) {
        onPrevClick?.(event);
        return;
      }

      const targetIndex = looped
        ? (slideIndex - 1 + slidesCount) % slidesCount
        : clamp(slideIndex - 1, 0, slidesCount);
      onChange?.(targetIndex);
      onPrevClick?.(event);
    },
    [slidesContainerRef, looped, slideIndex, slidesCount, onChange, onPrevClick],
  );

  const slideRight = React.useCallback(
    (event: React.MouseEvent) => {
      if (!slidesContainerRef.current) {
        onNextClick?.(event);
        return;
      }

      const targetIndex = looped
        ? (slideIndex + 1) % slidesCount
        : clamp(slideIndex + 1, 0, slidesCount);
      onChange?.(targetIndex);
      onNextClick?.(event);
    },
    [slidesContainerRef, slideIndex, slidesCount, looped, onChange, onNextClick],
  );

  return {
    slideLeft,
    slideRight,
  };
}
