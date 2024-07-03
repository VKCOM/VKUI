import * as React from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

const useScrollbarWidth = (scrollContainerRef: React.RefObject<HTMLElement | null>) => {
  const [scrollWidth, setScrollWidth] = React.useState(0);

  const recalculateScrollWidth = () => {
    if (scrollContainerRef && scrollContainerRef.current) {
      setScrollWidth(
        scrollContainerRef.current?.offsetWidth - scrollContainerRef.current?.clientWidth,
      );
    }
  };

  useResizeObserver(scrollContainerRef, recalculateScrollWidth);

  useIsomorphicLayoutEffect(recalculateScrollWidth);

  return scrollWidth;
};

export { useScrollbarWidth };
