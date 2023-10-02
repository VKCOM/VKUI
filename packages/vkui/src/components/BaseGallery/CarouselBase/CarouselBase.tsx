import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../../hooks/useAdaptivityHasPointer';
import { useExternRef } from '../../../hooks/useExternRef';
import { useGlobalEventListener } from '../../../hooks/useGlobalEventListener';
import { useDOM } from '../../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../../lib/warnOnce';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ScrollArrow } from '../../ScrollArrow/ScrollArrow';
import { Touch, TouchEvent } from '../../Touch/Touch';
import { BaseGalleryProps, GallerySlidesState } from '../types';
import { ANIMATION_DURATION, CONTROL_ELEMENTS_STATE, SLIDES_MANAGER_STATE } from './constants';
import { calculateIndent, getLoopPoints, getTargetIndex } from './helpers';
import { useSlideAnimation } from './hooks';
import { ControlElementsState, SlidesManagerState } from './types';
import styles from '../BaseGallery.module.css';

const stylesBullets = {
  dark: styles['BaseGallery__bullets--dark'],
  light: styles['BaseGallery__bullets--light'],
};

const warn = warnOnce('Gallery');

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

  const { window } = useDOM();
  const hasPointer = useAdaptivityHasPointer();

  const isCenterWithCustomWidth = slideWidth === 'custom' && align === 'center';

  const transformCssStyles = (shiftX: number, animation = false) => {
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
          'Ширины слайдов недостаточно для корректной работы свойства "looped". Пожалуйста, сделайте её больше."',
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
      isDraggable: isDraggableProp && !slidesManager.current.isFullyVisible,
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

  useGlobalEventListener(window, 'resize', onResize);

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

  useIsomorphicLayoutEffect(() => {
    initializeSlides();
  }, [children, align, slideWidth]);

  const slideLeft = (event: React.MouseEvent) => {
    onChange?.(
      (slideIndex - 1 + slidesManager.current.slides.length) % slidesManager.current.slides.length,
    );
    onPrevClick?.(event);
  };

  const slideRight = (event: React.MouseEvent) => {
    onChange?.((slideIndex + 1) % slidesManager.current.slides.length);
    onNextClick?.(event);
  };

  const onStart = (e: TouchEvent) => {
    e.originalEvent.stopPropagation();
    onDragStart?.(e);
    shiftXCurrentRef.current = slidesManager.current.snaps[slideIndex];
    shiftXDeltaRef.current = 0;
  };

  const onMoveX = (e: TouchEvent) => {
    if (isDraggableProp && !slidesManager.current.isFullyVisible) {
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
  };

  const setSlideRef = (slideRef: HTMLDivElement | null, slideIndex: number) => {
    slidesStore.current[slideIndex] = slideRef;
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
