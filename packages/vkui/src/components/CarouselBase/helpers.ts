import { getRequiredValueByKey } from '../../helpers/getValueByKey';
import { type AlignType } from '../../types';
import { SLIDE_THRESHOLD } from './constants';
import {
  type GallerySlidesState,
  type LayoutState,
  type LoopPoint,
  type SlidesManagerState,
} from './types';

export const revertRtlValue = (n: number, isRtl: boolean) => {
  return isRtl ? -n : n;
};

export const isBigger = (a: number, b: number, isRtl: boolean) => (isRtl ? a < b : a > b);
export const isBiggerOrEqual = (a: number, b: number, isRtl: boolean) => (isRtl ? a <= b : a >= b);

export const isLower = (a: number, b: number, isRtl: boolean) => (isRtl ? a > b : a < b);
export const isLowerOrEqual = (a: number, b: number, isRtl: boolean) => (isRtl ? a >= b : a <= b);

/*
 * Считает отступ слоя галереи во время драга
 * Используется только для looped=false галереи
 * так как только у нее есть пределы по краям
 */
export const validateIndent = (
  slidesManager: SlidesManagerState,
  value: number,
  isRtl: boolean,
  bounded = true,
) => {
  const localMax = slidesManager.max ?? 0;
  const localMin = slidesManager.min ?? 0;

  const moreThanMax = isBigger(value, localMax, isRtl);
  if (moreThanMax) {
    if (bounded) {
      return localMax;
    } else {
      return localMax + Number((value - localMax) / 3);
    }
  }

  const lessThanMin = isLower(value, localMin, isRtl);
  if (lessThanMin) {
    if (bounded) {
      return localMin;
    } else {
      return localMin + Number((value - localMin) / 3);
    }
  }

  return value;
};

/*
 * Считает отступ слоя галереи
 */
export function calculateIndent({
  targetIndex,
  slidesManager,
  isCenter,
  looped = false,
  isRtl = false,
}: {
  targetIndex: number;
  slidesManager: SlidesManagerState;
  isCenter: boolean;
  looped: boolean;
  isRtl: boolean;
}): number {
  if (!slidesManager.slides.length) {
    return 0;
  }

  const targetSlide = slidesManager.slides[targetIndex];

  if (targetSlide) {
    const { coordX, width } = targetSlide;

    if (isCenter) {
      return revertRtlValue(slidesManager.containerWidth / 2 - coordX - width / 2, isRtl);
    }
    const indent = revertRtlValue(-1 * coordX, isRtl);
    return looped ? indent : validateIndent(slidesManager, indent, isRtl);
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
  isRtl: boolean,
): LoopPoint[] {
  const { contentSize, slides, snaps } = slidesManager;
  const isStartEdge = edge === 'start';
  const offset = isStartEdge ? -contentSize : contentSize;

  return indexes.map((index) => {
    const initial = revertRtlValue(isStartEdge ? 0 : -contentSize, isRtl);
    const altered = revertRtlValue(isStartEdge ? contentSize : 0, isRtl);

    const snap = revertRtlValue(snaps[index], isRtl);
    const firstSnap = revertRtlValue(snaps[0], isRtl);
    const loopPoint = revertRtlValue(
      isStartEdge
        ? snap + containerWidth + offset
        : snap - slides[index].width + offset - firstSnap,
      isRtl,
    );

    return {
      index,
      target: (currentLocation) =>
        isBiggerOrEqual(currentLocation, loopPoint, isRtl) ? initial : altered,
    };
  });
}

/**
 * Вычисляем "ключевые" точки, на которых должно происходить смещение слайдов
 */
export function getLoopPoints(
  slidesManager: SlidesManagerState,
  containerWidth: number,
  isRtl = false,
): LoopPoint[] {
  const { slides, snaps } = slidesManager;
  const firstSnap = revertRtlValue(snaps[0], isRtl);
  const startShiftedIndexes = getShiftedIndexes(-1, slides, firstSnap);
  const endShiftedIndexes = getShiftedIndexes(1, slides, containerWidth - firstSnap);

  return [
    ...calculateLoopPoints(endShiftedIndexes, 'start', slidesManager, containerWidth, isRtl),
    ...calculateLoopPoints(startShiftedIndexes, 'end', slidesManager, containerWidth, isRtl),
  ];
}

/*
 * Получает индекс слайда, к которому будет осуществлен переход
 */
export function getTargetIndex({
  slides,
  slideIndex,
  currentShiftX,
  currentShiftXDelta,
  looped = false,
  max = null,
  isRtl = false,
}: {
  slides: GallerySlidesState[];
  slideIndex: number;
  currentShiftX: number;
  currentShiftXDelta: number;
  looped: boolean;
  max?: number | null;
  isRtl?: boolean;
}): number {
  max = max ?? 0;
  // Инвертируем значения смещения для RTL режима
  const shift = revertRtlValue(currentShiftX + currentShiftXDelta - max, isRtl);

  // Инвертируем направление для RTL режима
  const direction = isLower(currentShiftXDelta, 0, isRtl) ? 1 : -1;

  // Находим ближайшую границу слайда к текущему отступу
  let targetIndex = slides.reduce((val: number, item: GallerySlidesState, index: number) => {
    // Инвертируем координаты для RTL режима
    const previousCoordX = slides[val].coordX;
    const currentCoordX = item.coordX;

    const previousValue = Math.abs(previousCoordX + shift);
    const currentValue = Math.abs(currentCoordX + shift);

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
  isRtl?: boolean;
  align: AlignType;
}

export const calcMin = ({
  containerWidth = 0,
  layerWidth = 0,
  slides = [],
  viewportOffsetWidth = 0,
  isFullyVisible,
  align,
  isRtl = false,
}: CalcMin): number => {
  if (align !== 'center' && isFullyVisible) {
    return 0;
  }
  const result = getRequiredValueByKey(align, {
    left: () => containerWidth - layerWidth,
    right: () => viewportOffsetWidth - layerWidth,
    center: () => {
      const { coordX, width } = slides[slides.length - 1];
      return containerWidth / 2 - coordX - width / 2;
    },
  })();
  return revertRtlValue(result, isRtl);
};

interface CalcMax extends Partial<LayoutState> {
  isRtl?: boolean;
  isCenterAlign: boolean;
}

export const calcMax = ({
  slides = [],
  containerWidth = 0,
  isCenterAlign,
  isRtl = false,
}: CalcMax): number => {
  if (isCenterAlign && slides.length) {
    const { width, coordX } = slides[0];
    const result = containerWidth / 2 - coordX - width / 2;
    return revertRtlValue(result, isRtl);
  }
  return 0;
};
