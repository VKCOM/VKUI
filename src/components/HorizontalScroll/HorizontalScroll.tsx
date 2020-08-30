import React, { FunctionComponent, HTMLAttributes, useRef, useEffect, useState, useCallback } from 'react';
import classNames from '../../lib/classNames';
import { hasMouse } from '../../helpers/inputUtils';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron_right';

interface HorizontalScrollProps extends HTMLAttributes<HTMLDivElement> {
  scrollLeftTo?: (offset: number) => number;
  scrollRightTo?: (offset: number) => number;
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

const SCROLL_TIME = 468;
const ARROW_HOVER_OFFSET = 28;

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
  const { children, scrollLeftTo, scrollRightTo, className, ...restProps } = props;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollerRef = useRef<HTMLDivElement>(null);

  const animationQueue = useRef([]);

  function doScroll(getOffset: (offset: number) => number) {
    if (!scrollerRef.current || !getOffset) {return;}

    let startLeft = scrollerRef.current.scrollLeft;
    let endLeft = getOffset(startLeft);

    if (endLeft > scrollerRef.current.scrollWidth - scrollerRef.current.offsetWidth) {
      setCanScrollRight(false);
      endLeft = scrollerRef.current.scrollWidth - scrollerRef.current.offsetWidth + ARROW_HOVER_OFFSET;
    }

    const startTime = performance.now();

    (function scroll() {
      if (!scrollerRef.current) {return;}

      const time = performance.now();
      const elapsed = Math.min((time - startTime) / SCROLL_TIME, 1);

      const value = easeInOutSine(elapsed);

      const currentLeft = startLeft + (endLeft - startLeft) * value;
      scrollerRef.current.scrollLeft = Math.ceil(currentLeft);

      if (scrollerRef.current.scrollLeft !== endLeft) {
        requestAnimationFrame(scroll);
        return;
      }

      animationQueue.current.shift();
      if (animationQueue.current.length > 0) {
        animationQueue.current[0]();
      }
    })();
  }

  function scrollTo(getOffset: (offset: number) => number) {
    animationQueue.current.push(() => doScroll(getOffset));
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
        onClick={() => scrollTo(scrollLeftTo)} />}
      {hasMouse && canScrollRight && <HorizontalScrollArrow direction="right"
        onClick={() => scrollTo(scrollRightTo)} />}
      <div className="HorizontalScroll__in" ref={scrollerRef}>
        <div className="HorizontalScroll__in-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
