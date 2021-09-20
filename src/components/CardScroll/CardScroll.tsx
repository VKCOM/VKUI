import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useDOM } from '../../lib/dom';
import './CardScroll.css';

export interface CardScrollProps extends React.HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  size?: 's' | 'm' | 'l';
}

const CardScroll: React.FC<CardScrollProps> = ({ children, size, sizeX, ...restProps }: CardScrollProps) => {
  const platform = usePlatform();

  const refContainer = React.useRef<HTMLDivElement>(null);
  const gapRef = React.useRef<HTMLDivElement>(null);

  const { window } = useDOM();

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
      vkuiClass={classNames(
        getClassName('CardScroll', platform),
        `CardScroll--${size}`,
        `CardScroll--sizeX-${sizeX}`,
      )}
    >
      <HorizontalScroll getScrollToLeft={getScrollToLeft} getScrollToRight={getScrollToRight} showArrows={true}>
        <div vkuiClass="CardScroll__in" ref={refContainer}>
          <span vkuiClass="CardScroll__gap" ref={gapRef} />
          {children}
          <span vkuiClass="CardScroll__gap" />
        </div>
      </HorizontalScroll>
    </div>
  );
};

CardScroll.defaultProps = {
  size: 's',
};

export default withAdaptivity(CardScroll, { sizeX: true });
