'use client';

import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CustomScrollView.module.css';

const overscrollBehaviorClassNames = {
  auto: undefined,
  contain: styles.overscrollBehaviorContain,
  none: styles.overscrollBehaviorNone,
};

const scrollBehaviorClassNames = {
  auto: undefined,
  smooth: styles.scrollBehaviorSmooth,
};

export interface CustomScrollViewProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Поведение overscroll, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior).
   */
  overscrollBehavior?: 'auto' | 'contain' | 'none' | undefined;
  /**
   * Поведение scroll-behavior, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior).
   */
  scrollBehavior?: 'auto' | 'smooth' | undefined;
  /**
   * Включение отображения горизонтального скролла.
   */
  enableHorizontalScroll?: boolean | undefined;
  /**
   * Скрытие скроллбара.
   *
   * > В версии ниже Firefox 64 будет виден скролл.
   */
  scrollbarHidden?: boolean | undefined;
}

/**
 * @see https://vkui.io/components/custom-scroll-view
 */
export const CustomScrollView = ({
  enableHorizontalScroll = false,
  overscrollBehavior = 'auto',
  scrollBehavior = 'auto',
  scrollbarHidden = false,
  ...restProps
}: CustomScrollViewProps): React.ReactNode => {
  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        enableHorizontalScroll && styles.horizontalScrollEnabled,
        overscrollBehaviorClassNames[overscrollBehavior],
        scrollBehaviorClassNames[scrollBehavior],
        scrollbarHidden && styles.scrollbarHidden,
      )}
      {...restProps}
    />
  );
};
