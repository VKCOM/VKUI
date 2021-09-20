import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import HorizontalScrollArrow from './HorizontalScrollArrow';
import { easeInOutSine } from '../../lib/fx';
import { useEventListener } from '../../hooks/useEventListener';
import { useExternRef } from '../../hooks/useExternRef';
import { HasRef } from '../../types';
import './HorizontalScroll.css';

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

export interface HorizontalScrollProps extends
  React.HTMLAttributes<HTMLDivElement>,
  AdaptivityProps,
  HasRef<HTMLDivElement> {
  /**
   * Функция для расчета величины прокрутки при клике на левую стрелку.
   */
  getScrollToLeft?: (currentPosition: number) => number;
  /**
   * Функция для расчета величины прокрутки при клике на правую стрелку.
   */
  getScrollToRight?: (currentPosition: number) => number;
  showArrows?: boolean;
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

const HorizontalScroll: React.FC<HorizontalScrollProps> = (props: HorizontalScrollProps) => {
  const {
    children,
    getScrollToLeft,
    getScrollToRight,
    showArrows,
    scrollAnimationDuration,
    hasMouse,
    getRef,
    ...restProps
  } = props;

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const isCustomScrollingRef = React.useRef(false);

  const scrollerRef = useExternRef(getRef);

  const animationQueue = React.useRef<VoidFunction[]>([]);

  const platform = usePlatform();

  function scrollTo(getScrollPosition: (offset: number) => number) {
    const scrollElement = scrollerRef.current;

    animationQueue.current.push(() => doScroll({
      scrollElement,
      getScrollPosition,
      animationQueue: animationQueue.current,
      onScrollToRightBorder: () => setCanScrollRight(false),
      onScrollEnd: () => isCustomScrollingRef.current = false,
      onScrollStart: () => isCustomScrollingRef.current = true,
      initialScrollWidth: scrollElement?.firstElementChild?.scrollWidth || 0,
      scrollAnimationDuration,
    }));
    if (animationQueue.current.length === 1) {
      animationQueue.current[0]();
    }
  }

  const onscroll = React.useCallback(() => {
    if (showArrows && hasMouse && scrollerRef.current && !isCustomScrollingRef.current) {
      const scrollElement = scrollerRef.current;

      setCanScrollLeft(scrollElement.scrollLeft > 0);
      setCanScrollRight(scrollElement.scrollLeft + scrollElement.offsetWidth < scrollElement.scrollWidth);
    }
  }, [hasMouse]);

  const scrollEvent = useEventListener('scroll', onscroll);
  React.useEffect(() => scrollEvent.add(scrollerRef.current), []);
  React.useEffect(onscroll, [scrollerRef, children]);

  return (
    <div {...restProps} vkuiClass={getClassName('HorizontalScroll', platform)}>
      {showArrows && hasMouse && canScrollLeft &&
      <HorizontalScrollArrow
        direction="left"
        onClick={() => scrollTo(getScrollToLeft)}
      />
      }
      {showArrows && hasMouse && canScrollRight &&
      <HorizontalScrollArrow
        direction="right"
        onClick={() => scrollTo(getScrollToRight)}
      />
      }
      <div vkuiClass="HorizontalScroll__in" ref={scrollerRef}>
        <div vkuiClass="HorizontalScroll__in-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

HorizontalScroll.defaultProps = {
  showArrows: true,
};

export default withAdaptivity(HorizontalScroll, {
  hasMouse: true,
});
