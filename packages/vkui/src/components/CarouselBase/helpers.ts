import { type AlignType } from '../../types';
import { SLIDE_THRESHOLD } from './constants';
import {
  type GallerySlidesState,
  type LayoutState,
  type LoopPoint,
  type SlidesManagerState,
} from './types';

const validateIndent = (slidesManager: SlidesManagerState, value: number) => {
  const localMax = slidesManager.max ?? 0;
  const localMin = slidesManager.min ?? 0;

  if (value < localMin) {
    return localMin;
  } else if (value > localMax) {
    return localMax;
  }

  return value;
};

/*
 * Считает отступ слоя галереи
 */
export function calculateIndent(
  targetIndex: number,
  slidesManager: SlidesManagerState,
  isCenter: boolean,
  looped = false,
): number {
  if (!slidesManager.slides.length) {
    return 0;
  }

  const targetSlide = slidesManager.slides[targetIndex];

  if (targetSlide) {
    const { coordX, width } = targetSlide;

    if (isCenter) {
      return slidesManager.containerWidth / 2 - coordX - width / 2;
    }
    const indent = -1 * coordX;
    return looped ? indent : validateIndent(slidesManager, indent);
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
): number[] {
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

function calculateLoopPoints(
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
export function getLoopPoints(
  slidesManager: SlidesManagerState,
  containerWidth: number,
): LoopPoint[] {
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
  looped = false,
): number {
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
    if (!looped) {
      return direction < 0 ? Math.max(targetIndex, 0) : Math.min(targetIndex, slides.length - 1);
    }

    return direction < 0
      ? (targetSlide + slides.length) % slides.length
      : targetSlide % slides.length;
  }

  return targetIndex;
}

interface CalcMin extends Partial<LayoutState> {
  align: AlignType;
}

export const calcMin = ({
  containerWidth = 0,
  layerWidth = 0,
  slides = [],
  viewportOffsetWidth = 0,
  isFullyVisible,
  align,
}: CalcMin): number => {
  switch (align) {
    case 'left':
      if (isFullyVisible) {
        return 0;
      }
      return containerWidth - layerWidth;
    case 'right':
      if (isFullyVisible) {
        return 0;
      }
      return viewportOffsetWidth - layerWidth;
    case 'center':
      const { coordX, width } = slides[slides.length - 1];
      return containerWidth / 2 - coordX - width / 2;
    default:
      throw new Error(`unknown align ${align}`);
  }
};

interface CalcMax extends Partial<LayoutState> {
  isCenterAlign: boolean;
}

export const calcMax = ({ slides = [], containerWidth = 0, isCenterAlign }: CalcMax): number => {
  if (isCenterAlign && slides.length) {
    const { width, coordX } = slides[0];
    return containerWidth / 2 - coordX - width / 2;
  }
  return 0;
};
