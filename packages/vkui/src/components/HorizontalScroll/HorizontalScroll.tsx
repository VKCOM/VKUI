'use client';

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useExternRef } from '../../hooks/useExternRef';
import { easeInOutSine } from '../../lib/fx';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasRef, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { ScrollArrow, type ScrollArrowProps } from '../ScrollArrow/ScrollArrow';
import styles from './HorizontalScroll.module.css';

interface ScrollContext {
  scrollElement: HTMLElement | null;
  scrollAnimationDuration: number;
  animationQueue: VoidFunction[];
  getScrollPosition: (currentPosition: number) => number;
  onScrollToEndBorder: VoidFunction;
  onScrollEnd: VoidFunction;
  onScrollStart: VoidFunction;
  /**
   * Начальная ширина прокрутки.
   * В некоторых случаях может отличаться от текущей ширины прокрутки из-за transforms: translate
   */
  initialScrollWidth: number;
  textDirection: 'ltr' | 'rtl';
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
  arrowSize?: ScrollArrowProps['size'];
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
  /**
   * Передает атрибут `data-testid` для кнопки прокрутки горизонтального скролла в направлении предыдущего элемента
   */
  prevButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки прокрутки горизонтального скролла в направлении следующего элемента
   */
  nextButtonTestId?: string;
  /**
   * Позволяет поменять тег используемый для обертки над контентом, прокинутым в `children`
   */
  ContentWrapperComponent?: React.ElementType;
  /**
   * `ref` для обертки над контентом, прокинутым в `children`
   */
  contentWrapperRef?: React.Ref<HTMLElement>;
  /**
   * Специфичный `className` для обертки над контентом, прокинутым в `children`
   */
  contentWrapperClassName?: string;
}

/**
 * timing method
 */
function now() {
  return performance && performance.now ? performance.now() : Date.now();
}

/**
 * Округление к большему по модулю
 *
 * ## Пример
 *
 * ```ts
 * import { strict as assert } from 'node:assert';
 *
 * assert.equal(roundingAwayFromZero(5.1), 6)
 * assert.equal(roundingAwayFromZero(-5.1), -6)
 * ```
 */
function roundingAwayFromZero(value: number): number {
  return value > 0 ? Math.ceil(value) : Math.floor(value);
}

/**
 * Округляем el.scrollLeft
 * https://github.com/VKCOM/VKUI/pull/2445
 */
const roundUpElementScrollLeft = (el: HTMLElement) => roundingAwayFromZero(el.scrollLeft);

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
  onScrollToEndBorder,
  onScrollEnd,
  onScrollStart,
  initialScrollWidth,
  scrollAnimationDuration,
  textDirection,
}: ScrollContext) {
  if (!scrollElement || !getScrollPosition) {
    return;
  }

  /**
   * крайнее значение сдвига
   */
  const extremeScrollLeft =
    (textDirection === 'ltr' ? 1 : -1) * (initialScrollWidth - scrollElement.offsetWidth);

  let startScrollLeft = roundUpElementScrollLeft(scrollElement);
  let endScrollLeft = getScrollPosition(startScrollLeft);

  onScrollStart();

  /**
   * Если окончание прокрутки вышло за ноль
   */
  if (startScrollLeft * endScrollLeft < 0) {
    endScrollLeft = 0;
  }

  if (Math.abs(endScrollLeft) >= Math.abs(extremeScrollLeft)) {
    onScrollToEndBorder();
    endScrollLeft = extremeScrollLeft;
  }

  const startTime = now();

  (function scroll() {
    const time = now();
    const elapsed = Math.min((time - startTime) / scrollAnimationDuration, 1);

    const value = easeInOutSine(elapsed);

    const currentScrollLeft = startScrollLeft + (endScrollLeft - startScrollLeft) * value;
    scrollElement.scrollLeft = roundingAwayFromZero(currentScrollLeft);

    const scrollEnd =
      textDirection === 'ltr' ? Math.max(0, endScrollLeft) : Math.min(0, endScrollLeft);
    if (roundUpElementScrollLeft(scrollElement) !== scrollEnd && elapsed !== 1) {
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
  arrowSize = 'm',
  arrowOffsetY,
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
  getRef,
  scrollOnAnyWheel = false,
  prevButtonTestId,
  nextButtonTestId,
  getRootRef,
  // ContentWrapper
  ContentWrapperComponent = 'div',
  contentWrapperRef,
  contentWrapperClassName,
  ...restProps
}: HorizontalScrollProps): React.ReactNode => {
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);
  const direction = useConfigDirection();
  const setCanScrollStart = direction === 'ltr' ? setCanScrollLeft : setCanScrollRight;
  const setCanScrollEnd = direction === 'ltr' ? setCanScrollRight : setCanScrollLeft;

  const isCustomScrollingRef = React.useRef(false);

  const scrollerRef = useExternRef(getRef);

  const rootRef = useExternRef(getRootRef);

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
          onScrollToEndBorder: () => setCanScrollEnd(false),
          onScrollEnd: () => (isCustomScrollingRef.current = false),
          onScrollStart: () => (isCustomScrollingRef.current = true),
          initialScrollWidth: scrollElement?.firstElementChild?.scrollWidth || 0,
          scrollAnimationDuration,
          textDirection: direction,
        }),
      );
      if (animationQueue.current.length === 1) {
        animationQueue.current[0]();
      }
    },
    [scrollerRef, scrollAnimationDuration, direction, setCanScrollEnd],
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

  const calculateArrowsVisibility = React.useCallback(() => {
    if (showArrows && hasPointer && scrollerRef.current && !isCustomScrollingRef.current) {
      const scrollElement = scrollerRef.current;

      setCanScrollStart(scrollElement.scrollLeft !== 0);
      setCanScrollEnd(
        Math.abs(roundUpElementScrollLeft(scrollElement)) + scrollElement.offsetWidth <
          scrollElement.scrollWidth,
      );
    }
  }, [showArrows, hasPointer, scrollerRef, setCanScrollStart, setCanScrollEnd]);

  React.useEffect(calculateArrowsVisibility, [calculateArrowsVisibility, children]);

  useIsomorphicLayoutEffect(
    function addWheelEventHandler() {
      if (!rootRef.current) {
        return noop;
      }
      /**
       * Прокрутка с помощью любого колеса мыши
       */
      const onWheel = (e: WheelEvent) => {
        const left = e.deltaX + (scrollOnAnyWheel ? e.deltaY : 0);
        scrollerRef.current!.scrollBy({ left, behavior: 'auto' });
        if (e.deltaY && scrollOnAnyWheel) {
          e.preventDefault();
        }
      };
      const listenerOptions = { passive: false };
      rootRef.current?.addEventListener('wheel', onWheel, listenerOptions);
      // @ts-expect-error: TS2769 В интерфейсе EventListenerOptions для wheel нет passive свойства
      return () => rootRef.current?.removeEventListener('wheel', onWheel, listenerOptions);
    },
    [rootRef, scrollOnAnyWheel, scrollerRef],
  );

  return (
    <RootComponent
      {...restProps}
      getRootRef={rootRef}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalHorizontalScroll',
        showArrows === 'always' && styles.withConstArrows,
      )}
      onMouseEnter={calculateArrowsVisibility}
    >
      {showArrows && (hasPointer || hasPointer === undefined) && canScrollLeft && (
        <ScrollArrow
          data-testid={prevButtonTestId}
          size={arrowSize}
          offsetY={arrowOffsetY}
          direction="left"
          aria-hidden
          tabIndex={-1}
          className={classNames(styles.arrow, styles.arrowLeft)}
          onClick={scrollToLeft}
        />
      )}
      {showArrows && (hasPointer || hasPointer === undefined) && canScrollRight && (
        <ScrollArrow
          data-testid={nextButtonTestId}
          size={arrowSize}
          offsetY={arrowOffsetY}
          direction="right"
          aria-hidden
          tabIndex={-1}
          className={classNames(styles.arrow, styles.arrowRight)}
          onClick={scrollToRight}
        />
      )}
      <div className={styles.in} ref={scrollerRef} onScroll={calculateArrowsVisibility}>
        <ContentWrapperComponent
          className={classNames(styles.inWrapper, contentWrapperClassName)}
          ref={contentWrapperRef}
        >
          {children}
        </ContentWrapperComponent>
      </div>
    </RootComponent>
  );
};
