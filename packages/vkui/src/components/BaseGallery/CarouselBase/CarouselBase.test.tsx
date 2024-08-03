import * as React from 'react';
import { fireEvent, render, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { AlignType } from '../../../types';
import { CarouselBase } from './CarouselBase';
import { ANIMATION_DURATION } from './constants';
import { calculateIndent, getLoopPoints, getShiftedIndexes, getTargetIndex } from './helpers';
import { useSlideAnimation } from './hooks';
import { SlidesManagerState } from './types';
import styles from '../BaseGallery.module.css';

const mockRAF = () => {
  let lastTime = 0;

  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((fn) => {
    lastTime = lastTime + ANIMATION_DURATION;
    fn(lastTime);
    return lastTime;
  });
};

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
  };
};

const Slide = ({
  children,
  width = 200,
  ...rest
}: {
  children: React.ReactNode;
  width?: number;
  getRef: React.Ref<HTMLDivElement>;
  ['data-testid']: string;
}) => (
  <div style={{ fontSize: '72px', width }} ref={rest.getRef} data-testid={rest['data-testid']}>
    {children}
  </div>
);

const checkActiveSlide = (container: HTMLElement, slideIndex: number) => {
  const bullets = Array.from(container.getElementsByClassName(styles['BaseGallery__bullet']));
  expect(
    bullets.indexOf(container.getElementsByClassName(styles['BaseGallery__bullet--active'])[0]),
  ).toBe(slideIndex);
};

const mockData = ({
  slideWidth,
  containerWidth: defaultContainerWidth,
  viewPortWidth,
  align,
  onChange,
  onNext,
  onPrev,
  onDragStart,
  onDragEnd,
}: {
  slideWidth: number;
  containerWidth: number;
  viewPortWidth: number;
  align?: AlignType;
  onChange: VoidFunction;
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
  onDragStart?: VoidFunction;
  onDragEnd?: VoidFunction;
}) => {
  mockRAF();
  let slideDataByIndexMap: Record<number, any> = {};
  let layerTransform = '';
  let viewPort: HTMLDivElement;
  let containerWidth = defaultContainerWidth;

  const mockContainerData = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }
    jest.spyOn(element, 'offsetWidth', 'get').mockImplementation(() => containerWidth);
  };

  const mockLayerData = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }
    jest
      .spyOn(element.style, 'transform', 'set')
      .mockImplementation((newTransform) => (layerTransform = newTransform));
  };

  const mockViewportData = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }
    jest.spyOn(element, 'offsetWidth', 'get').mockReturnValue(viewPortWidth);
    viewPort = element;

    mockLayerData(element.firstElementChild as HTMLDivElement);
  };

  const mockSlideData = (element: HTMLElement, index: number) => {
    if (!element) {
      return;
    }
    jest.spyOn(element.parentElement!, 'offsetWidth', 'get').mockReturnValue(slideWidth);
    jest.spyOn(element.parentElement!, 'offsetLeft', 'get').mockReturnValue(slideWidth * index);

    let transform = '';
    jest
      .spyOn(element.parentElement!.style, 'transform', 'set')
      .mockImplementation((newTransform) => (transform = newTransform));

    slideDataByIndexMap[index] = {
      get transform() {
        return transform;
      },
    };
  };

  const Fixture = ({ slideIndex }: { slideIndex: number }) => (
    <CarouselBase
      showArrows
      align={align}
      slideIndex={slideIndex}
      onChange={onChange}
      onNextClick={onNext}
      onPrevClick={onPrev}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      bullets="light"
      getRootRef={mockContainerData}
      getRef={mockViewportData}
    >
      <Slide data-testid="slide-1" getRef={(e: HTMLDivElement) => mockSlideData(e, 0)}>
        1
      </Slide>
      <Slide data-testid="slide-2" getRef={(e: HTMLDivElement) => mockSlideData(e, 1)}>
        2
      </Slide>
      <Slide data-testid="slide-3" getRef={(e: HTMLDivElement) => mockSlideData(e, 2)}>
        3
      </Slide>
      <Slide data-testid="slide-4" getRef={(e: HTMLDivElement) => mockSlideData(e, 3)}>
        4
      </Slide>
      <Slide data-testid="slide-5" getRef={(e: HTMLDivElement) => mockSlideData(e, 4)}>
        5
      </Slide>
    </CarouselBase>
  );

  const { container, rerender: rerenderFn } = render(<Fixture slideIndex={0} />);

  const rerender = ({ slideIndex }: { slideIndex: number }) => {
    rerenderFn(<Fixture slideIndex={slideIndex} />);
  };

  return {
    container,
    rerender,
    get layerTransform() {
      return layerTransform;
    },
    get viewPort() {
      return viewPort;
    },
    getSlideMockData(index: number) {
      return slideDataByIndexMap[index];
    },
    set containerWidth(newWidth: number) {
      containerWidth = newWidth;
    },
  };
};

describe(CarouselBase, () => {
  it('check correct navigation by arrows clicks', () => {
    const onNext = jest.fn();
    const onPrev = jest.fn();
    const onChange = jest.fn();

    const mockedData = mockData({
      slideWidth: 200,
      containerWidth: 200,
      viewPortWidth: 200,
      onPrev,
      onNext,
      onChange,
    });
    const { container, rerender } = mockedData;

    checkActiveSlide(container, 0);

    const [leftArrow, rightArrow] = Array.from(
      container.getElementsByClassName(styles['BaseGallery__arrow']),
    );
    fireEvent.click(rightArrow);

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls).toEqual([[1]]);

    rerender({ slideIndex: 1 });
    checkActiveSlide(container, 1);
    expect(mockedData.layerTransform).toBe('translate3d(-200px, 0, 0)');
    fireEvent.click(leftArrow);

    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls).toEqual([[1], [0]]);

    rerender({ slideIndex: 0 });
    checkActiveSlide(container, 0);
    expect(mockedData.layerTransform).toBe('translate3d(0px, 0, 0)');

    fireEvent.click(leftArrow);

    expect(onPrev).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls).toEqual([[1], [0], [4]]);
    rerender({ slideIndex: 4 });
    checkActiveSlide(container, 4);
    expect(mockedData.layerTransform).toBe('translate3d(-800px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
  });

  it('check correct navigation by dragging', () => {
    const onChange = jest.fn();
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();

    const mockedData = mockData({
      slideWidth: 180,
      containerWidth: 200,
      viewPortWidth: 180,
      align: 'center',
      onDragStart,
      onDragEnd,
      onChange,
    });
    const { container, rerender } = mockedData;

    checkActiveSlide(container, 0);
    fireEvent.mouseDown(mockedData.viewPort, {
      clientX: 0,
    });
    fireEvent.mouseMove(mockedData.viewPort, {
      clientX: 150,
    });
    fireEvent.mouseUp(mockedData.viewPort);

    expect(onDragStart).toHaveBeenCalledTimes(1);
    expect(onDragEnd).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(4);
    rerender({ slideIndex: 4 });

    expect(mockedData.layerTransform).toBe('translate3d(-710px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(900px, 0, 0)');
    checkActiveSlide(container, 4);

    fireEvent.mouseDown(mockedData.viewPort, {
      clientX: 150,
    });
    fireEvent.mouseMove(mockedData.viewPort, {
      clientX: 0,
    });
    fireEvent.mouseUp(mockedData.viewPort);

    expect(onDragStart).toHaveBeenCalledTimes(2);
    expect(onDragEnd).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls).toEqual([[4], [0]]);
    rerender({ slideIndex: 0 });

    expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
    checkActiveSlide(container, 0);
  });

  it('should not change slide when slide too small', () => {
    const onChange = jest.fn();
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();

    const mockedData = mockData({
      slideWidth: 180,
      containerWidth: 200,
      viewPortWidth: 180,
      align: 'center',
      onDragStart,
      onDragEnd,
      onChange,
    });
    const { container } = mockedData;

    checkActiveSlide(container, 0);
    fireEvent.mouseDown(mockedData.viewPort, {
      clientX: 0,
    });
    fireEvent.mouseMove(mockedData.viewPort, {
      clientX: 2,
    });
    fireEvent.mouseUp(mockedData.viewPort);

    expect(onDragStart).toHaveBeenCalledTimes(1);
    expect(onDragEnd).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(0);

    expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
  });

  it('should resize when window resize', () => {
    const onChange = jest.fn();

    const mockedData = mockData({
      slideWidth: 180,
      containerWidth: 200,
      viewPortWidth: 180,
      align: 'center',
      onChange,
    });

    expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');

    mockedData.containerWidth = 250;

    fireEvent.resize(window);

    expect(mockedData.layerTransform).toBe('translate3d(35px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
  });

  it('check dev error when slides width incorrect', () => {
    process.env.NODE_ENV = 'development';
    const onChange = jest.fn();
    const warn = jest.spyOn(console, 'warn').mockImplementation(noop);

    mockData({
      slideWidth: 40,
      containerWidth: 200,
      viewPortWidth: 200,
      onChange,
    });

    expect(warn).toHaveBeenCalledWith(
      '%c[VKUI/Gallery] Ширины слайдов недостаточно для корректной работы свойства "looped". Пожалуйста, сделайте её больше."',
      undefined,
    );
    warn.mockRestore();
    process.env.NODE_ENV = 'test';
  });
});

describe(calculateIndent, () => {
  it.each([
    {
      slidesManager: createSlidesManager({
        slidesCount: 5,
        slideWidth: 200,
      }),
      targetIndex: 4,
      isCenterWithCustomWidth: false,
      result: -800,
    },
    {
      slidesManager: createSlidesManager({
        slidesCount: 5,
        slideWidth: 200,
      }),
      targetIndex: 4,
      isCenterWithCustomWidth: true,
      result: -750,
    },
    {
      slidesManager: createSlidesManager({
        slidesCount: 2,
        slideWidth: 200,
      }),
      targetIndex: 3,
      isCenterWithCustomWidth: false,
      result: 0,
    },
    {
      slidesManager: createSlidesManager({
        isFullyVisible: true,
      }),
      targetIndex: 3,
      isCenterWithCustomWidth: false,
      result: 0,
    },
    {
      slidesManager: createSlidesManager({
        isFullyVisible: false,
        slides: [],
      }),
      targetIndex: 3,
      isCenterWithCustomWidth: false,
      result: 0,
    },
  ])(
    'should return $result when slidesManager $slidesManager, targetIndex $targetIndex and isCenterWithCustomWidth $isCenterWithCustomWidth',
    ({ slidesManager, result, isCenterWithCustomWidth, targetIndex }) => {
      expect(calculateIndent(targetIndex, slidesManager, isCenterWithCustomWidth)).toBe(result);
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
    'should return $result with direction $direction, slides $slides, availableWidth $availableWidth',
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
    'should return correct result $result with slidesManager $slidesManager, containerWidth $containerWidth',
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
    'should return $resultIndex with slides $slides, slideIndex $slideIndex, currentShiftX $currentShiftX, currentShiftXDelta $currentShiftXDelta',
    ({ slides, slideIndex, currentShiftX, currentShiftXDelta, resultIndex }) => {
      expect(getTargetIndex(slides, slideIndex, currentShiftX, currentShiftXDelta)).toBe(
        resultIndex,
      );
    },
  );
});

describe(useSlideAnimation, () => {
  it('should call drawCallback when startAnimation', () => {
    mockRAF();
    const animationStub = jest.fn();
    const hookResult = renderHook(() => useSlideAnimation());
    hookResult.result.current.addToAnimationQueue(
      hookResult.result.current.getAnimateFunction(animationStub),
    );
    hookResult.result.current.startAnimation();
    expect(animationStub.mock.calls).toEqual([[0], [1]]);
  });
});
