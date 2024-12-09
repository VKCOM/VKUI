'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { RootComponent } from '../RootComponent/RootComponent';
import { type CustomTouchEvent } from '../Touch/Touch';
import { Bullets } from './Bullets';
import { GalleryViewPort } from './GalleryViewPort';
import { ScrollArrows } from './ScrollArrows';
import { calcMax, calcMin } from './helpers';
import type { BaseGalleryProps, GallerySlidesState, LayoutState, ShiftingState } from './types';
import styles from './BaseGallery.module.css';

const ANIMATION_DURATION = 0.24;

const LAYOUT_DEFAULT_STATE = {
  containerWidth: 0,
  viewportOffsetWidth: 0,
  layerWidth: 0,
  min: 0,
  max: 0,
  slides: [],
  isFullyVisible: true,
};

const SHIFT_DEFAULT_STATE = {
  animation: undefined,
  shiftX: 0,
  dragging: false,
  deltaX: 0,
  indent: 0,
};

export const BaseGallery = ({
  bullets = false,
  getRootRef,
  children,
  slideWidth = '100%',
  slideIndex = 0,
  dragDisabled = false,
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
  const { window } = useDOM();
  const slidesStore = React.useRef<Record<string, HTMLDivElement | null>>({});
  const layoutState = React.useRef<LayoutState>(LAYOUT_DEFAULT_STATE);
  const [shiftState, setShiftState] = React.useState<ShiftingState>(SHIFT_DEFAULT_STATE);

  const rootRef = useExternRef(getRootRef);
  const viewportRef = useExternRef(getRef);

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

      return validateIndent(-1 * coordX);
    }
    return 0;
  };

  /*
   * Считает отступ слоя галереи во время драга
   */
  const calculateDragIndent = () => {
    const localMax = layoutState.current.max ?? 0;
    const localMin = layoutState.current.min ?? 0;
    const indent = shiftState.shiftX + shiftState.deltaX;

    if (indent > localMax) {
      return localMax + Number((indent - localMax) / 3);
    } else if (indent < localMin) {
      return localMin + Number((indent - localMin) / 3);
    }

    return indent;
  };

  const initializeSlides = (options: { animation?: boolean } = {}) => {
    const localSlides =
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

    const currentSlideOffsetOnCenterAlignment =
      (localContainerWidth - (localSlides[slideIndex]?.width ?? 0)) / 2;
    const isFullyVisible =
      align === 'center'
        ? localLayerWidth + currentSlideOffsetOnCenterAlignment <= localContainerWidth
        : localLayerWidth <= localContainerWidth;

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
      isFullyVisible,
    };

    setShiftState((prevState) => ({
      ...prevState,
      shiftX: adjustShiftX ? calculateIndent(slideIndex) : prevState.shiftX,
      animation: options.animation ?? prevState.shiftX === validateIndent(prevState.shiftX),
    }));
  };

  const onResize = () => {
    if (shiftState.animation !== undefined) {
      initializeSlides({ animation: false });
    }
  };
  const canUseResizeObserver =
    window && 'ResizeObserver' in window && window.ResizeObserver !== undefined;
  useResizeObserver(canUseResizeObserver ? rootRef : null, onResize);
  useGlobalEventListener(canUseResizeObserver ? null : window, 'resize', onResize);

  useIsomorphicLayoutEffect(() => {
    initializeSlides({ animation: false });
  }, [children, align, slideWidth]);

  useIsomorphicLayoutEffect(() => {
    if (shiftState.animation !== undefined) {
      setShiftState((prevState) => ({
        ...prevState,
        animation: true,
        deltaX: 0,
        shiftX: calculateIndent(slideIndex ?? 0),
      }));
    }
  }, [slideIndex]);

  const slideLeft = (event: React.MouseEvent) => {
    onChange?.(slideIndex - 1);
    onPrevClick?.(event);
  };

  const slideRight = (event: React.MouseEvent) => {
    onChange?.(slideIndex + 1);
    onNextClick?.(event);
  };

  /*
   * Получает индекс слайда, к которому будет осуществлен переход
   */
  const getTarget = (e: CustomTouchEvent) => {
    const expectDeltaX = (shiftState.deltaX / e.duration) * 240 * 0.6;
    const shift =
      shiftState.shiftX + shiftState.deltaX + expectDeltaX - (layoutState.current.max ?? 0);
    const direction = shiftState.deltaX < 0 ? 1 : -1;

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
        if (Math.abs(shiftState.deltaX) > layoutState.current.slides[targetSlide].width * 0.05) {
          targetIndex = targetSlide;
        }
      }
    }

    return targetIndex;
  };

  const isDraggable = !dragDisabled && !layoutState.current.isFullyVisible;

  const onStart = (e: CustomTouchEvent) => {
    e.originalEvent.stopPropagation();
    if (isDraggable) {
      onDragStart?.(e);
      setShiftState((prevState) => ({ ...prevState, animation: false }));
    }
  };

  const onMoveX = (e: CustomTouchEvent) => {
    if (isDraggable) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        if (shiftState.deltaX !== e.shiftX) {
          setShiftState((prevState) => ({
            ...prevState,
            deltaX: e.shiftX,
            dragging: e.isSlideX,
          }));
        }
      }
    }
  };

  const onEnd = (e: CustomTouchEvent) => {
    if (isDraggable) {
      const targetIndex = e.isSlide ? getTarget(e) : (slideIndex ?? 0);
      onDragEnd?.(e, targetIndex);

      const nextShiftState: Partial<ShiftingState> = {
        animation: true,
        dragging: false,
        deltaX: 0,
      };

      const shiftXStick = calculateDragIndent();
      if (targetIndex !== slideIndex) {
        // Сохраняем сдвиг слайда в том положении, в каком его оставили после драга (fix issue #2185)
        nextShiftState.shiftX = shiftXStick;
      }

      setShiftState((prevState) => ({ ...prevState, ...nextShiftState }));
      if (targetIndex !== slideIndex) {
        onChange?.(targetIndex);
      }
    }
  };

  const indent = shiftState.dragging ? calculateDragIndent() : shiftState.shiftX;

  const layerStyle = {
    transform: `translateX(${indent}px)`,
    transition: shiftState.animation
      ? `transform ${ANIMATION_DURATION}s cubic-bezier(.1, 0, .25, 1)`
      : 'none',
  };

  const setSlideRef = (slideRef: HTMLDivElement | null, slideIndex: number) => {
    slidesStore.current[`slide-${slideIndex}`] = slideRef;
  };

  // shiftX is negative number <= 0, we can swipe back only if it is < 0
  const canSlideLeft = !layoutState.current.isFullyVisible && shiftState.shiftX < 0;

  const canSlideRight =
    !layoutState.current.isFullyVisible &&
    // we can't move right when gallery layer fully scrolled right, if gallery aligned by left side
    ((align === 'left' &&
      layoutState.current.containerWidth - shiftState.shiftX <
        (layoutState.current.layerWidth ?? 0)) ||
      // otherwise we need to check current slide index (align = right or align = center)
      (align !== 'left' && slideIndex < layoutState.current.slides.length - 1));

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        align === 'center' && styles.alignCenter,
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
        layerStyle={layerStyle}
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
        nextArrowTestId={nextArrowTestId}
        prevArrowTestId={prevArrowTestId}
      />
    </RootComponent>
  );
};
