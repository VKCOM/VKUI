'use client';

import * as React from 'react';
import { throttle } from '@vkontakte/vkjs';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { type HasRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './CustomScrollViewTint.module.css';

export interface CustomScrollViewTintProps
  extends Omit<React.ComponentProps<'div'>, 'children'>,
    HasRootRef<HTMLDivElement> {
  /**
   * Компонент-обертка для реализации прокрутки с тенями.
   */
  children: (
    props: Pick<React.ComponentProps<'div'>, 'onScroll'> & HasRootRef<HTMLDivElement>,
  ) => React.ReactNode;
}

function linearGradient(direction: 0 | 90 | 180 | 270): string {
  return `linear-gradient(${direction}deg, transparent, black 40px)`;
}

/**
 * @see https://vkui.io/components/custom-scroll-view
 * @since 8.1.0
 */
export function CustomScrollViewTint({
  children,
  ...restProps
}: CustomScrollViewTintProps): React.ReactElement {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [hasTintTop, setHasTintTop] = React.useState(false);
  const [hasTintBottom, setHasTintBottom] = React.useState(false);
  const [hasTintLeft, setHasTintLeft] = React.useState(false);
  const [hasTintRight, setHasTintRight] = React.useState(false);

  const tint = [
    hasTintTop && linearGradient(180),
    hasTintBottom && linearGradient(0),
    hasTintLeft && linearGradient(90),
    hasTintRight && linearGradient(270),
  ].filter(Boolean) as string[];

  const updateTint = React.useCallback((scrollElement: HTMLElement) => {
    setHasTintTop(scrollElement.scrollTop > 1);
    setHasTintBottom(
      scrollElement.scrollHeight - scrollElement.clientHeight - scrollElement.scrollTop > 1,
    );
    setHasTintLeft(scrollElement.scrollLeft > 1);
    setHasTintRight(
      scrollElement.scrollWidth - scrollElement.clientWidth - scrollElement.scrollLeft > 1,
    );
  }, []);

  const updateTintThrottle = React.useMemo(() => throttle(updateTint, 50), [updateTint]);

  React.useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    updateTint(scrollRef.current);
  }, [updateTint]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    updateTintThrottle(target);
  };

  useResizeObserver(scrollRef, updateTintThrottle as (element: HTMLElement | Window) => void);

  return (
    <RootComponent
      baseClassName={styles.host}
      baseStyle={{ maskImage: tint.join(', ') || 'none' }}
      {...restProps}
    >
      {children({ getRootRef: scrollRef, onScroll })}
    </RootComponent>
  );
}
