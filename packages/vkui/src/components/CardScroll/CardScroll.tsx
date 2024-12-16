'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
  ...restProps
}: CardScrollProps): React.ReactNode => {
  const refContainer = React.useRef<HTMLDivElement>(null);
  const gapRef = React.useRef<HTMLDivElement>(null);

  const { window } = useDOM();

  function getScrollToLeft(offset: number): number {
    if (!refContainer.current || !gapRef.current) {
      return offset;
    }
    const containerWidth = refContainer.current.offsetWidth;
    const slideIndex = ([...refContainer.current.children] as HTMLElement[]).findIndex(
      (el: HTMLElement) =>
        el.offsetLeft +
          el.offsetWidth +
          parseInt(window!.getComputedStyle(el).marginRight) -
          offset >=
        0,
    );

    if (slideIndex === -1) {
      return offset;
    }

    if (slideIndex === 0) {
      return 0;
    }

    const slide = refContainer.current.children[slideIndex] as HTMLElement;

    const scrollTo =
      slide.offsetLeft - (containerWidth - slide.offsetWidth) + gapRef.current.offsetWidth;

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
    const slide = Array.prototype.find.call(
      refContainer.current.children,
      (el: HTMLElement) => el.offsetLeft + el.offsetWidth - offset > containerWidth,
    ) as HTMLElement;

    if (!slide) {
      return offset;
    }

    return slide.offsetLeft - gapRef.current.offsetWidth;
  }

  return (
    <RootComponent
      {...restProps}
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
