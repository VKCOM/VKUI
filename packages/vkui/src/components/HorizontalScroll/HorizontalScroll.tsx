import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { useEventListener } from '../../hooks/useEventListener';
import { useExternRef } from '../../hooks/useExternRef';
import { easeInOutSine } from '../../lib/fx';
import { HasRef } from '../../types';
import { HorizontalScrollArrow } from './HorizontalScrollArrow';
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
  extends React.HTMLAttributes<HTMLDivElement>,
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
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
  getRef,
  className,
  scrollOnAnyWheel = false,
  ...restProps
}: HorizontalScrollProps) => {
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const isCustomScrollingRef = React.useRef(false);

  const scrollerRef = useExternRef(getRef);

  const animationQueue = React.useRef<VoidFunction[]>([]);

  const hasPointer = useAdaptivityHasPointer();

  const scrollTo = React.useCallback(
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

  const scrollToLeft = React.useCallback(() => {
    const getScrollPosition =
      getScrollToLeft ?? ((i: number) => i - scrollerRef.current!.offsetWidth);
    scrollTo(getScrollPosition);
  }, [getScrollToLeft, scrollTo, scrollerRef]);

  const scrollToRight = React.useCallback(() => {
    const getScrollPosition =
      getScrollToRight ?? ((i: number) => i + scrollerRef.current!.offsetWidth);
    scrollTo(getScrollPosition);
  }, [getScrollToRight, scrollTo, scrollerRef]);

  const onscroll = React.useCallback(() => {
    if (showArrows && hasPointer && scrollerRef.current && !isCustomScrollingRef.current) {
      const scrollElement = scrollerRef.current;

      setCanScrollLeft(scrollElement.scrollLeft > 0);
      setCanScrollRight(
        roundUpElementScrollLeft(scrollElement) + scrollElement.offsetWidth <
          scrollElement.scrollWidth,
      );
    }
  }, [hasPointer, scrollerRef, showArrows]);

  const scrollEvent = useEventListener('scroll', onscroll);
  React.useEffect(() => {
    if (scrollerRef.current) {
      scrollEvent.add(scrollerRef.current);
    }
  }, [scrollEvent, scrollerRef]);
  React.useEffect(onscroll, [scrollerRef, children, onscroll]);

  /**
   * Прокрутка с помощью любого колеса мыши
   */
  const onwheel = React.useCallback(
    (e: WheelEvent) => {
      scrollerRef.current!.scrollBy({ left: e.deltaX + e.deltaY, behavior: 'auto' });
      e.preventDefault();
    },
    [scrollerRef],
  );

  const wheelEvent = useEventListener('wheel', onwheel);
  React.useEffect(() => {
    if (!scrollerRef.current || !scrollOnAnyWheel) {
      return noop;
    }

    wheelEvent.add(scrollerRef.current);

    return wheelEvent.remove;
  }, [wheelEvent, scrollerRef, scrollOnAnyWheel]);

  return (
    <div
      {...restProps}
      className={classNames(
        styles['HorizontalScroll'],
        'vkuiInternalHorizontalScroll',
        showArrows === 'always' && 'vkuiInternalHorizontalScroll--withConstArrows',
        className,
      )}
    >
      <div className={styles['HorizontalScroll__in']} ref={scrollerRef}>
        <div className={styles['HorizontalScroll__in-wrapper']}>{children}</div>
      </div>
      {showArrows && (hasPointer || hasPointer === undefined) && canScrollLeft && (
        <HorizontalScrollArrow
          size={arrowSize}
          direction="left"
          className={styles['HorizontalScroll__arrowLeft']}
          onClick={scrollToLeft}
        />
      )}
      {showArrows && (hasPointer || hasPointer === undefined) && canScrollRight && (
        <HorizontalScrollArrow
          size={arrowSize}
          direction="right"
          className={styles['HorizontalScroll__arrowRight']}
          onClick={scrollToRight}
        />
      )}
    </div>
  );
};
