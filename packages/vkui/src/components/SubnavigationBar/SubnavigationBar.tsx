import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
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
  fixed?: boolean;
}

const defaultScrollToLeft: ScrollPositionHandler = (x) => x - 240;

const defaultScrollToRight: ScrollPositionHandler = (x) => x + 240;

/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationBar
 */
export const SubnavigationBar = ({
  fixed = false,
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

  return (
    <RootComponent baseClassName={fixed && styles.modeFixed} {...restProps}>
      <ScrollWrapper className={styles.in} {...scrollWrapperProps}>
        <ul className={styles.scrollIn}>
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
