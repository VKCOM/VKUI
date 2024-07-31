import * as React from 'react';
import { TimeoutId } from '../../types';

type ScrollDirection = 'vertical' | 'horizontal';

/**
 * Хук определяет в каком измерении происходит скролл(в горизонтальном или вертикальном)
 */
export const useDetectScrollDirection = () => {
  const lastScrollLeft = React.useRef(0);
  const lastScrollTop = React.useRef(0);

  const timeoutId = React.useRef<TimeoutId>(null);
  const scrollDirectionRef = React.useRef<ScrollDirection | null>(null);

  return React.useCallback((event: React.UIEvent<HTMLElement>) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    const { scrollTop, scrollLeft } = event.currentTarget;
    if (scrollTop !== lastScrollTop.current) {
      scrollDirectionRef.current = 'vertical';
      lastScrollTop.current = scrollTop;
    } else if (scrollLeft !== lastScrollLeft.current) {
      scrollDirectionRef.current = 'horizontal';
      lastScrollLeft.current = scrollLeft;
    }
    if (scrollDirectionRef.current !== null) {
      timeoutId.current = setTimeout(() => (scrollDirectionRef.current = null), 200);
    }
    return scrollDirectionRef.current;
  }, []);
};
