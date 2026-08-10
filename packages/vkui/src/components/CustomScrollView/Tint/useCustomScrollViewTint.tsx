'use client';

import * as React from 'react';
import { throttle } from '@vkontakte/vkjs';
import { useResizeObserverElement } from '../../../hooks/useResizeObserver';
import { type HasRootRef } from '../../../types';

function linearGradient(direction: 0 | 90 | 180 | 270): string {
  return `linear-gradient(${direction}deg, transparent, black 40px)`;
}

type UseCustomScrollViewTintResult<T = HTMLDivElement> = {
  // eslint-disable-next-line jsdoc/require-jsdoc
  onScroll: React.UIEventHandler<T> | undefined;
  // eslint-disable-next-line jsdoc/require-jsdoc
  style: React.CSSProperties | undefined;
} & HasRootRef<T>;

/**
 * @see https://vkui.io/components/custom-scroll-view
 * @since 8.1.0
 */
export function useCustomScrollViewTint(): UseCustomScrollViewTintResult {
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

  const updateTint = React.useCallback((scrollElement: Element) => {
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

  const getRootRef = useResizeObserverElement<HTMLDivElement>(updateTintThrottle);

  React.useEffect(() => {
    if (!getRootRef.current) {
      return;
    }

    updateTint(getRootRef.current);
  }, [getRootRef, updateTint]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    updateTintThrottle(target);
  };

  return {
    onScroll,
    getRootRef,
    style: {
      maskComposite: 'intersect',
      maskImage: tint.join(', ') || 'none',
    },
  };
}
