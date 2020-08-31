import React, { FunctionComponent, HTMLAttributes, useRef, ReactElement } from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';

export type CardScrollProps = HTMLAttributes<HTMLDivElement>;

const CardScroll: FunctionComponent<CardScrollProps> = ({ children, className, style, ...restProps }: CardScrollProps) => {
  const platform = usePlatform();

  const refs = useRef<HTMLElement[]>(new Array(React.Children.count(children)));

  const refContainer = useRef<HTMLDivElement>(null);

  function getScrollToLeft(offset: number): number {
    const containerWidth = refContainer.current.offsetWidth;
    const slideIndex = refs.current.findIndex((el) => el.offsetLeft + el.offsetWidth - offset >= 0);
    if (slideIndex === -1) {
      return offset;
    }

    const slide = refs.current[slideIndex];
    if (slideIndex === 0) {
      return 0;
    }

    const marginRight = parseInt(window.getComputedStyle(slide).marginRight);

    const scrollTo = slide.offsetLeft - (containerWidth - slide.offsetWidth) + marginRight;

    if (scrollTo <= 2 * marginRight) {
      return 0;
    }

    return scrollTo;
  }

  function getScrollToRight(offset: number): number {
    const containerWidth = refContainer.current.offsetWidth;
    const slide = refs.current.find((el) => el.offsetLeft + el.offsetWidth - offset > containerWidth);

    if (!slide) {
      return offset;
    }

    const marginRight = parseInt(window.getComputedStyle(slide).marginRight);
    return slide.offsetLeft - marginRight;
  }

  return (
    <div {...restProps} style={style} className={classNames(className, getClassname('CardScroll', platform))}>
      <HorizontalScroll getScrollToLeft={getScrollToLeft} getScrollToRight={getScrollToRight} showArrows={true}>
        <div className="CardScroll__in" ref={refContainer}>
          {React.Children.map(children, (item: ReactElement, i) => (
            <div className={'CardScroll__slide' + (item.props.size === 'l' ? ' CardScroll__slide--sz-l' : '')} ref={(node: HTMLElement) => refs.current[i] = node}>{item}</div>
          ))}
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default CardScroll;
