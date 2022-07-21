import * as React from "react";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import {
  HorizontalScrollArrow,
  HorizontalScrollArrowController,
} from "../HorizontalScrollArrow/HorizontalScrollArrow";
import { easeInOutSine } from "../../lib/fx";
import { useEventListener } from "../../hooks/useEventListener";
import { useExternRef } from "../../hooks/useExternRef";
import { HasRef } from "../../types";
import { classNames } from "../../lib/classNames";
import "./HorizontalScroll.css";

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
    AdaptivityProps,
    HasRef<HTMLDivElement> {
  /**
   * Функция для расчёта величины прокрутки при клике на левую стрелку.
   */
  getScrollToLeft?: ScrollPositionHandler;
  /**
   * Функция для расчёта величины прокрутки при клике на правую стрелку.
   */
  getScrollToRight?: ScrollPositionHandler;
  arrowSize?: "m" | "l";
  showArrows?: boolean | "always";
  /**
   * Задаёт невидимые отступы сверху и снизу, чтобы расширить область контейнера со скроллом.
   *
   * Используйте в кейсах, когда у переданных в `children` компонентов обрезается, например, тени.
   *
   * > ⚠️ Из-за отрицательных отступов компонент будет залезать на соседей сверху и снизу.
   *  Поэтому если соседи интерактивные, то важно задать `position: relative`. Для соседа сверху дополнительно надо
   *  задать `z-index >= 1`.
   */
  overflowVisible?: boolean;
  scrollAnimationDuration?: number;
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

    if (
      roundUpElementScrollLeft(scrollElement) !== Math.max(0, endLeft) &&
      elapsed !== 1
    ) {
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

const HorizontalScrollComponent = ({
  children,
  getScrollToLeft,
  getScrollToRight,
  showArrows = true,
  arrowSize = "l",
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
  overflowVisible,
  hasMouse,
  getRef,
  ...restProps
}: HorizontalScrollProps) => {
  const arrowLeftController =
    React.useRef<HorizontalScrollArrowController>(null);
  const arrowRightController =
    React.useRef<HorizontalScrollArrowController>(null);

  const isCustomScrollingRef = React.useRef(false);

  const scrollerRef = useExternRef(getRef);
  const scrollInnerRef = React.useRef<HTMLDivElement>(null);

  const animationQueue = React.useRef<VoidFunction[]>([]);

  const scrollTo = React.useCallback(
    (getScrollPosition: ScrollPositionHandler) => {
      const scrollElement = scrollerRef.current;

      animationQueue.current.push(() =>
        doScroll({
          scrollElement,
          getScrollPosition,
          animationQueue: animationQueue.current,
          onScrollToRightBorder: () =>
            arrowRightController.current?.setAvailable(false),
          onScrollEnd: () => (isCustomScrollingRef.current = false),
          onScrollStart: () => (isCustomScrollingRef.current = true),
          initialScrollWidth: scrollInnerRef.current?.scrollWidth || 0,
          scrollAnimationDuration,
        })
      );
      if (animationQueue.current.length === 1) {
        animationQueue.current[0]();
      }
    },
    [scrollAnimationDuration, scrollerRef]
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

  const handleScroll = React.useCallback(() => {
    if (
      showArrows &&
      hasMouse &&
      scrollerRef.current &&
      !isCustomScrollingRef.current
    ) {
      const scrollElement = scrollerRef.current;

      arrowLeftController.current?.setAvailable(scrollElement.scrollLeft > 0);
      arrowRightController.current?.setAvailable(
        roundUpElementScrollLeft(scrollElement) + scrollElement.offsetWidth <
          scrollElement.scrollWidth
      );
    }
  }, [hasMouse, scrollerRef, showArrows]);

  const handleScrollerMouseEnter = () => {
    arrowLeftController.current?.setVisible(true);
    arrowRightController.current?.setVisible(true);
  };

  const handleScrollerMouseLeave = () => {
    arrowLeftController.current?.setVisible(false);
    arrowRightController.current?.setVisible(false);
  };

  const scrollEvent = useEventListener("scroll", handleScroll);

  React.useEffect(() => {
    if (scrollerRef.current) {
      scrollEvent.add(scrollerRef.current);
    }
  }, [scrollEvent, scrollerRef]);

  React.useEffect(handleScroll, [scrollerRef, children, handleScroll]);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "HorizontalScroll",
        overflowVisible && "HorizontalScroll--overflowVisible"
      )}
    >
      <div
        vkuiClass="HorizontalScroll__in"
        ref={scrollerRef}
        onMouseEnter={
          showArrows === "always" ? undefined : handleScrollerMouseEnter
        }
        onMouseLeave={
          showArrows === "always" ? undefined : handleScrollerMouseLeave
        }
      >
        {showArrows && hasMouse && (
          <HorizontalScrollArrow
            size={arrowSize}
            direction="left"
            vkuiClass="HorizontalScroll__arrow HorizontalScroll__arrow--left"
            visilble={showArrows === "always"}
            controller={arrowLeftController}
            onClick={scrollToLeft}
          />
        )}
        {showArrows && hasMouse && (
          <HorizontalScrollArrow
            size={arrowSize}
            direction="right"
            vkuiClass="HorizontalScroll__arrow HorizontalScroll__arrow--right"
            visilble={showArrows === "always"}
            controller={arrowRightController}
            onClick={scrollToRight}
          />
        )}
        <div vkuiClass="HorizontalScroll__in-wrapper" ref={scrollInnerRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/HorizontalScroll
 */
export const HorizontalScroll = withAdaptivity(HorizontalScrollComponent, {
  hasMouse: true,
});
