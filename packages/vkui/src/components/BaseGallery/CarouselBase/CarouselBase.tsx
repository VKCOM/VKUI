import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../../hooks/useAdaptivityHasPointer';
import { useExternRef } from '../../../hooks/useExternRef';
import { useGlobalEventListener } from '../../../hooks/useGlobalEventListener';
import { animate } from '../../../lib/animate';
import { useDOM } from '../../../lib/dom';
import { cubicBezier } from '../../../lib/fx';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ScrollArrow } from '../../ScrollArrow/ScrollArrow';
import { Touch, TouchEvent } from '../../Touch/Touch';
import { calcMax, calcMin } from '../helpers';
import { BaseGalleryProps, GallerySlidesState, LayoutState } from '../types';
import { ControlElementsState, LoopPoint, ShiftingState } from './types';
import styles from '../BaseGallery.module.css';

const ANIMATION_DURATION = 0.24;

const LAYOUT_DEFAULT_STATE: LayoutState = {
  containerWidth: 0,
  viewportOffsetWidth: 0,
  layerWidth: 0,
  min: 0,
  max: 0,
  slides: [],
  isFullyVisible: true,
};

const SHIFT_DEFAULT_STATE: ShiftingState = {
  loopPoints: [],
  contentSize: 0,
  snaps: [],
};

const CONTROL_ELEMENTS_STATE: ControlElementsState = {
  canSlideLeft: true,
  canSlideRight: true,
  isDraggable: true,
};

const stylesBullets = {
  dark: styles['BaseGallery__bullets--dark'],
  light: styles['BaseGallery__bullets--light'],
};

export const CarouselBase = ({
  bullets = false,
  getRootRef,
  children,
  slideWidth = '100%',
  slideIndex = 0,
  isDraggable: isDraggableProp = true,
  onDragStart,
  onDragEnd,
  onChange,
  onPrevClick,
  onNextClick,
  align = 'left',
  showArrows,
  getRef,
  arrowSize = 'l',
  ...restProps
}: BaseGalleryProps) => {
  const slidesStore = React.useRef<Record<string, HTMLDivElement | null>>({});
  const layoutState = React.useRef<LayoutState>(LAYOUT_DEFAULT_STATE);
  const shiftState = React.useRef<ShiftingState>(SHIFT_DEFAULT_STATE);

  const rootRef = useExternRef(getRootRef);
  const viewportRef = useExternRef(getRef);
  const layerRef = React.useRef<HTMLDivElement>(null);
  const animationFrameRef = React.useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const shiftXCurrentRef = React.useRef<number>(0);
  const shiftXDeltaRef = React.useRef<number>(0);
  const animationQueue = React.useRef<VoidFunction[]>([]);
  const initialized = React.useRef<boolean>(false);

  const [controlElementsState, setControlElementsState] =
    React.useState<ControlElementsState>(CONTROL_ELEMENTS_STATE);

  const { window } = useDOM();
  const hasPointer = useAdaptivityHasPointer();

  const isCenterWithCustomWidth = slideWidth === 'custom' && align === 'center';

  const validateIndent = (value: number) => {
    const localMax = layoutState.current.max ?? 0;
    const localMin = layoutState.current.min ?? 0;

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
  const calculateIndent = (targetIndex: number) => {
    if (layoutState.current.isFullyVisible) {
      return 0;
    }

    const targetSlide = layoutState.current.slides?.length
      ? layoutState.current.slides[targetIndex]
      : null;

    if (targetSlide) {
      const { coordX, width } = targetSlide;

      if (isCenterWithCustomWidth) {
        const viewportWidth = layoutState.current.viewportOffsetWidth ?? 0;
        return viewportWidth / 2 - coordX - width / 2;
      }

      return -1 * coordX;
    }

    return 0;
  };

  const transformCssStyles = (shiftX: number, animation = false) => {
    shiftState.current.loopPoints.forEach((loopPoint) => {
      const { target, index } = loopPoint;
      const slide = slidesStore.current[`slide-${index}`];
      if (slide) {
        slide.style.transform = `translate3d(${target(shiftX)}px, 0, 0)`;
      }
    });

    if (layerRef.current) {
      layerRef.current.style.transform = `translate3d(${shiftX}px, 0, 0)`;
      layerRef.current.style.transition = animation
        ? `transform ${ANIMATION_DURATION}s cubic-bezier(.1, 0, .25, 1)`
        : '';
    }
  };

  const requestTransform = (shiftX: number, animation = false) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    const { snaps } = shiftState.current;

    animationFrameRef.current = requestAnimationFrame(() => {
      if (shiftX > snaps[0]) {
        shiftXCurrentRef.current = -shiftState.current.contentSize + snaps[0];
        shiftX = shiftXCurrentRef.current + shiftXDeltaRef.current;
      }
      const lastPoint =
        layoutState.current.slides[layoutState.current.slides.length - 1].width +
        layoutState.current.slides[layoutState.current.slides.length - 1].coordX;

      if (shiftX <= -lastPoint) {
        shiftXCurrentRef.current = Math.abs(shiftXDeltaRef.current) + snaps[0];
      }
      transformCssStyles(shiftX, animation);
    });
  };

  const initializeSlides = (options: { animation?: boolean } = {}) => {
    let localSlides =
      React.Children.map(children, (_item: React.ReactNode, i: number): GallerySlidesState => {
        const elem = slidesStore.current[`slide-${i}`];
        return {
          coordX: elem?.offsetLeft ?? 0,
          width: elem?.offsetWidth ?? 0,
        };
      }) ?? [];

    const localContainerWidth = rootRef.current?.offsetWidth ?? 0;
    const localViewportOffsetWidth = viewportRef.current?.offsetWidth ?? 0;
    const localLayerWidth = localSlides.reduce(
      (val: number, slide: GallerySlidesState) => slide.width + val,
      0,
    );
    const adjustShiftX =
      localSlides.length <= layoutState.current.slides.length ||
      layoutState.current.slides[slideIndex]?.coordX !== localSlides[slideIndex]?.coordX;

    if (align === 'center') {
      const firstSlideShift = (localContainerWidth - localSlides[0].width) / 2;
      localSlides = localSlides.map((item) => {
        return {
          width: item.width,
          coordX: item.coordX - firstSlideShift,
        };
      });
    }

    layoutState.current = {
      containerWidth: localContainerWidth,
      viewportOffsetWidth: localViewportOffsetWidth,
      layerWidth: localLayerWidth,
      max: calcMax({
        slides: localSlides,
        viewportOffsetWidth: localViewportOffsetWidth,
        isCenterWithCustomWidth,
      }),
      min: calcMin({
        containerWidth: localContainerWidth,
        layerWidth: localLayerWidth,
        slides: localSlides,
        viewportOffsetWidth: localViewportOffsetWidth,
        isCenterWithCustomWidth,
        align,
      }),
      slides: localSlides,
      isFullyVisible: localLayerWidth <= localContainerWidth,
    };

    const snaps = localSlides.map((_, index) => {
      return calculateIndent(index);
    });

    function removeSlideSizes(indexes: number[], startGap: number) {
      return indexes.reduce((gap, i) => {
        return gap - localSlides[i].width;
      }, startGap);
    }

    function snappedIndexes(slideIndexes: number[], gap: number) {
      return slideIndexes.reduce<number[]>((acc, ind) => {
        const remainingGap = removeSlideSizes(acc, gap);
        return remainingGap > 0 ? acc.concat([ind]) : acc;
      }, []);
    }

    const indx = localSlides.map((_, i) => i);
    const endPoints = snappedIndexes(indx, layoutState.current.containerWidth - snaps[0]);
    const startPoints = snappedIndexes(indx.reverse(), snaps[0]);

    let contentSize = -snaps[snaps.length - 1] + localSlides[localSlides.length - 1].width;
    if (align === 'center') {
      contentSize += snaps[0];
    }

    function calculateSlideBounds(offset: number) {
      return snaps.map((snap, index) => ({
        first: snap - localSlides[index].width + offset - snaps[0],
        last: snap + layoutState.current.containerWidth + offset,
        index,
      }));
    }

    function calculateLoopPoints(indexes: number[], edge: 'first' | 'last'): LoopPoint[] {
      const isStartEdge = edge === 'first';
      const offset = isStartEdge ? -contentSize : contentSize;
      const slideBounds = calculateSlideBounds(offset);

      return indexes.map((index) => {
        const initial = isStartEdge ? 0 : -contentSize;
        const altered = isStartEdge ? contentSize : 0;
        const bounds = slideBounds.filter((b) => b.index === index)[0];
        const loopPoint = bounds[isStartEdge ? 'last' : 'first'];

        return {
          index,
          target: (currentLocation) => {
            return currentLocation >= loopPoint ? initial : altered;
          },
        };
      });
    }

    const firstLoopPoints = calculateLoopPoints(endPoints, 'first');
    const lastLoopPoints = calculateLoopPoints(startPoints, 'last');

    shiftState.current = {
      snaps,
      contentSize,
      loopPoints: [...firstLoopPoints, ...lastLoopPoints],
    };
    initialized.current = true;

    setControlElementsState({
      canSlideLeft: !layoutState.current.isFullyVisible,
      canSlideRight: !layoutState.current.isFullyVisible,
      isDraggable: isDraggableProp && !layoutState.current.isFullyVisible,
    });
    if (adjustShiftX) {
      shiftXCurrentRef.current = calculateIndent(slideIndex);
    }
    requestTransform(
      adjustShiftX ? calculateIndent(slideIndex) : shiftXCurrentRef.current,
      options.animation ?? shiftXCurrentRef.current === validateIndent(shiftXCurrentRef.current),
    );
  };

  const onResize = () => {
    if (initialized.current) {
      initializeSlides({ animation: false });
    }
  };

  useGlobalEventListener(window, 'resize', onResize);

  useIsomorphicLayoutEffect(() => {
    initializeSlides({ animation: false });
  }, [children, align, slideWidth]);

  useIsomorphicLayoutEffect(() => {
    if (initialized.current) {
      const indent = calculateIndent(slideIndex ?? 0);

      const { snaps } = shiftState.current;
      let startPoint = shiftXCurrentRef.current;

      if (indent === snaps[0] && shiftXCurrentRef.current <= snaps[snaps.length - 1]) {
        const distance =
          Math.abs(snaps[snaps.length - 1]) +
          layoutState.current.slides[layoutState.current.slides.length - 1].width +
          startPoint;

        animationQueue.current.push(() => {
          animate({
            animationQueue: animationQueue.current,
            duration: ANIMATION_DURATION * 1000,
            timing: cubicBezier(0.8, 1),
            draw: (progress) => {
              const shiftX = startPoint + progress * distance * -1;

              transformCssStyles(shiftX);

              if (
                shiftX <=
                snaps[snaps.length - 1] -
                  layoutState.current.slides[layoutState.current.slides.length - 1].width
              ) {
                requestAnimationFrame(() => {
                  shiftXCurrentRef.current = indent;
                  transformCssStyles(snaps[0]);
                });
              }
            },
          });
        });
      } else if (indent === snaps[snaps.length - 1] && shiftXCurrentRef.current === snaps[0]) {
        startPoint =
          indent - layoutState.current.slides[layoutState.current.slides.length - 1].width;

        animationQueue.current.push(() => {
          requestAnimationFrame(() => {
            const shiftX =
              indent - layoutState.current.slides[layoutState.current.slides.length - 1].width;
            transformCssStyles(shiftX);

            animate({
              animationQueue: animationQueue.current,
              duration: ANIMATION_DURATION * 1000,
              timing: cubicBezier(0.8, 1),
              draw: (progress) => {
                const transX =
                  startPoint +
                  progress *
                    layoutState.current.slides[layoutState.current.slides.length - 1].width;

                transformCssStyles(transX);
              },
            });
          });
        });
      } else {
        animationQueue.current.push(() => {
          const distance = Math.abs(indent - startPoint);

          let direction = 1;
          if (startPoint < indent) {
            direction = 1;
          }
          if (startPoint > indent) {
            direction = -1;
          }

          animate({
            animationQueue: animationQueue.current,
            duration: ANIMATION_DURATION * 1000,
            timing: cubicBezier(0.8, 1),
            draw: (progress) => {
              const shiftX = startPoint + progress * distance * direction;
              transformCssStyles(shiftX);
            },
          });
        });
      }

      if (animationQueue.current.length === 1) {
        animationQueue.current[0]();
      }

      shiftXCurrentRef.current = indent;
    }
  }, [slideIndex]);

  const slideLeft = (event: React.MouseEvent) => {
    onChange?.(
      (slideIndex - 1 + layoutState.current.slides.length) % layoutState.current.slides.length,
    );
    onPrevClick?.(event);
  };

  const slideRight = (event: React.MouseEvent) => {
    onChange?.((slideIndex + 1) % layoutState.current.slides.length);
    onNextClick?.(event);
  };

  /*
   * Получает индекс слайда, к которому будет осуществлен переход
   */
  const getTarget = (e: TouchEvent) => {
    const expectDeltaX = (shiftXDeltaRef.current / e.duration) * 240 * 0.6;
    const shift =
      shiftXCurrentRef.current +
      shiftXDeltaRef.current +
      expectDeltaX -
      (layoutState.current.max ?? 0);
    const direction = shiftXDeltaRef.current < 0 ? 1 : -1;

    // Находим ближайшую границу слайда к текущему отступу
    let targetIndex = layoutState.current.slides.reduce(
      (val: number, item: GallerySlidesState, index: number) => {
        const previousValue = Math.abs(layoutState.current.slides[val].coordX + shift);
        const currentValue = Math.abs(item.coordX + shift);

        return previousValue < currentValue ? val : index;
      },
      slideIndex,
    );

    if (targetIndex === slideIndex) {
      let targetSlide = slideIndex + direction;

      if (targetSlide >= 0 && targetSlide < layoutState.current.slides.length) {
        if (
          Math.abs(shiftXDeltaRef.current) >
          layoutState.current.slides[targetSlide].width * 0.05
        ) {
          targetIndex = targetSlide;
        }
      }
      return direction < 0
        ? (targetSlide + layoutState.current.slides.length) % layoutState.current.slides.length
        : targetSlide % layoutState.current.slides.length;
    }

    return targetIndex;
  };

  const onStart = (e: TouchEvent) => {
    onDragStart?.(e);
    shiftXCurrentRef.current = calculateIndent(slideIndex);
    shiftXDeltaRef.current = 0;
  };

  const onMoveX = (e: TouchEvent) => {
    if (isDraggableProp && !layoutState.current.isFullyVisible) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        if (shiftXDeltaRef.current !== e.shiftX) {
          shiftXDeltaRef.current = e.shiftX;
          requestTransform(shiftXCurrentRef.current + shiftXDeltaRef.current);
        }
      }
    }
  };

  const onEnd = (e: TouchEvent) => {
    const targetIndex = e.isSlide ? getTarget(e) : slideIndex ?? 0;
    onDragEnd?.(e, targetIndex);

    const shiftXStick = shiftXCurrentRef.current + shiftXDeltaRef.current;
    if (targetIndex !== slideIndex) {
      shiftXCurrentRef.current = shiftXStick;
    }

    if (targetIndex !== slideIndex) {
      onChange?.(targetIndex);
    } else {
      const requiredShiftX = calculateIndent(targetIndex);
      requestTransform(requiredShiftX, true);
    }
  };

  const setSlideRef = (slideRef: HTMLDivElement | null, slideIndex: number) => {
    slidesStore.current[`slide-${slideIndex}`] = slideRef;
  };

  const { canSlideLeft, canSlideRight, isDraggable } = controlElementsState;

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['BaseGallery'],
        slideWidth === 'custom' && styles['BaseGallery--custom-width'],
        isDraggable && styles['BaseGallery--draggable'],
      )}
      getRootRef={rootRef}
    >
      <Touch
        className={styles['BaseGallery__viewport']}
        onStartX={onStart}
        onMoveX={onMoveX}
        onEnd={onEnd}
        style={{ width: slideWidth === 'custom' ? '100%' : slideWidth }}
        getRootRef={viewportRef}
        noSlideClick
      >
        <div className={styles['BaseGallery__layer']} ref={layerRef}>
          {React.Children.map(children, (item: React.ReactNode, i: number) => (
            <div
              className={styles['BaseGallery__slide']}
              key={`slide-${i}`}
              ref={(el) => setSlideRef(el, i)}
            >
              {item}
            </div>
          ))}
        </div>
      </Touch>

      {bullets && (
        <div
          aria-hidden
          className={classNames(styles['BaseGallery__bullets'], stylesBullets[bullets])}
        >
          {React.Children.map(children, (_item: React.ReactNode, index: number) => (
            <div
              className={classNames(
                styles['BaseGallery__bullet'],
                index === slideIndex && styles['BaseGallery__bullet--active'],
              )}
              key={index}
            />
          ))}
        </div>
      )}

      {showArrows && hasPointer && canSlideLeft && (
        <ScrollArrow
          className={styles['BaseGallery__arrow']}
          direction="left"
          onClick={slideLeft}
          size={arrowSize}
        />
      )}
      {showArrows && hasPointer && canSlideRight && (
        <ScrollArrow
          className={styles['BaseGallery__arrow']}
          direction="right"
          onClick={slideRight}
          size={arrowSize}
        />
      )}
    </RootComponent>
  );
};
