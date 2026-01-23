'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useHover } from '../Clickable/useState';
import { RootComponent } from '../RootComponent/RootComponent';
import { CarouselViewPort } from './CarouselViewPort';
import { Bullets } from './components/Bullets';
import { ScrollArrows } from './components/ScrollArrows';
import { useActiveSlide } from './helpers/useActiveSlide';
import { useCarouselDrag } from './helpers/useCarouselDrag';
import { useControlsState } from './helpers/useControlsState';
import { useScrollToSlide } from './helpers/useScrollToSlide';
import { useSlideNavigation } from './helpers/useSlideNavigation';
import type { BaseCarouselProps } from './types';
import styles from './Carousel.module.css';

export const CarouselBase = ({
  bullets = false,
  getRootRef,
  children,
  slideWidth = '100%',
  slideIndex = 0,
  onChange,
  onScroll,
  onPrevClick,
  onNextClick,
  align = 'left',
  showArrows = false,
  arrowSize,
  arrowAreaHeight,
  slideTestId,
  bulletTestId,
  nextArrowTestId,
  prevArrowTestId,
  slideLabel,
  slideRoleDescription,
  getRef,
  looped = false,
  dragDisabled = false,
  onDragStart,
  onDragEnd,
  animationDuration,
  animationEasing,
  resizeSource = 'window',
  ...restProps
}: BaseCarouselProps): React.ReactNode => {
  const rootRef = useExternRef(getRootRef);
  const viewportRef = useExternRef(getRef);
  const slidesContainerRef = React.useRef<HTMLDivElement | null>(null);
  const slidesCount = React.Children.count(children);
  const [localSlideIndex, setLocalSlideIndex] = React.useState(slideIndex);

  const slidesContainerId = React.useId();

  const { scrollToSlide, isAnimatingRef } = useScrollToSlide({
    slidesContainerRef,
    align,
    animationDuration,
    animationEasing,
  });

  const { canSlideLeft, canSlideRight, canDrag, updateControlsState } = useControlsState({
    slidesContainerRef,
    looped,
    dragDisabled,
    showArrows,
  });

  const { onStart, onMoveX, onEnd, isDraggingRef } = useCarouselDrag({
    dragDisabled: !canDrag,
    slidesContainerRef,
    slideIndex: localSlideIndex,
    isAnimatingRef,
    scrollToSlide,
    onChange,
    onDragStart,
    onDragEnd,
    looped,
    align,
  });

  const handleActiveSlideScroll = useActiveSlide({
    slidesContainerRef,
    slideIndex: localSlideIndex,
    isAnimatingRef,
    isDraggingRef,
    looped,
    setLocalSlideIndex,
    onChange: onChange!,
  });

  const { slideLeft, slideRight } = useSlideNavigation({
    slidesContainerRef,
    slideIndex: localSlideIndex,
    slidesCount,
    looped,
    onChange,
    onPrevClick,
    onNextClick,
  });

  const handleScroll = React.useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      updateControlsState();
      onScroll?.(e);
      handleActiveSlideScroll();
    },
    [updateControlsState, onScroll, handleActiveSlideScroll],
  );

  const { window } = useDOM();
  useResizeObserver(resizeSource === 'element' ? rootRef : window, updateControlsState);
  React.useEffect(() => updateControlsState(), [updateControlsState]);

  React.useEffect(
    function performSlideChange() {
      if (slideIndex !== localSlideIndex) {
        if (looped) {
          let direction: 'forward' | 'backward' | 'auto' = 'auto';
          if (localSlideIndex === 0 && slideIndex === slidesCount - 1) {
            // С первого на последний
            direction = 'backward';
          } else if (localSlideIndex === slidesCount - 1 && slideIndex === 0) {
            // С последнего на первый
            direction = 'forward';
          }
          scrollToSlide(slideIndex, localSlideIndex, direction);
        } else {
          scrollToSlide(slideIndex, localSlideIndex);
        }

        setLocalSlideIndex(slideIndex);
      }
    },
    [localSlideIndex, looped, scrollToSlide, slideIndex, slidesCount],
  );

  useIsomorphicLayoutEffect(
    function normalizeScrollPositionWhenLoop() {
      if (!looped) {
        return;
      }
      const container = slidesContainerRef.current;
      if (!container) {
        return;
      }
      const slides = Array.from(container.children) as HTMLElement[];
      const notFakeSlides = slides.filter((slide) => slide.dataset['fake'] === undefined);
      const realSlide = notFakeSlides[localSlideIndex];
      container.scrollLeft = realSlide.offsetLeft;
    },
    [looped],
  );

  const { isHovered, ...hoverHandlers } = useHover();

  return (
    <RootComponent
      {...restProps}
      {...hoverHandlers}
      role="region"
      aria-roledescription="Карусель"
      baseClassName={classNames(
        styles.host,
        slideWidth === 'custom' && styles.customWidth,
        isHovered && styles.hover,
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
        arrowPrevLabel={restProps.arrowPrevLabel}
        arrowNextLabel={restProps.arrowNextLabel}
        prevArrowTestId={prevArrowTestId}
        nextArrowTestId={nextArrowTestId}
        slidesContainerId={slidesContainerId}
      />
      <CarouselViewPort
        slideWidth={slideWidth}
        slideTestId={slideTestId}
        getRootRef={viewportRef as React.Ref<HTMLDivElement>}
        slidesContainerRef={slidesContainerRef}
        slidesContainerId={slidesContainerId}
        slideLabel={slideLabel}
        slideRoleDescription={slideRoleDescription}
        onChange={onChange}
        onScroll={handleScroll}
        align={align}
        looped={looped}
        onStart={onStart}
        onMoveX={onMoveX}
        onEnd={onEnd}
      >
        {children}
      </CarouselViewPort>

      {bullets && (
        <Bullets
          bullets={bullets}
          slideIndex={localSlideIndex}
          count={slidesCount}
          bulletTestId={bulletTestId}
        />
      )}
    </RootComponent>
  );
};
