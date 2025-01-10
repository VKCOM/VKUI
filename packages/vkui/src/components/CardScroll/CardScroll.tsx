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
  /**
   * Позволяет поменять тег используемый для обертки над карточками
   */
  CardsListComponent?: React.ElementType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardScroll
 */
export const CardScroll = ({
  children,
  size = 's',
  showArrows = true,
  padding = false,
  CardsListComponent = 'ul',
  prevButtonTestId,
  nextButtonTestId,
  ...restProps
}: CardScrollProps): React.ReactNode => {
  const refContainer = React.useRef<HTMLDivElement>(null);

  const { window } = useDOM();

  const getPadding = (container: HTMLElement) => {
    return parseFloat(
      window!
        .getComputedStyle(container)
        .getPropertyValue('--vkui_internal--CardScroll_horizontal_padding'),
    );
  };

  function getScrollToLeft(offset: number): number {
    if (!refContainer.current) {
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

    const slide = refContainer.current.children[slideIndex] as HTMLElement;
    const padding = getPadding(refContainer.current);
    const scrollTo = slide.offsetLeft - (containerWidth - slide.offsetWidth) + padding;

    if (scrollTo <= 2 * padding) {
      return 0;
    }

    return scrollTo;
  }

  function getScrollToRight(offset: number): number {
    if (!refContainer.current) {
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

    const padding = getPadding(refContainer.current);
    return slide.offsetLeft - padding;
  }

  return (
    <RootComponent
      {...restProps}
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
        ContentWrapperComponent={CardsListComponent}
        contentWrapperRef={refContainer}
        contentWrapperClassName={styles.in}
      >
        {children}
      </HorizontalScroll>
    </RootComponent>
  );
};
