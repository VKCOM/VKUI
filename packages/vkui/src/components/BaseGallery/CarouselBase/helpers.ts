import { GallerySlidesState } from '../types';
import { SLIDE_THRESHOLD } from './constants';
import { LoopPoint, SlidesManagerState } from './types';

/*
 * Считает отступ слоя галереи
 */
export function calculateIndent(
  targetIndex: number,
  slidesManager: SlidesManagerState,
  isCenterWithCustomWidth: boolean,
) {
  if (slidesManager.isFullyVisible || !slidesManager.slides.length) {
    return 0;
  }

  const targetSlide = slidesManager.slides[targetIndex];

  if (targetSlide) {
    const { coordX, width } = targetSlide;

    if (isCenterWithCustomWidth) {
      return slidesManager.viewportOffsetWidth / 2 - coordX - width / 2;
    }

    return -1 * coordX;
  }

  return 0;
}

/**
 * Вычисляем индексы слайдов, которые необходимо смещать
 */
export function getShiftedIndexes(
  direction: 1 | -1,
  slides: GallerySlidesState[],
  availableWidth: number,
) {
  let gap = availableWidth;
  const shiftedSlideIndexes = [];
  const startIndex = direction === 1 ? 0 : slides.length - 1;
  const endIndex = direction === 1 ? slides.length - 1 : 0;

  for (
    let i = startIndex;
    (direction === 1 ? i <= endIndex : i >= endIndex) && gap > 0;
    i += direction
  ) {
    const slideWidth = slides[i].width;

    if (gap > 0) {
      shiftedSlideIndexes.push(i);
    }
    gap -= slideWidth;
  }

  return shiftedSlideIndexes;
}

export function calculateLoopPoints(
  indexes: number[],
  edge: 'start' | 'end',
  slidesManager: SlidesManagerState,
  containerWidth: number,
): LoopPoint[] {
  const { contentSize, slides, snaps } = slidesManager;
  const isStartEdge = edge === 'start';
  const offset = isStartEdge ? -contentSize : contentSize;

  return indexes.map((index) => {
    const initial = isStartEdge ? 0 : -contentSize;
    const altered = isStartEdge ? contentSize : 0;
    const loopPoint = isStartEdge
      ? snaps[index] + containerWidth + offset
      : snaps[index] - slides[index].width + offset - snaps[0];

    return {
      index,
      target: (currentLocation) => {
        return currentLocation >= loopPoint ? initial : altered;
      },
    };
  });
}

/**
 * Вычисляем "ключевые" точки, на которых должно происходить смещение слайдов
 */
export function getLoopPoints(slidesManager: SlidesManagerState, containerWidth: number) {
  const { slides, snaps } = slidesManager;
  const startShiftedIndexes = getShiftedIndexes(-1, slides, snaps[0]);
  const endShiftedIndexes = getShiftedIndexes(1, slides, containerWidth - snaps[0]);

  return [
    ...calculateLoopPoints(endShiftedIndexes, 'start', slidesManager, containerWidth),
    ...calculateLoopPoints(startShiftedIndexes, 'end', slidesManager, containerWidth),
  ];
}

/*
 * Получает индекс слайда, к которому будет осуществлен переход
 */
export function getTargetIndex(
  slides: GallerySlidesState[],
  slideIndex: number,
  currentShiftX: number,
  currentShiftXDelta: number,
) {
  const shift = currentShiftX + currentShiftXDelta;
  const direction = currentShiftXDelta < 0 ? 1 : -1;

  // Находим ближайшую границу слайда к текущему отступу
  let targetIndex = slides.reduce((val: number, item: GallerySlidesState, index: number) => {
    const previousValue = Math.abs(slides[val].coordX + shift);
    const currentValue = Math.abs(item.coordX + shift);

    return previousValue < currentValue ? val : index;
  }, slideIndex);

  if (targetIndex === slideIndex) {
    let targetSlide = slideIndex + direction;

    if (targetSlide >= 0 && targetSlide < slides.length) {
      if (Math.abs(currentShiftXDelta) > slides[targetSlide].width * SLIDE_THRESHOLD) {
        return targetSlide;
      }
      return targetIndex;
    }
    return direction < 0
      ? (targetSlide + slides.length) % slides.length
      : targetSlide % slides.length;
  }

  return targetIndex;
}
