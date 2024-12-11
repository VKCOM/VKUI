import { calculateIndent, getLoopPoints, getShiftedIndexes, getTargetIndex } from './helpers';
import type { SlidesManagerState } from './types';

const createSlides = (slidesCount?: number, slideWidth?: number) => {
  return new Array(slidesCount || 0).fill(0).map((_, index) => ({
    coordX: index * (slideWidth || 100),
    width: slideWidth || 100,
  }));
};

const createSlidesManager = ({
  slidesCount,
  slideWidth,
  isFullyVisible,
  contentSize,
  viewportOffsetWidth,
  loopPoints,
  snaps,
  slides,
  containerWidth,
}: Partial<SlidesManagerState> & {
  slidesCount?: number;
  slideWidth?: number;
}): SlidesManagerState => {
  return {
    isFullyVisible: isFullyVisible || false,
    contentSize: contentSize || 1000,
    viewportOffsetWidth: viewportOffsetWidth || 300,
    loopPoints: loopPoints || [],
    snaps: snaps || [],
    slides:
      slides ||
      new Array(slidesCount || 0).fill(0).map((_, index) => ({
        coordX: index * (slideWidth || 100),
        width: slideWidth || 100,
      })),
    min: 0,
    max: 0,
    containerWidth: containerWidth || 0,
    layerWidth: 0,
  };
};

describe(calculateIndent, () => {
  it.each([
    {
      slidesManager: createSlidesManager({
        slidesCount: 5,
        slideWidth: 200,
      }),
      targetIndex: 4,
      isCenterAlign: false,
      result: -800,
    },
    {
      slidesManager: createSlidesManager({
        slidesCount: 5,
        slideWidth: 200,
        containerWidth: 200,
      }),
      targetIndex: 4,
      isCenterAlign: true,
      result: -800,
    },
    {
      slidesManager: createSlidesManager({
        slidesCount: 2,
        slideWidth: 200,
      }),
      targetIndex: 3,
      isCenterAlign: false,
      result: 0,
    },
    {
      slidesManager: createSlidesManager({
        isFullyVisible: true,
      }),
      targetIndex: 3,
      isCenterAlign: false,
      result: 0,
    },
    {
      slidesManager: createSlidesManager({
        isFullyVisible: false,
        slides: [],
      }),
      targetIndex: 3,
      isCenterAlign: false,
      result: 0,
    },
  ])(
    'should return $result when targetIndex $targetIndex and isCenterWithCustomWidth $isCenterWithCustomWidth',
    ({ slidesManager, result, isCenterAlign, targetIndex }) => {
      expect(calculateIndent(targetIndex, slidesManager, isCenterAlign, true)).toBe(result);
    },
  );
});

describe(getShiftedIndexes, () => {
  it.each([
    {
      direction: 1 as const,
      slides: createSlides(4, 200),
      availableWidth: 600,
      result: [0, 1, 2],
    },
    {
      direction: -1 as const,
      slides: createSlides(4, 200),
      availableWidth: 600,
      result: [3, 2, 1],
    },
  ])(
    'should return $result with direction $direction, availableWidth $availableWidth',
    ({ direction, slides, availableWidth, result }) => {
      expect(getShiftedIndexes(direction, slides, availableWidth)).toEqual(result);
    },
  );
});

describe(getLoopPoints, () => {
  it.each([
    {
      slidesManager: createSlidesManager({
        slidesCount: 5,
        slideWidth: 200,
        viewportOffsetWidth: 200,
        snaps: [0, -200, -400, -600, -800, -1000],
        contentSize: 1000,
      }),
      containerWidth: 220,
      result: [0, 0],
    },
    {
      slidesManager: createSlidesManager({
        slidesCount: 5,
        slideWidth: 200,
        viewportOffsetWidth: 200,
        snaps: [400, 200, 0, -200, -400, -600],
        contentSize: 1000,
      }),
      containerWidth: 220,
      result: [-1000, -1000],
    },
  ])(
    'should return correct result $result with containerWidth $containerWidth',
    ({ slidesManager, result, containerWidth }) => {
      expect(
        getLoopPoints(slidesManager, containerWidth).map(({ target }) => {
          return target(1000);
        }),
      ).toEqual(result);
    },
  );
});

describe(getTargetIndex, () => {
  it.each([
    {
      slides: createSlides(5, 200),
      slideIndex: 0,
      currentShiftX: 0,
      currentShiftXDelta: -500,
      resultIndex: 3,
    },
    {
      slides: createSlides(5, 200),
      slideIndex: 3,
      currentShiftX: 0,
      currentShiftXDelta: 500,
      resultIndex: 0,
    },
    {
      slides: createSlides(5, 200),
      slideIndex: 0,
      currentShiftX: 0,
      currentShiftXDelta: 500,
      resultIndex: 4,
    },
    {
      slides: createSlides(5, 200),
      slideIndex: 1,
      currentShiftX: 0,
      currentShiftXDelta: -250,
      resultIndex: 2,
    },
    {
      slides: createSlides(5, 500),
      slideIndex: 0,
      currentShiftX: 0,
      currentShiftXDelta: -25,
      resultIndex: 0,
    },
  ])(
    'should return $resultIndex with slideIndex $slideIndex, currentShiftX $currentShiftX, currentShiftXDelta $currentShiftXDelta',
    ({ slides, slideIndex, currentShiftX, currentShiftXDelta, resultIndex }) => {
      expect(getTargetIndex(slides, slideIndex, currentShiftX, currentShiftXDelta, true)).toBe(
        resultIndex,
      );
    },
  );
});
