import * as React from 'react';

/* eslint-disable jsdoc/require-jsdoc */
interface UseScrollListControllerReturn {
  scrollBoxRef: React.RefObject<HTMLDivElement | null>;
  optionsWrapperRef: React.RefObject<HTMLDivElement | null>;
  scrollToElement: (index: number, center?: boolean) => void;
}
/* eslint-enable jsdoc/require-jsdoc */

export function useScrollListController(): UseScrollListControllerReturn {
  const scrollBoxRef = React.useRef<HTMLDivElement | null>(null);
  const optionsWrapperRef = React.useRef<HTMLDivElement>(null);

  const scrollToElement = React.useCallback(
    (index: number, center = false) => {
      const dropdown = scrollBoxRef.current;
      const optionsWrapper = optionsWrapperRef.current;

      if (!dropdown || !optionsWrapper || index < 0 || index > optionsWrapper.children.length) {
        return;
      }
      const item = optionsWrapper.children[index] as HTMLElement | null;
      /* istanbul ignore if: проверка для TS (ситуация, когда среди children нет элемента с index, маловероятна) */
      if (!item) {
        return;
      }

      const dropdownHeight = dropdown.offsetHeight;
      const scrollTop = dropdown.scrollTop;
      const itemTop = item.offsetTop;
      const itemHeight = item.offsetHeight;

      if (center) {
        dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
      } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
        dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
      } else if (itemTop < scrollTop) {
        dropdown.scrollTop = itemTop;
      }
    },
    [optionsWrapperRef, scrollBoxRef],
  );

  return { scrollToElement, scrollBoxRef, optionsWrapperRef };
}
