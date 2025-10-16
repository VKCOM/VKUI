import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import {
  baselineComponent,
  fakeTimersForScope,
  setNodeEnv,
  userEvent,
  withFakeTimers,
} from '../../testing/utils';
import type { AlignType } from '../../types';
import { revertRtlValue } from '../CarouselBase/helpers';
import { type BaseGalleryProps } from '../CarouselBase/types';
import { DirectionProvider } from '../DirectionProvider/DirectionProvider';
import { Gallery, type GalleryProps } from './Gallery';

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
  onChange?: VoidFunction;
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
  onDragStart?: VoidFunction;
  onDragEnd?: VoidFunction;
  isRtl?: boolean;
}) => {
  let slideDataByIndexMap: Record<number, any> = {};
  let layerTransform = '';
  let viewPort: HTMLDivElement;
  let containerWidth = defaultContainerWidth;
  let viewPortWidth = defaultViewPortWidth;

  const mockContainerData = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }
    vi.spyOn(element, 'offsetWidth', 'get').mockImplementation(() => containerWidth);
  };

  const mockLayerData = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }
    vi.spyOn(element.style, 'transform', 'set').mockImplementation(
      (newTransform) => (layerTransform = newTransform),
    );

    vi.spyOn(element, 'offsetWidth', 'get').mockReturnValue(viewPortWidth);
  };

  const mockViewportData = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }
    vi.spyOn(element, 'offsetWidth', 'get').mockReturnValue(viewPortWidth);
    viewPort = element;

    mockLayerData(element.firstElementChild as HTMLDivElement);
  };

  const mockSlideData = (element: HTMLElement, index: number) => {
    if (!element) {
      return;
    }
    vi.spyOn(element.parentElement!, 'offsetWidth', 'get').mockReturnValue(slideWidth);
    vi.spyOn(element.parentElement!, 'offsetLeft', 'get').mockReturnValue(
      revertRtlValue(slideWidth * index, isRtl),
    );

    let transform = '';
    vi.spyOn(element.parentElement!.style, 'transform', 'set').mockImplementation(
      (newTransform) => (transform = newTransform),
    );

    slideDataByIndexMap[index] = {
      get transform() {
        return transform;
      },
    };
  };

  const Fixture = ({ slideIndex }: { slideIndex: number }) => (
    <DirectionProvider value={isRtl ? 'rtl' : 'ltr'}>
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
        arrowPrevLabel="prev-label"
        arrowNextLabel="next-label"
      >
        {Array.from({ length: numberOfSlides }).map((_v, index) => (
          <Slide key={index} getRef={(e: HTMLDivElement) => mockSlideData(e, index)}>
            {index + 1}
          </Slide>
        ))}
      </Gallery>
    </DirectionProvider>
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
    fakeTimersForScope(false);
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
    it('handles dynamic slide count', async () => {
      let index;
      const setIndex = (v: number) => (index = v);
      const { rerender } = render(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
          <div />
        </Gallery>,
      );
      await act(async () => {
        vi.runOnlyPendingTimers();
      });
      rerender(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
        </Gallery>,
      );
      await act(async () => {
        vi.runOnlyPendingTimers();
      });
      expect(index).toBe(0);
    });
    it('keeps slideIndex when 0 slides', () => {
      const setIndex = vi.fn();
      render(<Gallery onChange={setIndex} slideIndex={10} />);
      expect(setIndex).not.toHaveBeenCalled();
    });

    it('check auto play in controlled component', () => {
      let index;
      const setIndex = (v: number) => (index = v);
      render(
        <Gallery onChange={setIndex} slideIndex={0} timeout={100}>
          <div />
          <div />
        </Gallery>,
      );
      vi.runAllTimers();
      expect(index).toBe(1);
    });

    it('check auto play in uncontrolled component', () => {
      let index;
      const setIndex = (v: number) => (index = v);
      render(
        <Gallery onChange={setIndex} timeout={100}>
          <div />
          <div />
        </Gallery>,
      );
      act(vi.runAllTimers);
      expect(index).toBe(1);
    });
  });

  describe('check a11y', () => {
    it('check slide labels', () => {
      const onChange = vi.fn();
      const slideLabel: GalleryProps['slideLabel'] = (index, count) =>
        `Слайд ${index + 1} из ${count}`;

      render(
        <Gallery
          onChange={onChange}
          slideIndex={0}
          slideLabel={slideLabel}
          slideRoleDescription="Кастомный слайд"
        >
          <div />
          <div />
        </Gallery>,
      );
      const slides = screen.getAllByRole('group');
      expect(slides).toHaveLength(2);
      slides.forEach((slide, index) => {
        expect(slide).toHaveAttribute('aria-roledescription', 'Кастомный слайд');
        expect(slide).toHaveAttribute('aria-label', slideLabel(index, 2));
        expect(slide).toHaveAttribute('tabindex', '0');
      });
    });
  });

  it('check that scroll reset when using screen reader VoiceOver', () => {
    const onChange = vi.fn();

    let scrollLeft = 0;

    render(
      <Gallery
        onChange={onChange}
        slideIndex={0}
        data-testid="gallery"
        getRootRef={(element) => {
          if (!element) {
            return;
          }
          vi.spyOn(element, 'scrollLeft', 'get').mockImplementation(() => scrollLeft);
          vi.spyOn(element, 'scrollLeft', 'set').mockImplementation((newValue) => {
            scrollLeft = newValue;
          });
        }}
      >
        <div />
        <div />
      </Gallery>,
    );

    const root = screen.getByTestId('gallery');
    root.scrollLeft = 100;

    fireEvent.scroll(root);
    expect(root.scrollLeft).toBe(0);
  });

  describe.each([true, false])('check correct working gallery with lopped %s', (looped) => {
    fakeTimersForScope(false);
    it('check rendering one slide correct', () => {
      const mockedData = setup({
        looped,
        numberOfSlides: 1,
        defaultSlideIndex: 0,
        slideWidth: 180,
        align: 'center',
        containerWidth: 200,
        viewPortWidth: 180,
      });
      vi.runAllTimers();

      expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
      expect(mockedData.getSlideMockData(0).transform).toBeFalsy();
    });

    it('check correct navigation by arrows clicks', () => {
      const onNext = vi.fn();
      const onPrev = vi.fn();
      const onChange = vi.fn();

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

      vi.runAllTimers();

      checkActiveSlide(1);

      const [leftArrow, rightArrow] = getArrows();
      fireEvent.click(rightArrow);

      expect(screen.getByText('prev-label')).toBeInTheDocument();
      expect(screen.getByText('next-label')).toBeInTheDocument();

      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2]]);

      rerender({ slideIndex: 2 });

      vi.runAllTimers();
      checkActiveSlide(2);
      checkTransformX(mockedData.layerTransform, -400);

      fireEvent.click(leftArrow);

      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls).toEqual([[2], [1]]);

      rerender({ slideIndex: 1 });

      vi.runAllTimers();
      checkActiveSlide(1);
      checkTransformX(mockedData.layerTransform, -200);
    });

    it('should change activeSlide by focus', async () => {
      const onChange = vi.fn();

      const { rerender } = setup({
        looped,
        defaultSlideIndex: 0,
        slideWidth: 200,
        containerWidth: 200,
        viewPortWidth: 200,
        onChange,
      });

      act(() => {
        screen.getByTestId('slide-1').focus();
      });

      await userEvent.tab();
      expect(document.activeElement).toBe(screen.getByTestId('slide-2'));
      expect(onChange).toHaveBeenLastCalledWith(1);
      rerender({ slideIndex: 1 });

      await userEvent.tab();
      expect(document.activeElement).toBe(screen.getByTestId('slide-3'));
      expect(onChange).toHaveBeenLastCalledWith(2);
      rerender({ slideIndex: 2 });

      await userEvent.tab({ shift: true });
      expect(document.activeElement).toBe(screen.getByTestId('slide-2'));
      expect(onChange).toHaveBeenLastCalledWith(1);
    });

    it('should not change slide when slide too small', () => {
      const onChange = vi.fn();
      const onDragStart = vi.fn();
      const onDragEnd = vi.fn();

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
      vi.runAllTimers();

      checkActiveSlide(0);

      simulateDrag(mockedData.viewPort, [2, 0]);
      vi.runAllTimers();

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
      const onChange = vi.fn();

      const mockedData = setup({
        looped,
        defaultSlideIndex: 0,
        slideWidth: 180,
        containerWidth: 200,
        viewPortWidth: 180,
        align: 'center',
        onChange,
      });
      vi.runAllTimers();

      if (looped) {
        expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
        expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      }

      mockedData.containerWidth = 250;

      fireEvent.resize(window);
      vi.runAllTimers();

      if (looped) {
        expect(mockedData.layerTransform).toBe('translate3d(35px, 0, 0)');
        expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      }
    });
  });

  describe('check not looped gallery navigation working', () => {
    it(
      'check correct navigation by dragging',
      withFakeTimers(() => {
        const onChange = vi.fn();
        const onDragStart = vi.fn();
        const onDragEnd = vi.fn();

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
        vi.runAllTimers();
        const { rerender } = mockedData;

        checkActiveSlide(0);

        simulateDrag(mockedData.viewPort, [150, 0]);
        vi.runAllTimers();

        expect(onDragStart).toHaveBeenCalledTimes(1);
        expect(onDragEnd).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledExactlyOnceWith(1);
        rerender({ slideIndex: 1 });
        vi.runAllTimers();

        checkTransformX(mockedData.layerTransform, -170);
        checkActiveSlide(1);

        simulateDrag(mockedData.viewPort, [0, 150]);
        vi.runAllTimers();

        expect(onDragStart).toHaveBeenCalledTimes(2);
        expect(onDragEnd).toHaveBeenCalledTimes(2);
        expect(onChange.mock.calls).toEqual([[1], [0]]);
        rerender({ slideIndex: 0 });
        vi.runAllTimers();

        checkTransformX(mockedData.layerTransform, 10);
        checkActiveSlide(0);
      }),
    );

    it('check correct navigation by dragging with align right', () => {
      const onChange = vi.fn();
      const onDragStart = vi.fn();
      const onDragEnd = vi.fn();

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
      expect(onChange).toHaveBeenCalledExactlyOnceWith(1);
    });

    it('check not change slide with too small gesture slide', () => {
      const onChange = vi.fn();
      const onDragStart = vi.fn();
      const onDragEnd = vi.fn();

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
      expect(onChange).toHaveBeenCalledExactlyOnceWith(1);
    });

    it('check max and min restrictions', () => {
      const onChange = vi.fn();
      const onDragStart = vi.fn();
      const onDragEnd = vi.fn();

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
    it(
      'check correct reverse navigation by arrows clicks',
      withFakeTimers(() => {
        const onNext = vi.fn();
        const onPrev = vi.fn();
        const onChange = vi.fn();

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
        vi.runAllTimers();
        const { rerender } = mockedData;

        checkActiveSlide(0);

        const [leftArrow, rightArrow] = getArrows();
        fireEvent.click(leftArrow);
        vi.runAllTimers();

        expect(onPrev).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls).toEqual([[4]]);

        rerender({ slideIndex: 4 });
        vi.runAllTimers();
        checkActiveSlide(4);
        checkTransformX(mockedData.layerTransform, -800);

        fireEvent.click(rightArrow);
        vi.runAllTimers();

        expect(onNext).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls).toEqual([[4], [0]]);

        rerender({ slideIndex: 0 });
        vi.runAllTimers();
        checkActiveSlide(0);
        checkTransformX(mockedData.layerTransform, 0);
      }),
    );

    it(
      'check correct navigation by dragging',
      withFakeTimers(() => {
        const onChange = vi.fn();
        const onDragStart = vi.fn();
        const onDragEnd = vi.fn();

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
        vi.runAllTimers();
        const { rerender } = mockedData;

        checkActiveSlide(0);

        simulateDrag(mockedData.viewPort, [0, 150]);
        vi.runAllTimers();

        expect(onDragStart).toHaveBeenCalledTimes(1);
        expect(onDragEnd).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledExactlyOnceWith(4);
        rerender({ slideIndex: 4 });
        vi.runAllTimers();

        checkTransformX(mockedData.layerTransform, -710);
        checkTransformX(mockedData.getSlideMockData(0).transform, 900);
        checkActiveSlide(4);

        simulateDrag(mockedData.viewPort, [150, 0]);
        vi.runAllTimers();

        expect(onDragStart).toHaveBeenCalledTimes(2);
        expect(onDragEnd).toHaveBeenCalledTimes(2);
        expect(onChange.mock.calls).toEqual([[4], [0]]);
        rerender({ slideIndex: 0 });
        vi.runAllTimers();

        checkTransformX(mockedData.layerTransform, 10);
        checkTransformX(mockedData.getSlideMockData(0).transform, 0);
        checkActiveSlide(0);
      }),
    );

    describe('DEV errors', () => {
      beforeEach(() => setNodeEnv('development'));
      afterEach(() => setNodeEnv('test'));

      it('check dev error when slides width incorrect', () => {
        const onChange = vi.fn();
        const warn = vi.spyOn(console, 'warn').mockImplementation(noop);

        setup({
          looped: true,
          defaultSlideIndex: 0,
          slideWidth: 40,
          containerWidth: 200,
          viewPortWidth: 200,
          onChange,
        });

        expect(warn).toHaveBeenCalledExactlyOnceWith(
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

  it(
    'check recalculate slides positions when resize element with resizeSource="element"',
    withFakeTimers(() => {
      const { triggerResize, restore } = mockResizeObserver();
      const onChange = vi.fn();

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
      vi.runAllTimers();

      expect(mockedData.layerTransform).toBe('translate3d(10px, 0, 0)');
      expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');

      mockedData.containerWidth = 250;

      act(triggerResize);
      vi.runAllTimers();

      expect(mockedData.layerTransform).toBe('translate3d(35px, 0, 0)');
      expect(mockedData.getSlideMockData(0).transform).toBe('translate3d(0px, 0, 0)');
      restore();
    }),
  );

  it(
    'checks gallery arrows and navigation in center alignment',
    withFakeTimers(() => {
      const onChange = vi.fn();
      const onDragStart = vi.fn();
      const onDragEnd = vi.fn();

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
      vi.runAllTimers();
      const { rerender } = mockedData;

      checkActiveSlide(1);
      expect(getArrows()).toHaveLength(1);

      simulateDrag(mockedData.viewPort, [150, 0]);
      vi.runAllTimers();

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
      vi.runAllTimers();

      expect(getArrows()).toHaveLength(1);

      simulateDrag(mockedData.viewPort, [150, 0]);
      vi.runAllTimers();

      expect(onDragStart).toHaveBeenCalledTimes(1);
      expect(onDragEnd).toHaveBeenCalledTimes(1);

      // слайды полностью помещаются, поэтому мы отключаем drag и не показываем стрелочки
      mockedData.containerWidth = 540;
      mockedData.viewPortWidth = 540;
      onDragStart.mockClear();
      onDragEnd.mockClear();
      fireEvent.resize(window);

      rerender({ slideIndex: 1 });
      vi.runAllTimers();

      expect(getArrows()).toHaveLength(0);

      simulateDrag(mockedData.viewPort, [150, 0]);
      vi.runAllTimers();

      expect(onDragStart).not.toHaveBeenCalled();
      expect(onDragEnd).not.toHaveBeenCalled();
    }),
  );

  describe('check correct working with rtl direction', () => {
    it('check max and min restrictions', () => {
      const onChange = vi.fn();
      const onDragStart = vi.fn();
      const onDragEnd = vi.fn();

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

    it(
      'check correct navigation by arrows clicks in RTL',
      withFakeTimers(() => {
        const onNext = vi.fn();
        const onPrev = vi.fn();
        const onChange = vi.fn();

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
        vi.runAllTimers();
        const { rerender } = mockedData;

        checkActiveSlide(1);
        checkTransformX(mockedData.layerTransform, 200);

        const [prevArrow, nextArrow] = getArrows();
        fireEvent.click(nextArrow);
        vi.runAllTimers();

        expect(onNext).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls).toEqual([[2]]);

        rerender({ slideIndex: 2 });
        vi.runAllTimers();
        checkActiveSlide(2);
        checkTransformX(mockedData.layerTransform, 400);

        fireEvent.click(prevArrow);
        vi.runAllTimers();

        expect(onPrev).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls).toEqual([[2], [1]]);

        rerender({ slideIndex: 1 });
        vi.runAllTimers();
        checkActiveSlide(1);
        checkTransformX(mockedData.layerTransform, 200);
      }),
    );

    it(
      'check correct navigation by dragging',
      withFakeTimers(() => {
        const onChange = vi.fn();
        const onDragStart = vi.fn();
        const onDragEnd = vi.fn();

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
        vi.runAllTimers();
        const { rerender } = mockedData;

        checkActiveSlide(0);

        simulateDrag(mockedData.viewPort, [150, 0]);
        vi.runAllTimers();

        expect(onDragStart).toHaveBeenCalledTimes(1);
        expect(onDragEnd).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledExactlyOnceWith(4);
        rerender({ slideIndex: 4 });
        vi.runAllTimers();

        checkTransformX(mockedData.layerTransform, 710);
        checkTransformX(mockedData.getSlideMockData(0).transform, -900);
        checkActiveSlide(4);

        simulateDrag(mockedData.viewPort, [0, 150]);
        vi.runAllTimers();

        expect(onDragStart).toHaveBeenCalledTimes(2);
        expect(onDragEnd).toHaveBeenCalledTimes(2);
        expect(onChange.mock.calls).toEqual([[4], [0]]);
        rerender({ slideIndex: 0 });
        vi.runAllTimers();

        checkTransformX(mockedData.layerTransform, 890);
        checkTransformX(mockedData.getSlideMockData(0).transform, -900);
        checkActiveSlide(0);
      }),
    );
  });
});
