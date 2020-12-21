import React, { HTMLAttributes, useRef } from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { withFrame } from '../../hoc/withFrame';

export interface CardScrollProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  size?: 's' | 'm' | 'l';
}

const CardScroll = withFrame<CardScrollProps>(({ children, className, size, sizeX, window, document, ...restProps }) => {
  const platform = usePlatform();

  const refContainer = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);

  function getScrollToLeft(offset: number): number {
    const containerWidth = refContainer.current.offsetWidth;
    const slideIndex = Array
      .from(refContainer.current.children)
      .findIndex((el: HTMLElement) => el.offsetLeft + el.offsetWidth + parseInt(window.getComputedStyle(el).marginRight) - offset >= 0);

    if (slideIndex === -1) {
      return offset;
    }

    if (slideIndex === 0) {
      return 0;
    }

    const slide = refContainer.current.children[slideIndex] as HTMLElement;

    const scrollTo = slide.offsetLeft - (containerWidth - slide.offsetWidth) + gapRef.current.offsetWidth;

    if (scrollTo <= 2 * gapRef.current.offsetWidth) {
      return 0;
    }

    return scrollTo;
  }

  function getScrollToRight(offset: number): number {
    const containerWidth = refContainer.current.offsetWidth;
    const slide = Array.from(refContainer.current.children).find((el: HTMLElement) => el.offsetLeft + el.offsetWidth - offset > containerWidth) as HTMLElement;

    if (!slide) {
      return offset;
    }

    return slide.offsetLeft - gapRef.current.offsetWidth;
  }

  return (
    <div
      {...restProps}
      className={classNames(
        className,
        getClassname('CardScroll', platform),
        `CardScroll--${size}`,
        `CardScroll--sizeX-${sizeX}`,
      )}
    >
      <HorizontalScroll getScrollToLeft={getScrollToLeft} getScrollToRight={getScrollToRight} showArrows={true}>
        <div className="CardScroll__in" ref={refContainer}>
          <span className="CardScroll__gap" ref={gapRef} />
          {children}
          <span className="CardScroll__gap" />
        </div>
      </HorizontalScroll>
    </div>
  );
});

CardScroll.defaultProps = {
  size: 's',
};

export default withAdaptivity(CardScroll, { sizeX: true });
