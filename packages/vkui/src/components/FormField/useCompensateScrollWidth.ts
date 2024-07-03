import * as React from "react";
import {useIsomorphicLayoutEffect} from "../../lib/useIsomorphicLayoutEffect";
import {useScrollbarWidth} from "./useScrollbarWidth";

/**
 * Хук нужен для правильного выравнивания элемента after
 * Из-за того, что в некоторых браузерах скролл тоже является частью размера контейнера
 * нельзя выравнивать как inset-inline-end: 0; так как тогда элемент заедет на скролл
 */
export const useCompensateScrollWidth = (scrollContainerRef: React.RefObject<HTMLElement | null>, afterRef: React.RefObject<HTMLElement | null>, showAfter: boolean) => {
  const scrollbarWidth = useScrollbarWidth(scrollContainerRef);

  useIsomorphicLayoutEffect(() => {
    if (showAfter && afterRef.current) {
      afterRef.current?.style.setProperty('inset-inline-end', `${scrollbarWidth}px`);
    }
  }, [showAfter, afterRef, scrollbarWidth]);
}
