'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useExternRef } from '../../hooks/useExternRef';
import { useMutationObserver } from '../../hooks/useMutationObserver';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useDOM } from '../../lib/dom';
import { mergeCalls } from '../../lib/mergeCalls';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { useHover } from '../Clickable/useState';
import { RootComponent } from '../RootComponent/RootComponent';
import type { CustomTouchEvent } from '../Touch/Touch';
import { Bullets } from './Bullets';
import { CarouselViewPort } from './CarouselViewPort';
import { ScrollArrows } from './ScrollArrows';
import {
  CONTROL_ELEMENTS_STATE,
  DEFAULT_ANIMATION_DURATION,
  SLIDE_THRESHOLD,
  SLIDES_MANAGER_STATE,
} from './constants';
import {
  calcMax,
  calcMin,
  calculateIndent,
  getLoopPoints,
  getTargetIndex,
  isBigger,
  isBiggerOrEqual,
  isLowerOrEqual,
  revertRtlValue,
  validateIndent,
} from './helpers';
import { useSlideAnimation } from './hooks';
import type {
  BaseGalleryProps,
  ControlElementsState,
  GallerySlidesState,
  SlidesManagerState,
} from './types';
import styles from './CarouselBase.module.css';

const warn = warnOnce('Gallery');

export const CarouselBase = ({
  bullets = false,
  getRootRef,
  ref: refProp,
  children,
  slideWidth = '100%',
  slideIndex = 0,
  dragDisabled = false,
  resizeSource = 'window',
  onDragStart,
  onDragEnd,
  onChange,
  onPrevClick,
  onNextClick,
  onPointerEnter,
  onPointerLeave,
  align = 'left',
  showArrows,
  getRef,
  arrowSize,
  arrowAreaHeight,
  slideTestId,
  bulletTestId,
  nextArrowTestId,
  prevArrowTestId,
  looped = false,
  animationDuration = DEFAULT_ANIMATION_DURATION,
  animationEasing = 'ease',

  // a11y
  'aria-roledescription': ariaRoleDescription = 'Карусель',
  arrowNextLabel = 'Следующий слайд',
  arrowPrevLabel = 'Предыдущий слайд',
  slideLabel,
  slideRoleDescription,
  ...restProps
}: BaseGalleryProps): React.ReactNode => {
  const slidesStore = React.useRef<Record<string, HTMLDivElement | null>>({});
  const slidesManager = React.useRef<SlidesManagerState>(SLIDES_MANAGER_STATE);
  const textDirection = useConfigDirection();
  const isRtl = textDirection === 'rtl';

  const rootRef = useExternRef(getRootRef, refProp);
  const viewportRef = useExternRef(getRef);
  const layerRef = React.useRef<HTMLDivElement>(null);
  const animationFrameRef = React.useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const shiftXCurrentRef = React.useRef<number>(0);
  const shiftXDeltaRef = React.useRef<number>(0);
  const renderedShiftXRef = React.useRef(0);
  const interruptedDragShiftXRef = React.useRef<number | null>(null);
  const initialized = React.useRef<boolean>(false);
  const hasDeferredLayout = React.useRef(false);
  const {
    animationInQueue,
    addToAnimationQueue,
    getAnimateFunction,
    startAnimation,
    getAnimationEasing,
    scheduleAnimationFrame,
    cancelAnimation,
  } = useSlideAnimation(animationDuration, animationEasing, applyDeferredLayout);
  const isDragging = React.useRef(false);

  const [controlElementsState, setControlElementsState] =
    React.useState<ControlElementsState>(CONTROL_ELEMENTS_STATE);

  const slidesContainerId = React.useId();

  const isCenterAlign = align === 'center';

  const calculateCanSlideLeft = () => {
    if (looped) {
      return !slidesManager.current.isFullyVisible;
    }
    const isStartShiftX = isBiggerOrEqual(shiftXCurrentRef.current, 0, isRtl);
    return !slidesManager.current.isFullyVisible && !isStartShiftX;
  };

  const calculateCanSlideRight = () => {
    if (looped) {
      return !slidesManager.current.isFullyVisible;
    }
    return (
      !slidesManager.current.isFullyVisible &&
      // we can't move right when gallery layer fully scrolled right, if gallery aligned by left side
      ((align === 'left' &&
        slidesManager.current.containerWidth - revertRtlValue(shiftXCurrentRef.current, isRtl) <
          (slidesManager.current.layerWidth ?? 0)) ||
        // otherwise we need to check current slide index (align = right or align = center)
        (align !== 'left' && slideIndex < slidesManager.current.slides.length - 1))
    );
  };

  const transformCssStyles = (shiftX: number, animation = false) => {
    shiftX = Math.round(shiftX);
    if (looped) {
      slidesManager.current.loopPoints.forEach((loopPoint) => {
        const { target, index } = loopPoint;
        const slide = slidesStore.current[index];
        if (slide) {
          slide.style.transform = `translate3d(${target(shiftX)}px, 0, 0)`;
        }
      });
    } else {
      Object.values(slidesStore.current).forEach((slide) => {
        if (slide) {
          slide.style.transform = '';
        }
      });
    }

    if (layerRef.current) {
      const indent =
        isDragging.current && !looped
          ? validateIndent(
              slidesManager.current,
              shiftXCurrentRef.current + shiftXDeltaRef.current,
              isRtl,
              false,
            )
          : shiftX;

      layerRef.current.style.transform = `translate3d(${indent}px, 0, 0)`;
      renderedShiftXRef.current = indent;
      layerRef.current.style.transition = animation
        ? `transform ${animationDuration}ms ${getAnimationEasing()}`
        : '';
    }
  };

  const checkShiftOutOfBoundsFromStart = (shiftX: number, snaps: number[]) =>
    isBigger(shiftX, snaps[0], isRtl);

  const checkShiftOutOfBoundsFromEnd = (shiftX: number, slides: GallerySlidesState[]) => {
    /**
     * Поскольку при `align="center"` слайды сдвинуты, прежде чем рассчитать крайнюю правую точку,
     * нужно вычесть сдвиг слайдов.
     */
    const firstSlideShift =
      align === 'center'
        ? (slidesManager.current.containerWidth - slidesManager.current.slides[0].width) / 2
        : 0;

    const lastPoint =
      slides[slides.length - 1].width + slides[slides.length - 1].coordX - firstSlideShift;
    return isRtl ? shiftX >= lastPoint : shiftX <= -lastPoint;
  };

  const scheduleTransform = (draw: VoidFunction) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      draw();
      animationFrameRef.current = null;
    });
  };

  const requestTransform = (shiftX: number, animation = false) => {
    const { snaps, contentSize, slides } = slidesManager.current;

    scheduleTransform(() => {
      /**
       * Для бесконечной галереи проверяем, что при dnd мы прокрутили левее, чем первый слайд,
       * чтобы сбросить `shiftXCurrentRef`.
       */
      if (looped && checkShiftOutOfBoundsFromStart(shiftX, snaps)) {
        const firstSnap = revertRtlValue(snaps[0], isRtl);
        shiftXCurrentRef.current = revertRtlValue(-contentSize + firstSnap, isRtl);
        shiftX = shiftXCurrentRef.current + shiftXDeltaRef.current;
      }

      /**
       * Для бесконечной галереи проверяем, что при dnd мы прокрутили правее, чем последний слайд,
       * чтобы правильно пересчитать `shiftXCurrentRef`.
       */
      if (looped && checkShiftOutOfBoundsFromEnd(shiftX, slides)) {
        shiftXCurrentRef.current = Math.abs(shiftXDeltaRef.current) + snaps[0];
      }
      transformCssStyles(shiftX, animation);
    });
  };

  const getNearestLoopedShift = (shiftX: number, reference: number) => {
    const { contentSize } = slidesManager.current;
    return contentSize > 0
      ? shiftX + Math.round((reference - shiftX) / contentSize) * contentSize
      : shiftX;
  };

  const normalizeLoopedShift = (shiftX: number) => {
    const { snaps, contentSize } = slidesManager.current;
    if (contentSize === 0) {
      return shiftX;
    }
    // Keep the layer and the loop points within the same cycle.
    const cycle = revertRtlValue(contentSize, isRtl);
    return shiftX + Math.floor((snaps[0] - shiftX) / cycle) * cycle;
  };

  const animateLoopedDrag = (start: number, targetIndex: number, reference: number) => {
    const target = getNearestLoopedShift(slidesManager.current.snaps[targetIndex], reference);
    addToAnimationQueue(
      getAnimateFunction((progress) => {
        transformCssStyles(normalizeLoopedShift(start + (target - start) * progress));
      }),
    );
    startAnimation();
  };

  function updateSlidesLayout() {
    shiftXCurrentRef.current = slidesManager.current.snaps[slideIndex];
    initialized.current = true;
    hasDeferredLayout.current = false;

    setControlElementsState({
      canSlideLeft: calculateCanSlideLeft(),
      canSlideRight: calculateCanSlideRight(),
      isDraggable: !(dragDisabled || slidesManager.current.isFullyVisible),
    });
  }

  function applyDeferredLayout() {
    if (hasDeferredLayout.current && !isDragging.current) {
      updateSlidesLayout();
      transformCssStyles(shiftXCurrentRef.current);
    }
  }

  const initializeSlides = () => {
    if (!rootRef.current || !viewportRef.current || !layerRef.current) {
      return;
    }
    const layerOffsetWidth = layerRef.current.offsetWidth;

    const calcRtlCoord = (element: HTMLDivElement) => {
      const offsetLeft = element.offsetLeft;
      const offsetWidth = element.offsetWidth;
      return layerOffsetWidth - offsetLeft - offsetWidth;
    };

    let localSlides =
      React.Children.map(children, (_item, i): GallerySlidesState => {
        const elem = slidesStore.current[i];
        if (!elem) {
          return { coordX: 0, width: 0 };
        }
        const coordX = isRtl ? calcRtlCoord(elem) : elem.offsetLeft;
        return { coordX, width: elem.offsetWidth };
      }) || [];

    if (localSlides.length === 0) {
      initialized.current = false;
      hasDeferredLayout.current = false;
      return;
    }

    const containerWidth = rootRef.current.offsetWidth;
    const viewportOffsetWidth = viewportRef.current.offsetWidth;
    const layerWidth = localSlides.reduce((val, slide) => slide.width + val, 0);

    if (process.env.NODE_ENV === 'development' && looped) {
      let remainingWidth = containerWidth;
      let slideIndex = 0;

      while (remainingWidth > 0 && slideIndex < localSlides.length) {
        remainingWidth -= localSlides[slideIndex].width;
        slideIndex++;
      }
      if (remainingWidth <= 0 && slideIndex === localSlides.length) {
        warn(
          'Ширины слайдов недостаточно для корректной работы свойства "looped". Пожалуйста, сделайте её больше.',
        );
      }
    }

    const currentSlideOffsetOnCenterAlignment =
      (containerWidth - (localSlides[slideIndex]?.width ?? 0)) / 2;
    const isFullyVisible =
      align === 'center'
        ? layerWidth + currentSlideOffsetOnCenterAlignment <= containerWidth
        : layerWidth <= containerWidth;

    const onlyOneSlide = localSlides.length === 1;

    slidesManager.current = {
      ...slidesManager.current,
      layerWidth,
      containerWidth,
      viewportOffsetWidth,
      slides: localSlides,
      isFullyVisible,
      max:
        looped || onlyOneSlide
          ? null
          : calcMax({
              slides: localSlides,
              containerWidth,
              isCenterAlign,
              isRtl,
            }),
      min:
        looped || onlyOneSlide
          ? null
          : calcMin({
              containerWidth,
              layerWidth,
              slides: localSlides,
              viewportOffsetWidth,
              isFullyVisible,
              align,
              isRtl,
            }),
    };
    const snaps = localSlides.map((_, index) =>
      calculateIndent({
        targetIndex: index,
        slidesManager: slidesManager.current,
        isCenter: isCenterAlign,
        looped,
        isRtl,
      }),
    );

    let contentSize = Math.abs(snaps[snaps.length - 1]) + localSlides[localSlides.length - 1].width;
    if (align === 'center') {
      contentSize += revertRtlValue(snaps[0], isRtl);
    }

    slidesManager.current.snaps = snaps;
    slidesManager.current.contentSize = contentSize;
    // Если галерея не зациклена и слайд всего один, то рассчитывать loopPoints тоже не надо
    if (looped && !onlyOneSlide && !isFullyVisible) {
      slidesManager.current.loopPoints = getLoopPoints(
        slidesManager.current,
        containerWidth,
        isRtl,
      );
    }

    if (animationInQueue() || (isDragging.current && interruptedDragShiftXRef.current !== null)) {
      hasDeferredLayout.current = true;
      return;
    }

    if (animationFrameRef.current !== null) {
      return;
    }

    updateSlidesLayout();
    requestTransform(shiftXCurrentRef.current);
  };

  const onResize = () => {
    if (initialized.current) {
      initializeSlides();
    }
  };
  const { window } = useDOM();
  useResizeObserver(resizeSource === 'element' ? rootRef : window, onResize);

  const loopedSlideChangePerform = () => {
    const { snaps, slides } = slidesManager.current;
    const indent = snaps[slideIndex];
    let startPoint = shiftXCurrentRef.current;

    const fromLastToFirst = isLowerOrEqual(
      shiftXCurrentRef.current,
      snaps[snaps.length - 1],
      isRtl,
    );
    /**
     * Переключаемся с последнего элемента на первый
     * Для корректной анимации мы прокручиваем последний слайд на всю длину (shiftX) "вперед"
     * В конце анимации при отрисовке следующего кадра задаем всем слайдам начальные значения.
     */
    if (indent === snaps[0] && fromLastToFirst) {
      const endEdge = revertRtlValue(
        Math.abs(snaps[snaps.length - 1]) + slides[slides.length - 1].width,
        isRtl,
      );
      const distance = endEdge + startPoint;
      addToAnimationQueue(
        getAnimateFunction((progress) => {
          const shiftX = startPoint + progress * distance * -1;

          transformCssStyles(shiftX);

          if (shiftX <= snaps[snaps.length - 1] - slides[slides.length - 1].width) {
            scheduleAnimationFrame(() => {
              shiftXCurrentRef.current = indent;
              transformCssStyles(snaps[0]);
            });
          }
        }),
      );
      /**
       * Переключаемся с первого слайда на последний
       * Для корректной анимации сначала задаем первым видимым слайдам смещение
       * В следующем кадре начинаем анимация прокрутки "назад".
       */
    } else if (indent === snaps[snaps.length - 1] && shiftXCurrentRef.current === snaps[0]) {
      startPoint = indent - revertRtlValue(slides[slides.length - 1].width, isRtl);

      addToAnimationQueue(() => {
        scheduleAnimationFrame(() => {
          const shiftX = indent - revertRtlValue(slides[slides.length - 1].width, isRtl);
          transformCssStyles(shiftX);

          getAnimateFunction((progress) => {
            const diff = revertRtlValue(progress * slides[slides.length - 1].width, isRtl);
            transformCssStyles(startPoint + diff);
          })();
        });
      });
      /**
       * Если не обработаны `corner`-кейсы выше, то просто проигрываем анимацию смещения.
       */
    } else {
      addToAnimationQueue(() => {
        const distance = Math.abs(indent - startPoint);
        let direction = startPoint <= indent ? 1 : -1;

        getAnimateFunction((progress) => {
          const shiftX = startPoint + progress * distance * direction;
          transformCssStyles(shiftX);
        })();
      });
    }
  };

  const simpleSlideChangePerform = () => {
    const { snaps } = slidesManager.current;
    requestTransform(snaps[slideIndex], true);
  };

  useIsomorphicLayoutEffect(
    function performSlideChange() {
      if (!initialized.current) {
        return;
      }
      const { snaps } = slidesManager.current;
      const indent = snaps[slideIndex];

      const interruptedDragShiftX = interruptedDragShiftXRef.current;
      interruptedDragShiftXRef.current = null;
      if (looped && interruptedDragShiftX !== null && !isDragging.current) {
        animateLoopedDrag(interruptedDragShiftX, slideIndex, shiftXCurrentRef.current);
      } else if (looped) {
        loopedSlideChangePerform();
        startAnimation();
      } else {
        simpleSlideChangePerform();
      }

      shiftXCurrentRef.current = indent;

      setControlElementsState((v) => ({
        ...v,
        canSlideLeft: calculateCanSlideLeft(),
        canSlideRight: calculateCanSlideRight(),
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slideIndex],
  );

  useIsomorphicLayoutEffect(
    function updateIsDraggable() {
      setControlElementsState((v) => ({
        ...v,
        isDraggable: !(dragDisabled || slidesManager.current.isFullyVisible),
      }));
    },
    [dragDisabled],
  );

  useMutationObserver(layerRef, initializeSlides);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useIsomorphicLayoutEffect(initializeSlides, [align, slideWidth, looped, isRtl]);

  const calculateMinDeltaXToSlide = () => {
    return slidesManager.current.slides[slideIndex].width * SLIDE_THRESHOLD;
  };

  const slideLeft = (event: React.MouseEvent) => {
    if (slideIndex > 0) {
      shiftXCurrentRef.current += revertRtlValue(calculateMinDeltaXToSlide(), isRtl);
    }
    onChange?.(
      (slideIndex - 1 + slidesManager.current.slides.length) % slidesManager.current.slides.length,
    );
    onPrevClick?.(event);
  };

  const slideRight = (event: React.MouseEvent) => {
    if (slideIndex < slidesManager.current.slides.length - 1) {
      shiftXCurrentRef.current -= revertRtlValue(calculateMinDeltaXToSlide(), isRtl);
    }
    onChange?.((slideIndex + 1) % slidesManager.current.slides.length);
    onNextClick?.(event);
  };

  const onStart = (e: CustomTouchEvent) => {
    e.originalEvent.stopPropagation();
    if (controlElementsState.isDraggable) {
      onDragStart?.(e);
      shiftXCurrentRef.current = slidesManager.current.snaps[slideIndex];
      shiftXDeltaRef.current = 0;
      interruptedDragShiftXRef.current = null;
    }
  };

  const onMoveX = (e: CustomTouchEvent) => {
    if (controlElementsState.isDraggable) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        if (!isDragging.current && looped && animationInQueue()) {
          // Use the rendered position for dragging and the active snap for choosing the next slide.
          interruptedDragShiftXRef.current = getNearestLoopedShift(
            renderedShiftXRef.current,
            shiftXCurrentRef.current,
          );
          cancelAnimation();
        }
        isDragging.current = true;
        if (shiftXDeltaRef.current !== e.shiftX) {
          shiftXDeltaRef.current = e.shiftX;
          const interruptedDragShiftX = interruptedDragShiftXRef.current;
          if (interruptedDragShiftX === null) {
            requestTransform(shiftXCurrentRef.current + e.shiftX);
          } else {
            const shiftX = normalizeLoopedShift(interruptedDragShiftX + e.shiftX);
            scheduleTransform(() => transformCssStyles(shiftX));
          }
        }
      }
    }
  };

  const onEnd = (e: CustomTouchEvent) => {
    if (controlElementsState.isDraggable) {
      isDragging.current = false;
      let targetIndex = slideIndex;
      if (e.isSlide) {
        targetIndex = getTargetIndex({
          slides: slidesManager.current.slides,
          slideIndex,
          currentShiftX: shiftXCurrentRef.current,
          currentShiftXDelta: shiftXDeltaRef.current,
          max: slidesManager.current.max,
          looped,
          isRtl,
        });
      }
      onDragEnd?.(e, targetIndex);

      if (targetIndex !== slideIndex) {
        shiftXCurrentRef.current = shiftXCurrentRef.current + shiftXDeltaRef.current;
        if (interruptedDragShiftXRef.current !== null) {
          interruptedDragShiftXRef.current += shiftXDeltaRef.current;
        }
        onChange?.(targetIndex);
      } else if (looped) {
        if (e.isSlideX) {
          const start = interruptedDragShiftXRef.current ?? shiftXCurrentRef.current;
          interruptedDragShiftXRef.current = null;
          animateLoopedDrag(
            start + shiftXDeltaRef.current,
            targetIndex,
            shiftXCurrentRef.current + shiftXDeltaRef.current,
          );
        }
      } else {
        const initialShiftX = slidesManager.current.snaps[targetIndex];
        requestTransform(initialShiftX, true);
      }
    }
  };

  const setSlideRef = (slideRef: HTMLDivElement | null, slideIndex: number) => {
    slidesStore.current[slideIndex] = slideRef;
  };

  const { isDraggable, canSlideRight, canSlideLeft } = controlElementsState;

  const handleScrollForFixVoiceOverBehavior = (event: React.UIEvent<HTMLDivElement>) => {
    restProps.onScroll?.(event);
    if (rootRef.current) {
      event.currentTarget.scrollLeft = 0;
    }
  };

  const { isHovered, ...hoverHandlers } = useHover();

  const handlers = mergeCalls(hoverHandlers, { onPointerEnter, onPointerLeave });

  return (
    <RootComponent
      {...restProps}
      {...handlers}
      role="region"
      onScroll={handleScrollForFixVoiceOverBehavior}
      aria-roledescription={ariaRoleDescription}
      baseClassName={classNames(
        styles.host,
        slideWidth === 'custom' && styles.customWidth,
        isHovered && styles.hover,
        showArrows === 'always' && styles.showArrows,
        isDraggable && styles.draggable,
      )}
      getRootRef={rootRef}
    >
      <ScrollArrows
        canSlideLeft={canSlideLeft}
        canSlideRight={canSlideRight}
        onSlideRight={slideRight}
        onSlideLeft={slideLeft}
        showArrows={showArrows}
        arrowSize={arrowSize}
        arrowAreaHeight={arrowAreaHeight}
        arrowPrevLabel={arrowPrevLabel}
        arrowNextLabel={arrowNextLabel}
        prevArrowTestId={prevArrowTestId}
        nextArrowTestId={nextArrowTestId}
        slidesContainerId={slidesContainerId}
      />
      <CarouselViewPort
        slideWidth={slideWidth}
        slideTestId={slideTestId}
        onStart={onStart}
        onMoveX={onMoveX}
        onEnd={onEnd}
        getRootRef={viewportRef}
        layerRef={layerRef}
        setSlideRef={setSlideRef}
        slidesContainerId={slidesContainerId}
        slideLabel={slideLabel}
        slideRoleDescription={slideRoleDescription}
        onChange={onChange}
      >
        {children}
      </CarouselViewPort>

      {bullets && (
        <Bullets
          bullets={bullets}
          slideIndex={slideIndex}
          count={React.Children.count(children)}
          bulletTestId={bulletTestId}
        />
      )}
    </RootComponent>
  );
};
