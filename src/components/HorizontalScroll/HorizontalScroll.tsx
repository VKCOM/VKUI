import * as React from "react";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import HorizontalScrollArrow from "./HorizontalScrollArrow";
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
   * Функция для расчета величины прокрутки при клике на левую стрелку.
   */
  getScrollToLeft?: ScrollPositionHandler;
  /**
   * Функция для расчета величины прокрутки при клике на правую стрелку.
   */
  getScrollToRight?: ScrollPositionHandler;
  showArrows?: boolean | "always";
  scrollAnimationDuration?: number;
}

/**
 * timing method
 */
function now() {
  return performance && performance.now ? performance.now() : Date.now();
}

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

  let startLeft = scrollElement.scrollLeft;
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

    if (scrollElement.scrollLeft !== Math.max(0, endLeft)) {
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

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  getScrollToLeft,
  getScrollToRight,
  showArrows = true,
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
  hasMouse,
  getRef,
  ...restProps
}: HorizontalScrollProps) => {
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const isCustomScrollingRef = React.useRef(false);

  const scrollerRef = useExternRef(getRef);

  const animationQueue = React.useRef<VoidFunction[]>([]);

  function scrollTo(getScrollPosition: (offset: number) => number) {
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
      })
    );
    if (animationQueue.current.length === 1) {
      animationQueue.current[0]();
    }
  }

  const onscroll = React.useCallback(() => {
    if (
      showArrows &&
      hasMouse &&
      scrollerRef.current &&
      !isCustomScrollingRef.current
    ) {
      const scrollElement = scrollerRef.current;

      setCanScrollLeft(scrollElement.scrollLeft > 0);
      setCanScrollRight(
        scrollElement.scrollLeft + scrollElement.offsetWidth <
          scrollElement.scrollWidth
      );
    }
  }, [hasMouse, scrollerRef, showArrows]);

  const scrollEvent = useEventListener("scroll", onscroll);
  React.useEffect(() => {
    if (scrollerRef.current) {
      scrollEvent.add(scrollerRef.current);
    }
  }, [scrollEvent, scrollerRef]);
  React.useEffect(onscroll, [scrollerRef, children, onscroll]);

  return (
    <div
      {...restProps}
      vkuiClass={classNames("HorizontalScroll", {
        ["HorizontalScroll--withConstArrows"]: showArrows === "always",
      })}
    >
      {showArrows && hasMouse && canScrollLeft && (
        <HorizontalScrollArrow
          direction="left"
          onClick={() => {
            if (getScrollToLeft) {
              scrollTo(getScrollToLeft);
            }
          }}
        />
      )}
      {showArrows && hasMouse && canScrollRight && (
        <HorizontalScrollArrow
          direction="right"
          onClick={() => {
            if (getScrollToRight) {
              scrollTo(getScrollToRight);
            }
          }}
        />
      )}
      <div vkuiClass="HorizontalScroll__in" ref={scrollerRef}>
        <div vkuiClass="HorizontalScroll__in-wrapper">{children}</div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(HorizontalScroll, {
  hasMouse: true,
});
