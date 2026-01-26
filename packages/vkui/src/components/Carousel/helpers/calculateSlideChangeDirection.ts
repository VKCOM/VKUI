import { type SlideChangeDirection } from './useSlideChangeDirection';

export const calculateSlideChangeDirection = (
  oldSlideIndex: number,
  newSlideIndex: number,
  slidesCount: number,
  slideChangeDirection: SlideChangeDirection | null,
): SlideChangeDirection | 'auto' => {
  if (slideChangeDirection) {
    return slideChangeDirection;
  }
  if (slidesCount <= 2) {
    return 'auto';
  }

  if (oldSlideIndex === 0 && newSlideIndex === slidesCount - 1) {
    // С первого на последний
    return 'backward';
  } else if (oldSlideIndex === slidesCount - 1 && newSlideIndex === 0) {
    // С последнего на первый
    return 'forward';
  }
  return 'auto';
};
