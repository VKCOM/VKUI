'use client';

import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import {
  HorizontalScroll,
  type HorizontalScrollProps,
  type ScrollPositionHandler,
} from '../HorizontalScroll/HorizontalScroll';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './SubnavigationBar.module.css';

export interface SubnavigationBarProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    Pick<
      HorizontalScrollProps,
      'showArrows' | 'getScrollToLeft' | 'getScrollToRight' | 'scrollAnimationDuration'
    > {
  /**
   * Отключение возможности прокручивания компонента по горизонтали.
   */
  fixed?: boolean;
  /**
   * Добавляет тень слева и справа при скролле.
   */
  withFade?: boolean;
}

const defaultScrollToLeft: ScrollPositionHandler = (x) => x - 240;

const defaultScrollToRight: ScrollPositionHandler = (x) => x + 240;

/**
 * @see https://vkui.io/components/subnavigation-bar
 */
export const SubnavigationBar = ({
  fixed = false,
  withFade = false,
  children,
  showArrows = true,
  getScrollToLeft = defaultScrollToLeft,
  getScrollToRight = defaultScrollToRight,
  scrollAnimationDuration,
  ...restProps
}: SubnavigationBarProps): React.ReactNode => {
  let ScrollWrapper: React.ElementType;
  let scrollWrapperProps = {};

  if (fixed) {
    ScrollWrapper = 'div';
  } else {
    ScrollWrapper = HorizontalScroll;
    scrollWrapperProps = {
      showArrows,
      getScrollToLeft,
      getScrollToRight,
      scrollAnimationDuration,
    };
  }

  const scrollRef = useRef<HTMLUListElement>(null);
  const [isFadeLeft, setFadeLeft] = useState(false);
  const [isFadeRight, setFadeRight] = useState(false);

  const scrollHandler = useCallback(() => {
    if (!scrollRef.current) {
      return;
    }

    setFadeLeft(scrollRef.current.scrollLeft !== 0);
    setFadeRight(
      !(
        scrollRef.current.clientWidth + scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth
      ),
    );
  }, []);

  return (
    <RootComponent baseClassName={fixed && styles.modeFixed} {...restProps}>
      <ScrollWrapper
        className={classNames(
          styles.in,
          withFade && styles.inFade,
          withFade && isFadeLeft && styles.inFadeLeft,
          withFade && isFadeRight && styles.inFadeRight,
        )}
        {...scrollWrapperProps}
      >
        <ul
          ref={scrollRef}
          className={classNames(styles.scrollIn, withFade && styles.scroll)}
          onScroll={scrollHandler}
        >
          {React.Children.map(children, (child, idx) =>
            hasReactNode(child) ? (
              <li key={idx} className={styles.item}>
                {child}
              </li>
            ) : null,
          )}
        </ul>
      </ScrollWrapper>
    </RootComponent>
  );
};
