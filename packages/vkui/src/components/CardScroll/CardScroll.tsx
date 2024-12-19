'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useDirection } from '../../hooks/useDirection';
import { useExternRef } from '../../hooks/useExternRef';
import { useDOM } from '../../lib/dom';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { HorizontalScroll, type HorizontalScrollProps } from '../HorizontalScroll/HorizontalScroll';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CardScroll.module.css';

const stylesSize = {
  s: 'vkuiInternalCardScroll--size-s',
  m: 'vkuiInternalCardScroll--size-m',
  l: 'vkuiInternalCardScroll--size-l',
};

export interface CardScrollProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasComponent,
    Pick<HorizontalScrollProps, 'showArrows' | 'prevButtonTestId' | 'nextButtonTestId'> {
  /**
   * При `size=false` ширина `Card` будет регулироваться контентом внутри. В остальных случаях — будет явно задана в процентах.
   */
  size?: 's' | 'm' | 'l' | false;
  /**
   * Добавляет отступы по краям слева и справа
   */
  padding?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardScroll
 */
export const CardScroll = ({
  children,
  size = 's',
  showArrows = true,
  padding = false,
  Component = 'ul',
  prevButtonTestId,
  nextButtonTestId,
  getRootRef,
  ...restProps
}: CardScrollProps): React.ReactNode => {
  const refContainer = React.useRef<HTMLDivElement>(null);
  const gapRef = React.useRef<HTMLDivElement>(null);
  const [directionRef, textDirection] = useDirection<HTMLDivElement>();
  const direction = textDirection || 'ltr';
  const rootRef = useExternRef(directionRef, getRootRef);

  const { window } = useDOM();

  const slideOffsetFromStart = (slide: HTMLElement) => {
    const containerWidth = refContainer.current?.offsetWidth || 0;
    return direction === 'rtl'
      ? containerWidth - slide.offsetLeft - slide.offsetWidth
      : slide.offsetLeft;
  };

  function getScrollToLeft(offset: number): number {
    if (!refContainer.current || !gapRef.current) {
      return offset;
    }
    const containerWidth = refContainer.current.offsetWidth;

    const getMarginEnd = (el: HTMLElement) => {
      const computedStyles = window!.getComputedStyle(el);
      return (
        parseInt(computedStyles.marginInlineEnd) ||
        (direction === 'rtl'
          ? parseInt(computedStyles.marginLeft)
          : parseInt(computedStyles.marginRight)) ||
        0
      );
    };

    const slideIndex = ([...refContainer.current.children] as HTMLElement[]).findIndex(
      (el: HTMLElement) =>
        slideOffsetFromStart(el) + el.offsetWidth + getMarginEnd(el) - offset >= 0,
    );

    if (slideIndex === -1) {
      return offset;
    }

    if (slideIndex === 0) {
      return 0;
    }

    const slide = refContainer.current.children[slideIndex] as HTMLElement;

    const scrollTo =
      slideOffsetFromStart(slide) -
      (containerWidth - slide.offsetWidth) +
      gapRef.current.offsetWidth;

    if (scrollTo <= 2 * gapRef.current.offsetWidth) {
      return 0;
    }

    return scrollTo;
  }

  function getScrollToRight(offset: number): number {
    if (!refContainer.current || !gapRef.current) {
      return offset;
    }
    const containerWidth = refContainer.current.offsetWidth;
    const slide = Array.prototype.find.call(refContainer.current.children, (el: HTMLElement) => {
      return slideOffsetFromStart(el) + el.offsetWidth - offset > containerWidth;
    }) as HTMLElement;

    if (!slide) {
      return offset;
    }

    return slideOffsetFromStart(slide) - gapRef.current.offsetWidth;
  }

  return (
    <RootComponent
      {...restProps}
      getRootRef={rootRef}
      Component={Component}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalCardScroll',
        size !== false && stylesSize[size],
        padding && styles.withPaddings,
      )}
    >
      <HorizontalScroll
        getScrollToLeft={getScrollToLeft}
        getScrollToRight={getScrollToRight}
        showArrows={showArrows}
        prevButtonTestId={prevButtonTestId}
        nextButtonTestId={nextButtonTestId}
      >
        <div className={styles.in} ref={refContainer}>
          <span className={styles.gap} ref={gapRef} />
          {children}
          <span className={styles.gap} />
        </div>
      </HorizontalScroll>
    </RootComponent>
  );
};
