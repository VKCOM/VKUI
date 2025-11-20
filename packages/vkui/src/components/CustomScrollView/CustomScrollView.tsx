'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
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
   * `className` для компонента.
   */
  className?: HTMLDivElement['className'];
  /**
   * Обработчик события `scroll`.
   */
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  /**
   * Содержимое.
   */
  children: React.ReactNode;
  /**
   * Поведение overscroll, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior).
   */
  overscrollBehavior?: 'auto' | 'contain' | 'none';
  /**
   * Поведение scroll-behavior, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior).
   */
  scrollBehavior?: 'auto' | 'smooth';
  /**
   * Включение отображения горизонтального скролла.
   */
  enableHorizontalScroll?: boolean;
  /**
   * Скрытие скроллбара.
   *
   * > В версии ниже Firefox 64 будет виден скролл.
   */
  scrollbarHidden?: boolean;
}

/**
 * @see https://vkui.io/components/custom-scroll-view
 */
export const CustomScrollView = ({
  className,
  children,
  enableHorizontalScroll = false,
  onScroll,
  getRootRef,
  overscrollBehavior = 'auto',
  scrollBehavior = 'auto',
  scrollbarHidden = false,
  ...restProps
}: CustomScrollViewProps): React.ReactNode => {
  return (
    <div
      className={classNames(
        className,
        styles.host,
        enableHorizontalScroll && styles.horizontalScrollEnabled,
        overscrollBehaviorClassNames[overscrollBehavior],
        scrollBehaviorClassNames[scrollBehavior],
        scrollbarHidden && styles.scrollbarHidden,
      )}
      ref={getRootRef}
      onScroll={onScroll}
      {...restProps}
    >
      {children}
    </div>
  );
};
