import * as React from "react";
import {useIsomorphicLayoutEffect} from "../../lib/useIsomorphicLayoutEffect";
import {useScrollbarWidth} from "./useScrollbarWidth";


export const useCompensateScrollWidth = (scrollContainerRef: React.RefObject<HTMLElement | null>, afterRef: React.RefObject<HTMLElement | null>, showAfter: boolean) => {
  const scrollbarWidth = useScrollbarWidth(scrollContainerRef);

  useIsomorphicLayoutEffect(() => {
    if (showAfter && afterRef.current) {
      afterRef.current?.style.setProperty('inset-inline-end', `${scrollbarWidth}px`);
    }
  }, [showAfter, afterRef, scrollbarWidth]);
}
