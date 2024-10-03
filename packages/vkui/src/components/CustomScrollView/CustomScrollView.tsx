import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import styles from './CustomScrollView.module.css';

const overscrollBehaviorClassNames = {
  auto: undefined,
  contain: styles.boxOverscrollBehaviorContain,
  none: styles.boxOverscrollBehaviorNone,
};

export interface CustomScrollViewProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  className?: HTMLDivElement['className'];
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  /**
   * Поведение overscroll, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
   */
  overscrollBehavior?: 'auto' | 'contain' | 'none';
  /**
   * Включение отображения горизонтального скролла
   */
  enableHorizontalScroll?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CustomScrollView
 */
export const CustomScrollView = ({
  className,
  children,
  enableHorizontalScroll = false,
  onScroll,
  getRootRef,
  overscrollBehavior = 'auto',
  ...restProps
}: CustomScrollViewProps): React.ReactNode => {
  return (
    <div
      className={classNames(
        className,
        styles.host,
        enableHorizontalScroll && styles.horizontalScrollEnabled,
        overscrollBehaviorClassNames[overscrollBehavior],
      )}
      ref={getRootRef}
      onScroll={onScroll}
      {...restProps}
    >
      {children}
    </div>
  );
};
