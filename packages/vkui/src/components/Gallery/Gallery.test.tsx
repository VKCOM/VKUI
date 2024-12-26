import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, setNodeEnv } from '../../testing/utils';
import type { AlignType } from '../../types';
import { ANIMATION_DURATION } from '../CarouselBase/constants';
import { revertRtlValue } from '../CarouselBase/helpers';
import { type BaseGalleryProps } from '../CarouselBase/types';
import { Gallery } from './Gallery';

const mockRAF = () => {
  let lastTime = 0;

  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((fn) => {
    lastTime = lastTime + ANIMATION_DURATION;
    fn(lastTime);
    return lastTime;
  });
};

const mockTime = () => {
  const mockDate = new Date(2024, 7, 5);
  let time = mockDate.getTime();
  jest.spyOn(window, 'Date').mockImplementation(() => mockDate);
  Date.now = jest.fn(() => {
    const newTime = time + 1000;
    time = newTime;
    return newTime;
  });
};

const simulateDrag = (element: HTMLDivElement, points: number[]) => {
  fireEvent.mouseDown(element, {
    clientX: points[0],
  });
  points.slice(1).forEach((point) => {
    fireEvent.mouseMove(element, {
      clientX: point,
    });
  });
  fireEvent.mouseUp(element);
};

const Slide = ({
  children,
  width = 200,
  ...rest
}: {
  children: React.ReactNode;
  width?: number;
  getRef: React.Ref<HTMLDivElement>;
}) => (
  <div style={{ fontSize: '72px', width }} ref={rest.getRef}>
    {children}
  </div>
);

const checkActiveSlide = (slideIndex: number) => {
  expect(screen.queryByTestId(`bullet-${slideIndex}-active`)).toBeTruthy();
};

const checkTransformX = (value: string, expectedX: number) => {
  const match = value.match(/\((-?\d+(px)?)[,)]/);
  expect(match?.[1] && parseInt(match[1])).toEqual(expectedX);
};

const getArrows = (): HTMLElement[] => {
  return [screen.queryByTestId('prev-arrow'), screen.queryByTestId('next-arrow')].filter(
    Boolean,
  ) as HTMLElement[];
};

const setup = ({
  defaultSlideIndex,
  slideWidth,
  looped,
  resizeSource = 'window',
  containerWidth: defaultContainerWidth,
  isCustomSlideWidth = false,
  viewPortWidth: defaultViewPortWidth,
  align,
  onChange,
  onNext,
  onPrev,
  onDragStart,
  onDragEnd,
  numberOfSlides = 5,
  isRtl = false,
}: {
  defaultSlideIndex: number;
  looped: boolean;
  slideWidth: number;
  isCustomSlideWidth?: boolean;
  containerWidth: number;
  viewPortWidth: number;
  numberOfSlides?: number;
  resizeSource?: BaseGalleryProps['resizeSource'];
  align?: AlignType;
  onChange: VoidFunction;
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
  onDragStart?: VoidFunction;
  onDragEnd?: VoidFunction;
  isRtl?: boolean;
}) => {
  mockRAF();
  let slideDataByIndexMap: Record<number, any> = {};
  let layerTransform = '';
  let viewPort: HTMLDivElement;
  let containerWidth = defaultContainerWidth;
  let viewPortWidth = defaultViewPortWidth;

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
    jest
      .spyOn(element.parentElement!, 'offsetLeft', 'get')
      .mockReturnValue(revertRtlValue(slideWidth * index, isRtl));

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
    <Gallery
      looped={looped}
      showArrows
      align={align}
      slideIndex={slideIndex}
      onChange={onChange}
      onNextClick={onNext}
      onPrevClick={onPrev}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      bullets="light"
      resizeSource={resizeSource}
      slideWidth={isCustomSlideWidth ? 'custom' : undefined}
      getRootRef={mockContainerData}
      getRef={mockViewportData}
      slideTestId={(index) => `slide-${index + 1}`}
      bulletTestId={(index, active) => (active ? `bullet-${index}-active` : `bullet-${index}`)}
      prevArrowTestId="prev-arrow"
      nextArrowTestId="next-arrow"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {Array.from({ length: numberOfSlides }).map((_v, index) => (
        <Slide key={index} getRef={(e: HTMLDivElement) => mockSlideData(e, index)}>
          {index + 1}
        </Slide>
      ))}
    </Gallery>
  );

  const component = render(<Fixture slideIndex={defaultSlideIndex} />);

  const rerender = ({ slideIndex }: { slideIndex: number }) => {
    component.rerender(<Fixture slideIndex={slideIndex} />);
  };

  return {
    component,
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
    set viewPortWidth(newWidth: number) {
      viewPortWidth = newWidth;
    },
  };
};

describe('Gallery', () => {
  baselineComponent(Gallery);
  describe('handles slide count', () => {
    it('prevents slideIndex outside slide count', () => {
      let index;
      render(
        <Gallery onChange={(v) => (index = v)} slideIndex={9}>
          <div />
          <div />
        </Gallery>,
      );
      expect(index).toBe(1);
      render(
        <Gallery onChange={(v) => (index = v)} slideIndex={-9}>
          <div />
          <div />
        </Gallery>,
      );
      expect(index).toBe(0);
    });
    it('handles dynamic slide count', () => {
      let index;
      const setIndex = (v: number) => (index = v);
      const { rerender } = render(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
          <div />
        </Gallery>,
      );
      rerender(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
        </Gallery>,
      );
      expect(index).toBe(0);
    });
    it('keeps slideIndex when 0 slides', () => {
      const setIndex = jest.fn();
      render(<Gallery onChange={setIndex} slideIndex={10} />);
      expect(setIndex).not.toHaveBeenCalled();
    });

    it('check auto play in controlled component', () => {
      jest.useFakeTimers();
      let index;
      const setIndex = (v: number) => (index = v);
      render(
        <Gallery onChange={setIndex} slideIndex={0} timeout={100}>
          <div />
          <div />
        </Gallery>,
      );
      jest.runAllTimers();
      expect(index).toBe(1);
    });

    it('check auto play in uncontrolled component', () => {
      jest.useFakeTimers();
      let index;
      const setIndex = (v: number) => (index = v);
      render(
        <Gallery onChange={setIndex} timeout={100}>
          <div />
          <div />
        </Gallery>,
      );
      jest.runAllTimers();
      expect(index).toBe(1);
    });
  });

  describe.each([true, false])('check correct working gallery with lopped %s', (looped) => {
    it('check correct navigation by arrows clicks', () => {
      const onNext = jest.fn();
      const onPrev = jest.fn();
      const onChange = jest.fn();

      const mockedData = setup({
        looped,
        defaultSlideIndex: 1,
        slideWidth: 200,
        containerWidth: 200,
        viewPortWidth: 200,
        onPrev,
        onNext,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(1);

      const [leftArrow, rightArrow] = getArrows();
      fireEvent.click(rightArrow);

      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2]]);

      rerender({ slideIndex: 2 });
      checkActiveSlide(2);
      checkTransformX(mockedData.layerTransform, -400);

      fireEvent.click(leftArrow);

      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2], [1]]);

      rerender({ slideIndex: 1 });
      checkActiveSlide(1);
      checkTransformX(mockedData.layerTransform, -200);
    });

    it('should not change slide when slide too small', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        onDragStart,
        onDragEnd,
        onChange,
      });

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [2, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledTimes(0);

      checkTransformX(mockedData.layerTransform, 0);
      if (looped) {
        expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      } else {
        expect(mockedData.getSlideMockData(0).transform).toBeFalsy();
      }
    });

    it('should resize when container resizes', () => {
      const onChange = jest.fn();

      const mockedData = setup({
        looped,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        align: 'center',
        onChange,
      });

      if (looped) {
        expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
        expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      }

      mockedData.containerWidth = 250;

      fireEvent.resize(window);

      if (looped) {
        expect(mockedData.layerTransform).toBe('translate3d(35px, 0, 0)');
        expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      }
    });
  });

  describe('check not looped gallery navigation working', () => {
    beforeEach(() => mockTime());
    afterEach(() => jest.restoreAllMocks());
    it('check correct navigation by dragging', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: false,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        align: 'center',
        isCustomSlideWidth: true,
        onDragStart,
        onDragEnd,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [150, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1);
      rerender({ slideIndex: 1 });

      checkTransformX(mockedData.layerTransform, -170);
      checkActiveSlide(1);

      simulateDrag(mockedData.viewPort, [0, 150]);

      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange.mock.calls).toEqual([[1], [0]]);
      rerender({ slideIndex: 0 });

      checkTransformX(mockedData.layerTransform, 10);
      checkActiveSlide(0);
    });

    it('check correct navigation by dragging with align right', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: false,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        align: 'right',
        isCustomSlideWidth: true,
        onDragStart,
        onDragEnd,
        onChange,
      });

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [150, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1);
    });

    it('check not change slide with too small gesture slide', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: false,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        onDragStart,
        onDragEnd,
        onChange,
      });

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [10, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1);
    });

    it('check max and min restrictions', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: false,
        defaultSlideIndex: 4,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        onDragStart,
        onDragEnd,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(4);

      simulateDrag(mockedData.viewPort, [200, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledTimes(0);

      rerender({ slideIndex: 0 });

      simulateDrag(mockedData.viewPort, [0, 200]);
      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('check looped gallery navigation working', () => {
    it('check correct reverse navigation by arrows clicks', () => {
      const onNext = jest.fn();
      const onPrev = jest.fn();
      const onChange = jest.fn();

      const mockedData = setup({
        looped: true,
        defaultSlideIndex: 0,
        slideWidth: 200,
        containerWidth: 200,
        viewPortWidth: 200,
        onPrev,
        onNext,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(0);

      const [leftArrow, rightArrow] = getArrows();
      fireEvent.click(leftArrow);

      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[4]]);

      rerender({ slideIndex: 4 });
      checkActiveSlide(4);
      checkTransformX(mockedData.layerTransform, -800);

      fireEvent.click(rightArrow);

      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[4], [0]]);

      rerender({ slideIndex: 0 });
      checkActiveSlide(0);
      checkTransformX(mockedData.layerTransform, 0);
    });

    it('check correct navigation by dragging', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: true,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        align: 'center',
        onDragStart,
        onDragEnd,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [0, 150]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(4);
      rerender({ slideIndex: 4 });

      checkTransformX(mockedData.layerTransform, -710);
      checkTransformX(mockedData.getSlideMockData(0).transform, 900);
      checkActiveSlide(4);

      simulateDrag(mockedData.viewPort, [150, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange.mock.calls).toEqual([[4], [0]]);
      rerender({ slideIndex: 0 });

      checkTransformX(mockedData.layerTransform, 10);
      checkTransformX(mockedData.getSlideMockData(0).transform, 0);
      checkActiveSlide(0);
    });

    describe('DEV errors', () => {
      beforeEach(() => setNodeEnv('development'));
      afterEach(() => setNodeEnv('test'));

      it('check dev error when slides width incorrect', () => {
        const onChange = jest.fn();
        const warn = jest.spyOn(console, 'warn').mockImplementation(noop);

        setup({
          looped: true,
          defaultSlideIndex: 0,
          slideWidth: 40,
          containerWidth: 200,
          viewPortWidth: 200,
          onChange,
        });

        expect(warn).toHaveBeenCalledWith(
          '%c[VKUI/Gallery] Ширины слайдов недостаточно для корректной работы свойства "looped". Пожалуйста, сделайте её больше.',
          undefined,
        );
        warn.mockRestore();
      });
    });
  });

  const mockResizeObserver = () => {
    const callbacks = new Set<ResizeObserverCallback>();

    class MockResizeObserver implements ResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        callbacks.add(callback);
      }

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      observe() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      unobserve() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      disconnect() {}
    }

    const originalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = MockResizeObserver;

    return {
      triggerResize: () => {
        callbacks.forEach((callback) => {
          callback([], {} as unknown as ResizeObserver);
        });
      },
      restore: () => {
        window.ResizeObserver = originalResizeObserver;
      },
    };
  };

  it('check recalculate slides positions when resize element with resizeSource="element"', () => {
    const { triggerResize, restore } = mockResizeObserver();
    const onChange = jest.fn();

    const mockedData = setup({
      looped: true,
      resizeSource: 'element',
      defaultSlideIndex: 0,
      slideWidth: 180,
      containerWidth: 200,
      viewPortWidth: 180,
      align: 'center',
      onChange,
    });

    expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');

    mockedData.containerWidth = 250;

    triggerResize();

    expect(mockedData.layerTransform).toBe('translate3d(35px, 0, 0)');
    expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
    restore();
  });

  it('checks gallery arrows and navigation in center alignment', () => {
    const onChange = jest.fn();
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();

    // в контейнере недостаточно места для
    // двух слайдов с выравниванием по центру
    // поэтому мы показываем кнопки и позволяем drag
    const mockedData = setup({
      numberOfSlides: 2,
      defaultSlideIndex: 1,
      slideWidth: 180,
      containerWidth: 300,
      viewPortWidth: 300,
      align: 'center',
      looped: false,
      onDragStart,
      onDragEnd,
      onChange,
    });
    const { rerender } = mockedData;

    checkActiveSlide(1);
    expect(getArrows()).toHaveLength(1);

    simulateDrag(mockedData.viewPort, [150, 0]);

    expect(onDragStart).toHaveBeenCalledTimes(1);
    expect(onDragEnd).toHaveBeenCalledTimes(1);

    // это пограничное состояние при котором слайды ещё
    // не помещаются в контейнер,
    // при ширине контейнера 540 они уже будут влезать
    mockedData.containerWidth = 539;
    mockedData.viewPortWidth = 539;
    onDragStart.mockClear();
    onDragEnd.mockClear();

    rerender({ slideIndex: 1 });

    expect(getArrows()).toHaveLength(1);

    simulateDrag(mockedData.viewPort, [150, 0]);

    expect(onDragStart).toHaveBeenCalledTimes(1);
    expect(onDragEnd).toHaveBeenCalledTimes(1);

    // слайды полностью помещаются, поэтому мы отключаем drag и не показываем стрелочки
    mockedData.containerWidth = 540;
    mockedData.viewPortWidth = 540;
    onDragStart.mockClear();
    onDragEnd.mockClear();
    fireEvent.resize(window);

    rerender({ slideIndex: 1 });

    expect(getArrows()).toHaveLength(0);

    simulateDrag(mockedData.viewPort, [150, 0]);

    expect(onDragStart).not.toHaveBeenCalled();
    expect(onDragEnd).not.toHaveBeenCalled();
  });

  describe('check correct working with rtl direction', () => {
    const originalGetComputedStyle = window.getComputedStyle;

    let getComputedStyleMock: ReturnType<typeof jest.spyOn> | null = null;
    beforeEach(() => {
      /**
       * Мокаем получение direction
       */
      getComputedStyleMock = jest.spyOn(window, 'getComputedStyle').mockImplementation((e) => {
        return {
          ...originalGetComputedStyle(e),
          direction: 'rtl',
        };
      });
    });
    afterEach(() => {
      getComputedStyleMock.mockRestore();
    });

    it('check max and min restrictions', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: false,
        isRtl: true,
        defaultSlideIndex: 4,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        onDragStart,
        onDragEnd,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(4);

      simulateDrag(mockedData.viewPort, [0, 200]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledTimes(0);

      rerender({ slideIndex: 0 });

      simulateDrag(mockedData.viewPort, [200, 0]);
      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledTimes(0);
    });

    it('check correct navigation by arrows clicks in RTL', () => {
      const onNext = jest.fn();
      const onPrev = jest.fn();
      const onChange = jest.fn();

      const mockedData = setup({
        looped: true,
        isRtl: true,
        defaultSlideIndex: 1,
        slideWidth: 200,
        containerWidth: 200,
        viewPortWidth: 200,
        onPrev,
        onNext,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(1);

      const [prevArrow, nextArrow] = getArrows();
      fireEvent.click(nextArrow);

      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2]]);

      rerender({ slideIndex: 2 });
      checkActiveSlide(2);
      checkTransformX(mockedData.layerTransform, 400);

      fireEvent.click(prevArrow);

      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2], [1]]);

      rerender({ slideIndex: 1 });
      checkActiveSlide(1);
      checkTransformX(mockedData.layerTransform, 200);
    });

    it('check correct navigation by dragging', () => {
      const onChange = jest.fn();
      const onDragStart = jest.fn();
      const onDragEnd = jest.fn();

      const mockedData = setup({
        looped: true,
        isRtl: true,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        align: 'center',
        onDragStart,
        onDragEnd,
        onChange,
      });
      const { rerender } = mockedData;

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [150, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(4);
      rerender({ slideIndex: 4 });

      checkTransformX(mockedData.layerTransform, 710);
      checkTransformX(mockedData.getSlideMockData(0).transform, -900);
      checkActiveSlide(4);

      simulateDrag(mockedData.viewPort, [0, 150]);

      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange.mock.calls).toEqual([[4], [0]]);
      rerender({ slideIndex: 0 });

      checkTransformX(mockedData.layerTransform, 890);
      checkTransformX(mockedData.getSlideMockData(0).transform, -900);
      checkActiveSlide(0);
    });
  });
});
