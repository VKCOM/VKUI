import React, { FunctionComponent, HTMLAttributes, useRef, useEffect, useState, useCallback } from 'react';
import classNames from '../../lib/classNames';
import { hasMouse } from '../../helpers/inputUtils';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron_right';

type GetScrollPositionCallback = (currentPosition: number) => number;
type Callback = () => void;
type ScrollContext = {
  scrollElement: HTMLElement;
  getScrollPosition: GetScrollPositionCallback;
  animationQueue: Callback[];
  onScrollToRightBorder: Callback;
};

interface HorizontalScrollProps extends HTMLAttributes<HTMLDivElement> {
  getScrollToLeft?: GetScrollPositionCallback;
  getScrollToRight?: GetScrollPositionCallback;
}

interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';

}

/**
 * ease function
 * @param x absolute progress of the animation in bounds 0 (beginning) and 1 (end)
 */
function easeInOutSine(x: number) {
  return 0.5 * (1 - Math.cos(Math.PI * x));
}

/**
 * timing method
 */
function now() {
  return performance && performance.now ? performance.now() : Date.now();
}

/**
 * Смещение при наведении на стрелки, соответствует указанному в css для 'HorizontalScroll__in-wrapper'
 */
const ARROW_HOVER_OFFSET = 28;

/**
 * Код анимации скрола, на основе полифила: https://github.com/iamdustan/smoothscroll
 * Константа взята из полифила
 * @var {number} SCROLL_ONE_FRAME_TIME время анимации скролла
 */
const SCROLL_ONE_FRAME_TIME = 468;

function doScroll({ scrollElement, getScrollPosition, animationQueue, onScrollToRightBorder }: ScrollContext) {
  if (!scrollElement || !getScrollPosition) {
    return;
  }

  let startLeft = scrollElement.scrollLeft;
  let endLeft = getScrollPosition(startLeft);

  if (endLeft > scrollElement.scrollWidth - scrollElement.offsetWidth) {
    onScrollToRightBorder();
    endLeft = scrollElement.scrollWidth - scrollElement.offsetWidth + ARROW_HOVER_OFFSET;
  }

  const startTime = now();

  (function scroll() {
    if (!scrollElement) {
      return;
    }

    const time = now();
    const elapsed = Math.min((time - startTime) / SCROLL_ONE_FRAME_TIME, 1);

    const value = easeInOutSine(elapsed);

    const currentLeft = startLeft + (endLeft - startLeft) * value;
    scrollElement.scrollLeft = Math.ceil(currentLeft);

    if (scrollElement.scrollLeft !== endLeft) {
      requestAnimationFrame(scroll);
      return;
    }

    animationQueue.shift();
    if (animationQueue.length > 0) {
      animationQueue[0]();
    }
  })();
}

const HorizontalScrollArrow: FunctionComponent<HorizontalScrollArrowProps> = (props: HorizontalScrollArrowProps) => {
  const { onClick, direction } = props;
  return (
    <div className={`HorizontalScroll__arrow HorizontalScroll__arrow-${direction}`} onClick={onClick}>
      <div className="HorizontalScroll__arrow-icon">
        <Icon24Chevron />
      </div>
    </div>
  );
};

const HorizontalScroll: FunctionComponent<HorizontalScrollProps> = (props: HorizontalScrollProps) => {
  const { children, getScrollToLeft, getScrollToRight, className, ...restProps } = props;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollerRef = useRef<HTMLDivElement>(null);

  const animationQueue = useRef<Callback[]>([]);

  function scrollTo(getScrollPosition: (offset: number) => number) {
    animationQueue.current.push(() => doScroll({
      scrollElement: scrollerRef.current,
      getScrollPosition,
      animationQueue: animationQueue.current,
      onScrollToRightBorder: () => setCanScrollRight(false),
    }));
    if (animationQueue.current.length === 1) {
      animationQueue.current[0]();
    }
  }

  const onscroll = useCallback(() => {
    if (hasMouse && scrollerRef.current) {
      setCanScrollLeft(scrollerRef.current.scrollLeft > 0);
      setCanScrollRight(scrollerRef.current.scrollLeft + scrollerRef.current.offsetWidth < scrollerRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    scrollerRef.current && scrollerRef.current.addEventListener('scroll', onscroll);
    return () => scrollerRef.current && scrollerRef.current.removeEventListener('scroll', onscroll);
  }, []);

  useEffect(onscroll, [scrollerRef]);

  return (
    <div {...restProps} className={classNames('HorizontalScroll', className)}>
      {hasMouse && canScrollLeft && <HorizontalScrollArrow direction="left"
        onClick={() => scrollTo(getScrollToLeft)} />}
      {hasMouse && canScrollRight && <HorizontalScrollArrow direction="right"
        onClick={() => scrollTo(getScrollToRight)} />}
      <div className="HorizontalScroll__in" ref={scrollerRef}>
        <div className="HorizontalScroll__in-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
