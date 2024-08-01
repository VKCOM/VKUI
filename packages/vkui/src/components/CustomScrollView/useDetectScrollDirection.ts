import * as React from 'react';

type ScrollDirection = 'vertical' | 'horizontal';

/**
 * Хук определяет в каком измерении происходит скролл(в горизонтальном или вертикальном)
 */
export const useDetectScrollDirection = () => {
  const lastScrollLeft = React.useRef(0);
  const lastScrollTop = React.useRef(0);

  return React.useCallback((event: React.UIEvent<HTMLElement>) => {
    const { scrollTop, scrollLeft } = event.currentTarget;
    let scrollDirection: ScrollDirection | null = null;
    if (scrollTop !== lastScrollTop.current) {
      scrollDirection = 'vertical';
      lastScrollTop.current = scrollTop;
    } else if (scrollLeft !== lastScrollLeft.current) {
      scrollDirection = 'horizontal';
      lastScrollLeft.current = scrollLeft;
    }
    return scrollDirection;
  }, []);
};
