import { useCallback, useEffect, useRef, useState } from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { useEventListener } from '../../hooks/useEventListener';
import { useExternRef } from '../../hooks/useExternRef';
import { easeInOutSine } from '../../lib/fx';
import { HasRef, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { ScrollArrow } from '../ScrollArrow/ScrollArrow';
import styles from './HorizontalScroll.module.css';

interface ScrollContext {
  scrollElement: HTMLElement | null;
  scrollAnimationDuration: number;
  animationQueue: VoidFunction[];
  getScrollPosition: (currentPosition: number) => number;
  onScrollToRightBorder: VoidFunction;
  onScrollEnd: VoidFunction;
  onScrollStart: VoidFunction;
  /**
   * Начальная ширина прокрутки.
   * В некоторых случаях может отличаться от текущей ширины прокрутки из-за transforms: translate
   */
  initialScrollWidth: number;
}

export type ScrollPositionHandler = (currentPosition: number) => number;

export interface HorizontalScrollProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Функция для расчета величины прокрутки при клике на левую стрелку.
   */
  getScrollToLeft?: ScrollPositionHandler;
  /**
   * Функция для расчета величины прокрутки при клике на правую стрелку.
   */
  getScrollToRight?: ScrollPositionHandler;
  arrowSize?: 'm' | 'l';
  /**
   * Смещает иконки кнопок навигации по вертикали.
   */
  arrowOffsetY?: number | string;
  showArrows?: boolean | 'always';
  scrollAnimationDuration?: number;
  /**
   * Добавляет возможность прокручивать контент на любое колесо мыши.
   * По умолчанию прокручивается как любой горизонтальный контент через shift.
   */
  scrollOnAnyWheel?: boolean;
}

/**
 * timing method
 */
function now() {
  return performance && performance.now ? performance.now() : Date.now();
}

/**
 * Округляем el.scrollLeft
 * https://github.com/VKCOM/VKUI/pull/2445
 */
const roundUpElementScrollLeft = (el: HTMLElement) => Math.ceil(el.scrollLeft);

/**
 * Код анимации скрола, на основе полифила: https://github.com/iamdustan/smoothscroll
 * Константа взята из полифила (468), на дизайн-ревью уточнили до 250
 * @var {number} SCROLL_ONE_FRAME_TIME время анимации скролла
 */
const SCROLL_ONE_FRAME_TIME = 250;

function doScroll({
  scrollElement,
  getScrollPosition,
  animationQueue,
  onScrollToRightBorder,
  onScrollEnd,
  onScrollStart,
  initialScrollWidth,
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
}: ScrollContext) {
  if (!scrollElement || !getScrollPosition) {
    return;
  }

  /**
   * максимальное значение сдвига влево
   */
  const maxLeft = initialScrollWidth - scrollElement.offsetWidth;

  let startLeft = roundUpElementScrollLeft(scrollElement);
  let endLeft = getScrollPosition(startLeft);

  onScrollStart();

  if (endLeft >= maxLeft) {
    onScrollToRightBorder();
    endLeft = maxLeft;
  }

  const startTime = now();

  (function scroll() {
    if (!scrollElement) {
      onScrollEnd();
      return;
    }

    const time = now();
    const elapsed = Math.min((time - startTime) / scrollAnimationDuration, 1);

    const value = easeInOutSine(elapsed);

    const currentLeft = startLeft + (endLeft - startLeft) * value;
    scrollElement.scrollLeft = Math.ceil(currentLeft);

    if (roundUpElementScrollLeft(scrollElement) !== Math.max(0, endLeft) && elapsed !== 1) {
      requestAnimationFrame(scroll);
      return;
    }

    onScrollEnd();
    animationQueue.shift();
    if (animationQueue.length > 0) {
      animationQueue[0]();
    }
  })();
}

/**
 * @see https://vkcom.github.io/VKUI/#/HorizontalScroll
 */
export const HorizontalScroll = ({
  children,
  getScrollToLeft,
  getScrollToRight,
  showArrows = true,
  arrowSize = 'l',
  arrowOffsetY,
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
  getRef,
  scrollOnAnyWheel = false,
  ...restProps
}: HorizontalScrollProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isCustomScrollingRef = useRef(false);

  const scrollerRef = useExternRef(getRef);

  const animationQueue = useRef<VoidFunction[]>([]);

  const hasPointer = useAdaptivityHasPointer();

  const scrollTo = useCallback(
    (getScrollPosition: ScrollPositionHandler) => {
      const scrollElement = scrollerRef.current;

      animationQueue.current.push(() =>
        doScroll({
          scrollElement,
          getScrollPosition,
          animationQueue: animationQueue.current,
          onScrollToRightBorder: () => setCanScrollRight(false),
          onScrollEnd: () => (isCustomScrollingRef.current = false),
          onScrollStart: () => (isCustomScrollingRef.current = true),
          initialScrollWidth: scrollElement?.firstElementChild?.scrollWidth || 0,
          scrollAnimationDuration,
        }),
      );
      if (animationQueue.current.length === 1) {
        animationQueue.current[0]();
      }
    },
    [scrollAnimationDuration, scrollerRef],
  );

  const scrollToLeft = useCallback(() => {
    const getScrollPosition =
      getScrollToLeft ?? ((i: number) => i - scrollerRef.current!.offsetWidth);
    scrollTo(getScrollPosition);
  }, [getScrollToLeft, scrollTo, scrollerRef]);

  const scrollToRight = useCallback(() => {
    const getScrollPosition =
      getScrollToRight ?? ((i: number) => i + scrollerRef.current!.offsetWidth);
    scrollTo(getScrollPosition);
  }, [getScrollToRight, scrollTo, scrollerRef]);

  const calculateArrowsVisibility = useCallback(() => {
    if (showArrows && hasPointer && scrollerRef.current && !isCustomScrollingRef.current) {
      const scrollElement = scrollerRef.current;

      setCanScrollLeft(scrollElement.scrollLeft > 0);
      setCanScrollRight(
        roundUpElementScrollLeft(scrollElement) + scrollElement.offsetWidth <
          scrollElement.scrollWidth,
      );
    }
  }, [hasPointer, scrollerRef, showArrows]);

  const scrollEvent = useEventListener('scroll', calculateArrowsVisibility);
  useEffect(
    function addScrollerRefToScrollEvent() {
      if (!scrollerRef.current) {
        return noop;
      }

      scrollEvent.add(scrollerRef.current);
      return scrollEvent.remove;
    },
    [scrollEvent, scrollerRef],
  );

  useEffect(calculateArrowsVisibility, [calculateArrowsVisibility, children]);

  /**
   * Прокрутка с помощью любого колеса мыши
   */
  const onwheel = useCallback(
    (e: WheelEvent) => {
      scrollerRef.current!.scrollBy({ left: e.deltaX + e.deltaY, behavior: 'auto' });
      e.preventDefault();
    },
    [scrollerRef],
  );

  const wheelEvent = useEventListener('wheel', onwheel);
  useEffect(
    function addScrollerRefToWheelEvent() {
      if (!scrollerRef.current || !scrollOnAnyWheel) {
        return noop;
      }

      wheelEvent.add(scrollerRef.current);

      return wheelEvent.remove;
    },
    [wheelEvent, scrollerRef, scrollOnAnyWheel],
  );

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['HorizontalScroll'],
        'vkuiInternalHorizontalScroll',
        showArrows === 'always' && styles['HorizontalScroll--withConstArrows'],
      )}
      onMouseEnter={calculateArrowsVisibility}
    >
      {showArrows && (hasPointer || hasPointer === undefined) && canScrollLeft && (
        <ScrollArrow
          size={arrowSize}
          offsetY={arrowOffsetY}
          direction="left"
          className={classNames(
            styles['HorizontalScroll__arrow'],
            styles['HorizontalScroll__arrowLeft'],
          )}
          onClick={scrollToLeft}
        />
      )}
      {showArrows && (hasPointer || hasPointer === undefined) && canScrollRight && (
        <ScrollArrow
          size={arrowSize}
          offsetY={arrowOffsetY}
          direction="right"
          className={classNames(
            styles['HorizontalScroll__arrow'],
            styles['HorizontalScroll__arrowRight'],
          )}
          onClick={scrollToRight}
        />
      )}
      <div className={styles['HorizontalScroll__in']} ref={scrollerRef}>
        <div className={styles['HorizontalScroll__in-wrapper']}>{children}</div>
      </div>
    </RootComponent>
  );
};
