import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import type { AlignType } from '../../types';
import { ANIMATION_DURATION } from '../BaseGallery/CarouselBase/constants';
import { Gallery } from './Gallery';
import styles from '../BaseGallery/BaseGallery.module.css';

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
  ['data-testid']: string;
}) => (
  <div style={{ fontSize: '72px', width }} ref={rest.getRef} data-testid={rest['data-testid']}>
    {children}
  </div>
);

const checkActiveSlide = (container: HTMLElement, slideIndex: number) => {
  const bullets = Array.from(container.getElementsByClassName(styles.bullet));
  expect(bullets.indexOf(container.getElementsByClassName(styles.bulletActive)[0])).toBe(
    slideIndex,
  );
};

const checkTransformX = (value: string, expectedX: number) => {
  const match = value.match(/\((-?\d+(px)?)[,)]/);
  expect(match?.[1] && parseInt(match[1])).toEqual(expectedX);
};

const setup = ({
  defaultSlideIndex,
  slideWidth,
  looped,
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
}: {
  defaultSlideIndex: number;
  looped: boolean;
  slideWidth: number;
  isCustomSlideWidth?: boolean;
  containerWidth: number;
  viewPortWidth: number;
  numberOfSlides?: number;
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
      slideWidth={isCustomSlideWidth ? 'custom' : undefined}
      getRootRef={mockContainerData}
      getRef={mockViewportData}
    >
      {Array.from({ length: numberOfSlides }).map((_v, index) => (
        <Slide
          key={index}
          data-testid={`slide-${index + 1}`}
          getRef={(e: HTMLDivElement) => mockSlideData(e, index)}
        >
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
      const {
        component: { container },
        rerender,
      } = mockedData;

      checkActiveSlide(container, 1);

      const [leftArrow, rightArrow] = Array.from(container.getElementsByClassName(styles.arrow));
      fireEvent.click(rightArrow);

      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2]]);

      rerender({ slideIndex: 2 });
      checkActiveSlide(container, 2);
      checkTransformX(mockedData.layerTransform, -400);

      fireEvent.click(leftArrow);

      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2], [1]]);

      rerender({ slideIndex: 1 });
      checkActiveSlide(container, 1);
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
      const {
        component: { container },
      } = mockedData;

      checkActiveSlide(container, 0);

      simulateDrag(mockedData.viewPort, [2, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledTimes(0);

      if (looped) {
        checkTransformX(mockedData.layerTransform, 0);
        expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      } else {
        expect(mockedData.layerTransform).toBeFalsy();
        expect(mockedData.getSlideMockData(0).transform).toBeFalsy();
      }
    });

    it('should resize when window resize', () => {
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
      const {
        component: { container },
        rerender,
      } = mockedData;

      checkActiveSlide(container, 0);

      simulateDrag(mockedData.viewPort, [150, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1);
      rerender({ slideIndex: 1 });

      checkTransformX(mockedData.layerTransform, -180);
      checkActiveSlide(container, 1);

      simulateDrag(mockedData.viewPort, [0, 150]);

      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange.mock.calls).toEqual([[1], [0]]);
      rerender({ slideIndex: 0 });

      checkTransformX(mockedData.layerTransform, 0);
      checkActiveSlide(container, 0);
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
      const {
        component: { container },
      } = mockedData;

      checkActiveSlide(container, 0);

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
      const {
        component: { container },
      } = mockedData;

      checkActiveSlide(container, 0);

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
      const {
        component: { container },
        rerender,
      } = mockedData;

      checkActiveSlide(container, 4);

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
      const {
        component: { container },
        rerender,
      } = mockedData;

      checkActiveSlide(container, 0);

      const [leftArrow, rightArrow] = Array.from(container.getElementsByClassName(styles.arrow));
      fireEvent.click(leftArrow);

      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[4]]);

      rerender({ slideIndex: 4 });
      checkActiveSlide(container, 4);
      checkTransformX(mockedData.layerTransform, -800);

      fireEvent.click(rightArrow);

      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[4], [0]]);

      rerender({ slideIndex: 0 });
      checkActiveSlide(container, 0);
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
      const {
        component: { container },
        rerender,
      } = mockedData;

      checkActiveSlide(container, 0);

      simulateDrag(mockedData.viewPort, [0, 150]);

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(4);
      rerender({ slideIndex: 4 });

      checkTransformX(mockedData.layerTransform, -710);
      checkTransformX(mockedData.getSlideMockData(0).transform, 900);
      checkActiveSlide(container, 4);

      simulateDrag(mockedData.viewPort, [150, 0]);

      expect(onDragStart).toHaveBeenCalledTimes(2);
      expect(onDragEnd).toHaveBeenCalledTimes(2);
      expect(onChange.mock.calls).toEqual([[4], [0]]);
      rerender({ slideIndex: 0 });

      checkTransformX(mockedData.layerTransform, 10);
      checkTransformX(mockedData.getSlideMockData(0).transform, 0);
      checkActiveSlide(container, 0);
    });

    it('check dev error when slides width incorrect', () => {
      process.env.NODE_ENV = 'development';
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
      process.env.NODE_ENV = 'test';
    });
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
      defaultSlideIndex: 2,
      slideWidth: 180,
      containerWidth: 300,
      viewPortWidth: 300,
      align: 'center',
      looped: false,
      onDragStart,
      onDragEnd,
      onChange,
    });
    const {
      component: { container },
      rerender,
    } = mockedData;

    checkActiveSlide(container, 1);
    expect(Array.from(container.getElementsByClassName(styles.arrow))).toHaveLength(1);

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

    rerender({ slideIndex: 2 });

    expect(Array.from(container.getElementsByClassName(styles.arrow))).toHaveLength(1);

    simulateDrag(mockedData.viewPort, [150, 0]);

    expect(onDragStart).toHaveBeenCalledTimes(1);
    expect(onDragEnd).toHaveBeenCalledTimes(1);

    // слайды полностью помещаются, поэтому мы отключаем drag и не показываем стрелочки
    mockedData.containerWidth = 540;
    mockedData.viewPortWidth = 540;
    onDragStart.mockClear();
    onDragEnd.mockClear();

    rerender({ slideIndex: 2 });

    expect(Array.from(container.getElementsByClassName(styles.arrow))).toHaveLength(0);

    simulateDrag(mockedData.viewPort, [150, 0]);

    expect(onDragStart).not.toHaveBeenCalled();
    expect(onDragEnd).not.toHaveBeenCalled();
  });
});
