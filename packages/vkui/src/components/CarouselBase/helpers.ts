import { getValueByCheckedKey } from '../../helpers/getValueByCheckedKey';
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

const validateIndent = (slidesManager: SlidesManagerState, value: number, isRtl: boolean) => {
  const localMax = slidesManager.max ?? 0;
  const localMin = slidesManager.min ?? 0;

  const moreThanMax = (isRtl && value < localMax) || (!isRtl && value > localMax);
  const lessThanMin = (isRtl && value > localMin) || (!isRtl && value < localMin);

  if (moreThanMax) {
    return localMax;
  } else if (lessThanMin) {
    return localMin;
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
  isRtl = false,
): number {
  if (slidesManager.isFullyVisible || !slidesManager.slides.length) {
    return 0;
  }

  const targetSlide = slidesManager.slides[targetIndex];

  if (targetSlide) {
    const { coordX, width } = targetSlide;

    if (isCenter) {
      const adjustedCoordX = isRtl ? -1 * coordX : coordX;
      const result = slidesManager.containerWidth / 2 - adjustedCoordX - width / 2;
      return revertRtlValue(result, isRtl);
    }
    const indent = -1 * coordX;
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
        isRtl
          ? currentLocation <= loopPoint
            ? initial
            : altered
          : currentLocation >= loopPoint
            ? initial
            : altered,
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
export function getTargetIndex(
  slides: GallerySlidesState[],
  slideIndex: number,
  currentShiftX: number,
  currentShiftXDelta: number,
  looped = false,
  isRtl = false,
): number {
  // Инвертируем значения смещения для RTL режима
  const shift = isRtl ? -(currentShiftX + currentShiftXDelta) : currentShiftX + currentShiftXDelta;

  // Инвертируем направление для RTL режима
  const direction = isRtl ? (currentShiftXDelta > 0 ? 1 : -1) : currentShiftXDelta < 0 ? 1 : -1;

  // Находим ближайшую границу слайда к текущему отступу
  let targetIndex = slides.reduce((val: number, item: GallerySlidesState, index: number) => {
    // Инвертируем координаты для RTL режима
    const previousCoordX = revertRtlValue(slides[val].coordX, isRtl);
    const currentCoordX = revertRtlValue(item.coordX, isRtl);

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
  align,
  isRtl = false,
}: CalcMin): number => {
  const result = getValueByCheckedKey(align, {
    left: () => containerWidth - layerWidth,
    right: () => viewportOffsetWidth - layerWidth,
    center: () => {
      const { coordX, width } = slides[slides.length - 1];
      const adjustedCoordX = isRtl ? -coordX : coordX;
      return containerWidth / 2 - adjustedCoordX - width / 2;
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
