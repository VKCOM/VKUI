import React, { FunctionComponent, HTMLAttributes, useRef, useEffect, useState, useCallback } from 'react';
import classNames from '../../lib/classNames';
import { hasMouse } from '../../helpers/inputUtils';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron_right';

interface HorizontalScrollProps extends HTMLAttributes<HTMLDivElement> {
  scrollLeftBy?: (offset: number) => number;
  scrollRightBy?: (offset: number) => number;
}

interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
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
  const { children, scrollLeftBy, scrollRightBy, className, ...restProps } = props;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(offset: number) {
    if (!scrollerRef.current) {return;}

    scrollerRef.current.scrollBy({
      left: offset || 0,
      behavior: 'smooth',
    });
    setCanScrollLeft(scrollerRef.current.scrollLeft > 0);
    setCanScrollRight(scrollerRef.current.scrollLeft + scrollerRef.current.offsetWidth < scrollerRef.current.scrollWidth);
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
      {hasMouse && canScrollLeft && <HorizontalScrollArrow direction="left" onClick={() => scrollBy(scrollLeftBy && scrollLeftBy(scrollerRef.current.scrollLeft))} />}
      <div className="HorizontalScroll__in" ref={scrollerRef}>{children}</div>
      {hasMouse && canScrollRight && <HorizontalScrollArrow direction="right" onClick={() => scrollBy(scrollRightBy && scrollRightBy(scrollerRef.current.scrollLeft))} />}
    </div>
  );
};

export default HorizontalScroll;
