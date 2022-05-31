import * as React from "react";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { easeInOutSine } from "../../lib/fx";
import { useEventListener } from "../../hooks/useEventListener";
import { useExternRef } from "../../hooks/useExternRef";
import { HasRef } from "../../types";
import { classNames } from "../../lib/classNames";
import { ScrollArrow } from "../ScrollArrow/ScrollArrow";
import { now } from "../../helpers/polymorphNow";
import { SCROLL_ONE_FRAME_TIME } from "../../helpers/constants";
import "./VerticalScroll.css";

interface ScrollContext {
  scrollElement: HTMLElement | null;
  scrollAnimationDuration: number;
  animationQueue: VoidFunction[];
  getScrollPosition: (currentPosition: number) => number;
  onScrollToBottomBorder: VoidFunction;
  onScrollEnd: VoidFunction;
  onScrollStart: VoidFunction;
  /**
   * Начальная высота прокрутки.
   * В некоторых случаях может отличаться от текущей высоты прокрутки из-за transforms: translate
   */
  initialScrollHeight: number;
}

export type ScrollPositionHandler = (currentPosition: number) => number;

export interface VerticalScrollProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps,
    HasRef<HTMLDivElement> {
  /**
   * Функция для расчета величины прокрутки при клике на левую стрелку.
   */
  getScrollToTop?: ScrollPositionHandler;
  /**
   * Функция для расчета величины прокрутки при клике на правую стрелку.
   */
  getScrollToBottom?: ScrollPositionHandler;
  showArrows?: boolean | "always";
  scrollAnimationDuration?: number;
}

const roundUpElementScrollTop = (el: HTMLElement) => Math.ceil(el.scrollTop);

function doScroll({
  scrollElement,
  getScrollPosition,
  animationQueue,
  onScrollToBottomBorder,
  onScrollEnd,
  onScrollStart,
  initialScrollHeight,
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
}: ScrollContext) {
  if (!scrollElement || !getScrollPosition) {
    return;
  }

  /**
   * максимальное значение сдвига влево
   */
  const maxTop = initialScrollHeight - scrollElement.offsetHeight;

  let startTop = roundUpElementScrollTop(scrollElement);
  let endTop = getScrollPosition(startTop);

  onScrollStart();

  if (endTop >= maxTop) {
    onScrollToBottomBorder();
    endTop = maxTop;
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

    const currentTop = startTop + (endTop - startTop) * value;
    scrollElement.scrollTop = Math.ceil(currentTop);

    if (roundUpElementScrollTop(scrollElement) !== Math.max(0, endTop)) {
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

const VerticalScrollComponent: React.FC<VerticalScrollProps> = ({
  children,
  getScrollToTop,
  getScrollToBottom,
  showArrows = true,
  scrollAnimationDuration = SCROLL_ONE_FRAME_TIME,
  hasMouse,
  getRef,
  ...restProps
}) => {
  const [canScrollTop, setCanScrollTop] = React.useState(false);
  const [canScrollBottom, setCanScrollBottom] = React.useState(false);

  const isCustomScrollingRef = React.useRef(false);

  const scrollerRef = useExternRef(getRef);

  const animationQueue = React.useRef<VoidFunction[]>([]);

  const scrollTo = React.useCallback(
    (getScrollPosition: ScrollPositionHandler) => {
      const scrollElement = scrollerRef.current;

      animationQueue.current.push(() =>
        doScroll({
          scrollElement,
          getScrollPosition,
          animationQueue: animationQueue.current,
          onScrollToBottomBorder: () => setCanScrollBottom(false),
          onScrollEnd: () => (isCustomScrollingRef.current = false),
          onScrollStart: () => (isCustomScrollingRef.current = true),
          initialScrollHeight:
            scrollElement?.firstElementChild?.scrollHeight || 0,
          scrollAnimationDuration,
        })
      );
      if (animationQueue.current.length === 1) {
        animationQueue.current[0]();
      }
    },
    [scrollAnimationDuration, scrollerRef]
  );

  const scrollToTop = React.useCallback(() => {
    const getScrollPosition =
      getScrollToTop ?? ((i: number) => i - scrollerRef.current!.offsetHeight);
    scrollTo(getScrollPosition);
  }, [getScrollToTop, scrollTo, scrollerRef]);

  const scrollToBottom = React.useCallback(() => {
    const getScrollPosition =
      getScrollToBottom ??
      ((i: number) => i + scrollerRef.current!.offsetHeight);
    scrollTo(getScrollPosition);
  }, [getScrollToBottom, scrollTo, scrollerRef]);

  const onscroll = React.useCallback(() => {
    if (
      showArrows &&
      hasMouse &&
      scrollerRef.current &&
      !isCustomScrollingRef.current
    ) {
      const scrollElement = scrollerRef.current;

      setCanScrollTop(scrollElement.scrollTop > 0);
      setCanScrollBottom(
        roundUpElementScrollTop(scrollElement) + scrollElement.offsetHeight <
          scrollElement.scrollHeight
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
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames("VerticalScroll", {
        ["VerticalScroll--withConstArrows"]: showArrows === "always",
      })}
    >
      {showArrows && hasMouse && canScrollTop && (
        <ScrollArrow
          vkuiClass="VerticalScroll__arrow VerticalScroll__arrow--top"
          direction="up"
          onClick={scrollToTop}
        />
      )}
      {showArrows && hasMouse && canScrollBottom && (
        <ScrollArrow
          vkuiClass="VerticalScroll__arrow VerticalScroll__arrow--bottom"
          direction="down"
          onClick={scrollToBottom}
        />
      )}
      <div vkuiClass="VerticalScroll__in" ref={scrollerRef}>
        <div vkuiClass="VerticalScroll__in-wrapper">{children}</div>
      </div>
    </div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/VerticalScroll
 */
export const VerticalScroll = withAdaptivity(VerticalScrollComponent, {
  hasMouse: true,
});
