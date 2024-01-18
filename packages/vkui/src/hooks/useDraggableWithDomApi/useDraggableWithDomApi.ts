import * as React from 'react';
import type { TouchEvent } from '../../components/Touch/Touch';
import { getBoundingClientRect, getNearestOverflowAncestor, getNodeScroll } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { createAutoScrollController, getAutoScrollingData } from './autoScroll';
import {
  AUTO_SCROLL_START_DELAY,
  DATA_DRAGGABLE_PLACEHOLDER_KEY,
  ITEM_INITIAL_INDEX,
} from './constants';
import type {
  Direction,
  DraggingItem,
  PlaceholderItem,
  SiblingItem,
  UseDraggable,
  UseDraggableProps,
} from './types';
import {
  getTargetIsOverOrUnderElData,
  setDraggingItemShiftStyles,
  setInitialDraggingItemStyles,
  setInitialPlaceholderItemStyles,
  setInitialSiblingItemStyles,
  setSiblingItemsShiftStyles,
  unsetInitialDraggingItemStyles,
  unsetInitialPlaceholderItemStyles,
  unsetInitialSiblingItemStyles,
} from './utils';

export const useDraggableWithDomApi = <T extends HTMLElement>({
  elRef: draggingElRef,
  onDragFinish,
}: UseDraggableProps<T>): UseDraggable => {
  const [dragging, setDragging] = React.useState(false);
  const lastClientYRef = React.useRef(0);
  const lastDragShiftYRef = React.useRef(0);

  const scrollElRef = React.useRef<Element | Window | null>(null);
  const lastScrollTopRef = React.useRef<number>(0);
  const scrollControllerRef = React.useRef<ReturnType<typeof createAutoScrollController> | null>(
    null,
  );
  const initializeScrollRefs = (draggableEl: HTMLElement) => {
    const node = getNearestOverflowAncestor(draggableEl);
    if (node) {
      scrollElRef.current = node;
      lastScrollTopRef.current = getNodeScroll(node).scrollTop;
      scrollControllerRef.current = createAutoScrollController(scrollElRef.current);
    }
  };
  const cleanupScrollRefs = () => {
    lastScrollTopRef.current = 0;
    scrollControllerRef.current?.stop();
    scrollElRef.current = scrollControllerRef.current = null;
  };

  const lastDragDirectionRef = React.useRef<Direction | undefined>(undefined);
  const toggleDragDirection = (prevShiftY: number, nextShiftY: number) => {
    const shiftYDiff = prevShiftY - nextShiftY;
    if (shiftYDiff < 0) {
      return 'down';
    }
    if (shiftYDiff > 0) {
      return 'up';
    }
    return lastDragDirectionRef.current;
  };

  const itemStartIndexRef = React.useRef<number>(ITEM_INITIAL_INDEX);
  const itemEndIndexRef = React.useRef<number>(ITEM_INITIAL_INDEX);
  const draggingItemRef = React.useRef<DraggingItem | null>(null);
  const placeholderItemRef = React.useRef<PlaceholderItem | null>(null);
  const siblingItemsRef = React.useRef<SiblingItem[]>([]);
  const initializeItems = (draggingEl: HTMLElement) => {
    const draggingElRect = getBoundingClientRect(draggingEl, true);
    const { children } = draggingEl.parentElement || { children: [] };
    Array.prototype.forEach.call(children, (el: HTMLElement, index) => {
      if (el === draggingEl) {
        itemStartIndexRef.current = itemEndIndexRef.current = index;
        draggingItemRef.current = { index, el, draggingElRect };
      } else if (el.getAttribute(DATA_DRAGGABLE_PLACEHOLDER_KEY) !== null) {
        placeholderItemRef.current = { index, el, draggingElRect };
      } else {
        siblingItemsRef.current.push({ index, el, shifted: itemStartIndexRef.current !== ITEM_INITIAL_INDEX && itemStartIndexRef.current < index, draggingElRect }); // prettier-ignore
      }
    });
    if (placeholderItemRef.current) {
      setInitialPlaceholderItemStyles(placeholderItemRef.current); // 1. reflow
    }
    if (draggingItemRef.current) {
      setInitialDraggingItemStyles(draggingItemRef.current); // 2. repaint
    }
    siblingItemsRef.current.forEach(setInitialSiblingItemStyles); // 2. repaint
  };
  const cleanupItems = () => {
    if (placeholderItemRef.current) {
      unsetInitialPlaceholderItemStyles(placeholderItemRef.current); // 1. reflow
    }
    if (draggingItemRef.current) {
      unsetInitialDraggingItemStyles(draggingItemRef.current); // 2. repaint
    }
    siblingItemsRef.current.forEach(unsetInitialSiblingItemStyles); // 2. repaint
    siblingItemsRef.current = [];
    placeholderItemRef.current = draggingItemRef.current = null;

    const swappedItemIndexRange = { from: itemStartIndexRef.current, to: itemEndIndexRef.current };
    itemStartIndexRef.current = itemEndIndexRef.current = ITEM_INITIAL_INDEX;
    return swappedItemIndexRange;
  };
  const getShiftAndUnshiftItemsPreparedData = (
    clientY: number,
  ): [Array<[SiblingItem, Direction]>, Array<[SiblingItem, Direction]>] => {
    const shiftItemEls: Array<[SiblingItem, Direction]> = [];
    const unshiftItemEls: Array<[SiblingItem, Direction]> = [];
    itemEndIndexRef.current = itemStartIndexRef.current;
    siblingItemsRef.current.forEach((siblingItem) => {
      const { isOverEl, isUnderEl } = getTargetIsOverOrUnderElData(
        clientY,
        getBoundingClientRect(siblingItem.el),
      );
      if (itemStartIndexRef.current < siblingItem.index) {
        if (isOverEl) {
          itemEndIndexRef.current = itemEndIndexRef.current + 1;
          if (lastDragDirectionRef.current === 'down' && siblingItem.shifted) {
            siblingItem.shifted = false;
            shiftItemEls.push([siblingItem, 'up']);
          }
        }
        if (isUnderEl) {
          if (lastDragDirectionRef.current === 'up' && !siblingItem.shifted) {
            siblingItem.shifted = true;
            unshiftItemEls.push([siblingItem, 'down']);
          }
        }
      } else if (itemStartIndexRef.current > siblingItem.index) {
        if (isUnderEl) {
          itemEndIndexRef.current = itemEndIndexRef.current - 1;
          if (lastDragDirectionRef.current === 'up' && !siblingItem.shifted) {
            siblingItem.shifted = true;
            shiftItemEls.push([siblingItem, 'down']);
          }
        }
        if (isOverEl) {
          if (lastDragDirectionRef.current === 'down' && siblingItem.shifted) {
            siblingItem.shifted = false;
            unshiftItemEls.push([siblingItem, 'up']);
          }
        }
      }
    });
    return [shiftItemEls, unshiftItemEls];
  };
  const setShiftAndUnshiftItemStyles = (
    shiftItemEls: Array<[SiblingItem, Direction]>,
    unshiftItemEls: Array<[SiblingItem, Direction]>,
  ) => {
    shiftItemEls.forEach(setSiblingItemsShiftStyles);
    unshiftItemEls.forEach(setSiblingItemsShiftStyles);
  };

  const schedulingAutoScrollTimeoutIdRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearSchedulingAutoScrollTimeout = () => {
    if (schedulingAutoScrollTimeoutIdRef.current) {
      clearTimeout(schedulingAutoScrollTimeoutIdRef.current);
      schedulingAutoScrollTimeoutIdRef.current = null;
    }
  };
  const tryAutoScroll = () => {
    if (scrollControllerRef.current) {
      scrollControllerRef.current.tryAutoScroll(() => {
        return scrollElRef.current
          ? getAutoScrollingData(lastClientYRef.current, scrollElRef.current)
          : {
              shouldScrolling: false,
              y: 0,
            };
      });
    }
  };
  const schedulingAutoScroll = () => {
    clearSchedulingAutoScrollTimeout();
    schedulingAutoScrollTimeoutIdRef.current = setTimeout(() => {
      schedulingAutoScrollTimeoutIdRef.current = null;
      tryAutoScroll();
    }, AUTO_SCROLL_START_DELAY);
  };

  const onDragStart = (event: TouchEvent) => {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
  };

  const onDragMove = (event: TouchEvent) => {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    const draggingEl = draggingElRef.current;

    if (!draggingEl) {
      return;
    }

    if (dragging) {
      lastDragDirectionRef.current = toggleDragDirection(lastDragShiftYRef.current, event.shiftY);
      lastDragShiftYRef.current = event.shiftY;
      lastClientYRef.current = event.clientY;

      if (scrollControllerRef.current && scrollControllerRef.current.isRunning) {
        setDraggingItemShiftStyles(draggingEl, lastDragShiftYRef.current);
      } else {
        const [shiftItemEls, unshiftItemEls] = getShiftAndUnshiftItemsPreparedData(
          lastClientYRef.current,
        );
        setDraggingItemShiftStyles(draggingEl, lastDragShiftYRef.current);
        setShiftAndUnshiftItemStyles(shiftItemEls, unshiftItemEls);
        schedulingAutoScroll();
      }
    } else {
      setDragging((prevDragging) => {
        // На случай, если onDragMove успеет вызваться ещё раз до того, как `dragging` выставится в
        // `true`
        if (prevDragging) {
          return prevDragging;
        }
        initializeScrollRefs(draggingEl);
        initializeItems(draggingEl);
        return true;
      });
    }
  };

  const onDragEnd = (event: TouchEvent) => {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    clearSchedulingAutoScrollTimeout();
    cleanupScrollRefs();

    lastClientYRef.current = lastDragShiftYRef.current = 0;
    lastDragDirectionRef.current = undefined;

    if (dragging) {
      const swappedItemRange = cleanupItems();
      if (onDragFinish) {
        onDragFinish(swappedItemRange);
      }
      setDragging(false);
    }
  };

  const handleScroll = React.useCallback(() => {
    if (!draggingElRef.current || !scrollElRef.current) {
      return;
    }

    const nextScrollTop = getNodeScroll(scrollElRef.current).scrollTop;
    lastDragDirectionRef.current = toggleDragDirection(lastScrollTopRef.current, nextScrollTop);
    const scrollDiff = lastScrollTopRef.current - nextScrollTop;
    const clientYWithScrollOffset = lastClientYRef.current + scrollDiff;
    lastScrollTopRef.current = nextScrollTop;

    const [shiftItemEls, unshiftItemEls] =
      getShiftAndUnshiftItemsPreparedData(clientYWithScrollOffset);
    setShiftAndUnshiftItemStyles(shiftItemEls, unshiftItemEls);
  }, [draggingElRef]);

  useIsomorphicLayoutEffect(
    function recalculateOnScroll() {
      const scrollEl = scrollElRef.current;
      if (!dragging || !scrollEl) {
        return;
      }
      scrollEl.addEventListener('scroll', handleScroll);
      return () => {
        if (scrollEl) {
          scrollEl.removeEventListener('scroll', handleScroll);
        }
      };
    },
    [dragging, handleScroll],
  );

  useIsomorphicLayoutEffect(
    () =>
      function componentWillUnmount() {
        if (placeholderItemRef.current) {
          unsetInitialPlaceholderItemStyles(placeholderItemRef.current);
        }
      },
    [],
  );

  return { dragging, onDragStart, onDragMove, onDragEnd };
};
