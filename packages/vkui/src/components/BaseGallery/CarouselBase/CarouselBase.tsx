'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../../hooks/useAdaptivityHasPointer';
import { useExternRef } from '../../../hooks/useExternRef';
import { useMutationObserver } from '../../../hooks/useMutationObserver';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { useDOM } from '../../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../../lib/warnOnce';
import { RootComponent } from '../../RootComponent/RootComponent';
import { type CustomTouchEvent } from '../../Touch/Touch';
import { Bullets } from '../Bullets';
import { GalleryViewPort } from '../GalleryViewPort';
import { ScrollArrows } from '../ScrollArrows';
import { type BaseGalleryProps, type GallerySlidesState } from '../types';
import {
  ANIMATION_DURATION,
  CONTROL_ELEMENTS_STATE,
  SLIDE_THRESHOLD,
  SLIDES_MANAGER_STATE,
} from './constants';
import { calculateIndent, getLoopPoints, getTargetIndex } from './helpers';
import { useSlideAnimation } from './hooks';
import type { ControlElementsState, SlidesManagerState } from './types';
import styles from '../BaseGallery.module.css';

const warn = warnOnce('Gallery');

export const CarouselBase = ({
  bullets = false,
  getRootRef,
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
  align = 'left',
  showArrows,
  getRef,
  arrowSize,
  arrowAreaHeight,
  slideTestId,
  bulletTestId,
  nextArrowTestId,
  prevArrowTestId,
  ...restProps
}: BaseGalleryProps): React.ReactNode => {
  const slidesStore = React.useRef<Record<string, HTMLDivElement | null>>({});
  const slidesManager = React.useRef<SlidesManagerState>(SLIDES_MANAGER_STATE);

  const rootRef = useExternRef(getRootRef);
  const viewportRef = useExternRef(getRef);
  const layerRef = React.useRef<HTMLDivElement>(null);
  const animationFrameRef = React.useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const shiftXCurrentRef = React.useRef<number>(0);
  const shiftXDeltaRef = React.useRef<number>(0);
  const initialized = React.useRef<boolean>(false);
  const { addToAnimationQueue, getAnimateFunction, startAnimation } = useSlideAnimation();

  const [controlElementsState, setControlElementsState] =
    React.useState<ControlElementsState>(CONTROL_ELEMENTS_STATE);

  const hasPointer = useAdaptivityHasPointer();

  const isCenterWithCustomWidth = slideWidth === 'custom' && align === 'center';

  const transformCssStyles = (shiftX: number, animation = false) => {
    shiftX = Math.round(shiftX);
    slidesManager.current.loopPoints.forEach((loopPoint) => {
      const { target, index } = loopPoint;
      const slide = slidesStore.current[index];
      if (slide) {
        slide.style.transform = `translate3d(${target(shiftX)}px, 0, 0)`;
      }
    });

    if (layerRef.current) {
      layerRef.current.style.transform = `translate3d(${shiftX}px, 0, 0)`;
      layerRef.current.style.transition = animation
        ? `transform ${ANIMATION_DURATION}ms cubic-bezier(.1, 0, .25, 1)`
        : '';
    }
  };

  const requestTransform = (shiftX: number, animation = false) => {
    const { snaps, contentSize, slides } = slidesManager.current;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      if (shiftX > snaps[0]) {
        shiftXCurrentRef.current = -contentSize + snaps[0];
        shiftX = shiftXCurrentRef.current + shiftXDeltaRef.current;
      }
      const lastPoint = slides[slides.length - 1].width + slides[slides.length - 1].coordX;

      if (shiftX <= -lastPoint) {
        shiftXCurrentRef.current = Math.abs(shiftXDeltaRef.current) + snaps[0];
      }
      transformCssStyles(shiftX, animation);
    });
  };

  const initializeSlides = () => {
    if (!rootRef.current || !viewportRef.current) {
      return;
    }
    let localSlides =
      React.Children.map(children, (_item, i): GallerySlidesState => {
        const elem = slidesStore.current[i] || { offsetLeft: 0, offsetWidth: 0 };
        return { coordX: elem.offsetLeft, width: elem.offsetWidth };
      }) || [];

    if (localSlides.length === 0) {
      initialized.current = false;
      return;
    }

    const containerWidth = rootRef.current.offsetWidth;
    const viewportOffsetWidth = viewportRef.current.offsetWidth;
    const layerWidth = localSlides.reduce((val, slide) => slide.width + val, 0);

    if (process.env.NODE_ENV === 'development') {
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
    if (align === 'center') {
      const firstSlideShift = (containerWidth - localSlides[0].width) / 2;
      localSlides = localSlides.map((item) => {
        return {
          width: item.width,
          coordX: item.coordX - firstSlideShift,
        };
      });
    }

    slidesManager.current = {
      ...slidesManager.current,
      viewportOffsetWidth,
      slides: localSlides,
      isFullyVisible: layerWidth <= containerWidth,
    };

    const snaps = localSlides.map((_, index) =>
      calculateIndent(index, slidesManager.current, isCenterWithCustomWidth),
    );

    let contentSize = -snaps[snaps.length - 1] + localSlides[localSlides.length - 1].width;
    if (align === 'center') {
      contentSize += snaps[0];
    }

    slidesManager.current.snaps = snaps;
    slidesManager.current.contentSize = contentSize;
    slidesManager.current.loopPoints = getLoopPoints(slidesManager.current, containerWidth);

    setControlElementsState({
      canSlideLeft: !slidesManager.current.isFullyVisible,
      canSlideRight: !slidesManager.current.isFullyVisible,
      isDraggable: !(dragDisabled || slidesManager.current.isFullyVisible),
    });

    shiftXCurrentRef.current = snaps[slideIndex];
    initialized.current = true;

    requestTransform(shiftXCurrentRef.current);
  };

  const onResize = () => {
    if (initialized.current) {
      initializeSlides();
    }
  };
  const { window } = useDOM();
  useResizeObserver(resizeSource === 'element' ? rootRef : window, onResize);

  useIsomorphicLayoutEffect(
    function performSlideChange() {
      if (!initialized.current) {
        return;
      }
      const { snaps, slides } = slidesManager.current;
      const indent = snaps[slideIndex];
      let startPoint = shiftXCurrentRef.current;

      /**
       * Переключаемся с последнего элемента на первый
       * Для корректной анимации мы прокручиваем последний слайд на всю длину (shiftX) "вперед"
       * В конце анимации при отрисовке следующего кадра задаем всем слайдам начальные значения
       */
      if (indent === snaps[0] && shiftXCurrentRef.current <= snaps[snaps.length - 1]) {
        const distance =
          Math.abs(snaps[snaps.length - 1]) + slides[slides.length - 1].width + startPoint;

        addToAnimationQueue(
          getAnimateFunction((progress) => {
            const shiftX = startPoint + progress * distance * -1;

            transformCssStyles(shiftX);

            if (shiftX <= snaps[snaps.length - 1] - slides[slides.length - 1].width) {
              requestAnimationFrame(() => {
                shiftXCurrentRef.current = indent;
                transformCssStyles(snaps[0]);
              });
            }
          }),
        );
        /**
         * Переключаемся с первого слайда на последний
         * Для корректной анимации сначала задаем первым видимым слайдам смещение
         * В следующем кадре начинаем анимация прокрутки "назад"
         */
      } else if (indent === snaps[snaps.length - 1] && shiftXCurrentRef.current === snaps[0]) {
        startPoint = indent - slides[slides.length - 1].width;

        addToAnimationQueue(() => {
          requestAnimationFrame(() => {
            const shiftX = indent - slides[slides.length - 1].width;
            transformCssStyles(shiftX);

            getAnimateFunction((progress) => {
              transformCssStyles(startPoint + progress * slides[slides.length - 1].width);
            })();
          });
        });
        /**
         * Если не обработаны `corner`-кейсы выше, то просто проигрываем анимацию смещения
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

      startAnimation();

      shiftXCurrentRef.current = indent;
    },
    [slideIndex],
  );

  useMutationObserver(layerRef, initializeSlides);

  useIsomorphicLayoutEffect(initializeSlides, [align, slideWidth]);

  const calculateMinDeltaXToSlide = () => {
    return slidesManager.current.slides[slideIndex].width * SLIDE_THRESHOLD;
  };

  const slideLeft = (event: React.MouseEvent) => {
    if (slideIndex > 0) {
      shiftXCurrentRef.current += calculateMinDeltaXToSlide();
    }
    onChange?.(
      (slideIndex - 1 + slidesManager.current.slides.length) % slidesManager.current.slides.length,
    );
    onPrevClick?.(event);
  };

  const slideRight = (event: React.MouseEvent) => {
    if (slideIndex < slidesManager.current.slides.length - 1) {
      shiftXCurrentRef.current -= calculateMinDeltaXToSlide();
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
    }
  };

  const onMoveX = (e: CustomTouchEvent) => {
    if (controlElementsState.isDraggable) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        if (shiftXDeltaRef.current !== e.shiftX) {
          shiftXDeltaRef.current = e.shiftX;
          requestTransform(shiftXCurrentRef.current + shiftXDeltaRef.current);
        }
      }
    }
  };

  const onEnd = (e: CustomTouchEvent) => {
    if (controlElementsState.isDraggable) {
      let targetIndex = slideIndex;
      if (e.isSlide) {
        targetIndex = getTargetIndex(
          slidesManager.current.slides,
          slideIndex,
          shiftXCurrentRef.current,
          shiftXDeltaRef.current,
        );
      }
      onDragEnd?.(e, targetIndex);

      if (targetIndex !== slideIndex) {
        shiftXCurrentRef.current = shiftXCurrentRef.current + shiftXDeltaRef.current;
        onChange?.(targetIndex);
      } else {
        const initialShiftX = slidesManager.current.snaps[targetIndex];
        requestTransform(initialShiftX, true);
      }
    }
  };

  const setSlideRef = (slideRef: HTMLDivElement | null, slideIndex: number) => {
    slidesStore.current[slideIndex] = slideRef;
  };

  const { canSlideLeft, canSlideRight, isDraggable } = controlElementsState;

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        slideWidth === 'custom' && styles.customWidth,
        isDraggable && styles.draggable,
      )}
      getRootRef={rootRef}
    >
      <GalleryViewPort
        slideWidth={slideWidth}
        slideTestId={slideTestId}
        onStart={onStart}
        onMoveX={onMoveX}
        onEnd={onEnd}
        viewportRef={viewportRef}
        layerRef={layerRef}
        setSlideRef={setSlideRef}
      >
        {children}
      </GalleryViewPort>

      {bullets && (
        <Bullets
          bullets={bullets}
          slideIndex={slideIndex}
          count={React.Children.count(children)}
          bulletTestId={bulletTestId}
        />
      )}
      <ScrollArrows
        hasPointer={hasPointer}
        canSlideLeft={canSlideLeft}
        canSlideRight={canSlideRight}
        onSlideRight={slideRight}
        onSlideLeft={slideLeft}
        showArrows={showArrows}
        arrowSize={arrowSize}
        arrowAreaHeight={arrowAreaHeight}
        prevArrowTestId={prevArrowTestId}
        nextArrowTestId={nextArrowTestId}
      />
    </RootComponent>
  );
};
