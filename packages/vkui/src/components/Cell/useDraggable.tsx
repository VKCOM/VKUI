import * as React from 'react';
import {
  getBoundingClientRect,
  getNearestOverflowAncestor,
  getScrollTop,
  useDOM,
} from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { TouchEvent } from '../Touch/Touch';
import { AutoScrollController } from './AutoScrollController';
import type { Direction, Item, UseDraggable, UseDraggableProps, YCoords } from './types';
import {
  getAutoScrollingData,
  getElOverflowData,
  getOffsetParentAbsoluteYCoords,
  getYEdgesOfViewport,
  resetItemShiftStyle,
  shiftDraggableEl,
  shiftItem,
  shouldScrollImmediately,
  unshiftItem,
} from './utils';

const AUTO_SCROLL_START_DELAY = 500;

export const useDraggable = <T extends HTMLElement>({
  elRef: draggableElRef,
  onDragFinish,
}: UseDraggableProps<T>): UseDraggable => {
  const [dragging, setDragging] = React.useState<boolean>(false);
  const shiftYOffsetByScrollRef = React.useRef<number>(0);
  const shiftYOffsetByDragRef = React.useRef<number>(0);
  const preservedDragShiftYRef = React.useRef<number>(0);
  const lastDragShiftYRef = React.useRef<number>(0);
  const lastDragDirectionRef = React.useRef<Direction | undefined>(undefined);

  const scrollElRef = React.useRef<Element | Window | null>(null);
  const scrollElRectRef = React.useRef<DOMRect | null>(null);
  const lastScrollTopRef = React.useRef<number>(0);
  const autoScrollControllerInstanceRef = React.useRef<AutoScrollController | null>(null);
  const initializeScrollRefs = (draggableEl: HTMLElement) => {
    const node = getNearestOverflowAncestor(draggableEl);
    if (node) {
      scrollElRef.current = node;
      scrollElRectRef.current = getBoundingClientRect(node);
      lastScrollTopRef.current = getScrollTop(node);
      autoScrollControllerInstanceRef.current = new AutoScrollController(scrollElRef.current);
    }
  };
  const reinitializeScrollElRectRef = () => {
    if (scrollElRef.current) {
      scrollElRectRef.current = getBoundingClientRect(scrollElRef.current);
    }
  };
  const cleanupScrollRefs = () => {
    scrollElRef.current = null;
    scrollElRectRef.current = null;
    lastScrollTopRef.current = 0;
    if (autoScrollControllerInstanceRef.current) {
      autoScrollControllerInstanceRef.current.stop();
      autoScrollControllerInstanceRef.current = null;
    }
  };

  const offsetParentRef = React.useRef<Element | Window | null>(null);
  const offsetParentRectRef = React.useRef<DOMRect | null>(null);
  const offsetParentAbsoluteYCoordsRef = React.useRef<YCoords | null>(null);
  const initializeOffsetParentRefs = (draggableEl: HTMLElement) => {
    const node = draggableEl.parentElement;
    if (node) {
      offsetParentRef.current = node;
      offsetParentRectRef.current = getBoundingClientRect(node);
    }
  };
  const reinitializeOffsetParentRectRef = () => {
    if (offsetParentRef.current) {
      offsetParentRectRef.current = getBoundingClientRect(offsetParentRef.current);
    }
  };
  const cleanupOffsetParentRefs = () => {
    offsetParentRef.current = null;
    offsetParentRectRef.current = null;
    offsetParentAbsoluteYCoordsRef.current = null;
  };

  const itemsRef = React.useRef<Item[]>([]);
  const itemStartIndexRef = React.useRef<number>(0);
  const itemEndIndexRef = React.useRef<number>(0);
  const initializeItems = (draggableEl: HTMLElement) => {
    const { children } = draggableEl.parentElement || { children: [] };
    itemsRef.current = Array.prototype.map.call(children, (el: HTMLElement, index) => {
      if (el === draggableEl) {
        itemStartIndexRef.current = index;
        itemEndIndexRef.current = index;
      }
      return { el, shifted: false };
    }) as Item[];
  };
  const cleanupItems = () => {
    itemsRef.current.forEach(resetItemShiftStyle);
    itemsRef.current = [];
    const result = { from: itemStartIndexRef.current, to: itemEndIndexRef.current };
    itemStartIndexRef.current = 0;
    itemEndIndexRef.current = 0;
    return result;
  };
  const shiftOrUnshiftItems = (draggableElRect: DOMRect) => {
    itemEndIndexRef.current = itemStartIndexRef.current;
    itemsRef.current.forEach((item, itemIndex) => {
      if (itemStartIndexRef.current === itemIndex) {
        return;
      }

      const itemElRect = getBoundingClientRect(item.el);
      const itemElRectHalfHeight = itemElRect.height / 2;
      const targetOverItem = draggableElRect.bottom >= itemElRect.top + itemElRectHalfHeight;
      const targetUnderItem = draggableElRect.top <= itemElRect.bottom - itemElRectHalfHeight;

      if (itemStartIndexRef.current < itemIndex) {
        if (targetOverItem) {
          if (lastDragDirectionRef.current === 'down' && !item.shifted) {
            shiftItem('up', item);
          }
          itemEndIndexRef.current = itemEndIndexRef.current + 1;
        }
        if (targetUnderItem && lastDragDirectionRef.current === 'up' && item.shifted) {
          unshiftItem(item);
        }
      } else if (itemStartIndexRef.current > itemIndex) {
        if (targetUnderItem) {
          if (lastDragDirectionRef.current === 'up' && !item.shifted) {
            shiftItem('down', item);
          }
          itemEndIndexRef.current = itemEndIndexRef.current - 1;
        }
        if (targetOverItem && lastDragDirectionRef.current === 'down' && item.shifted) {
          unshiftItem(item);
        }
      }
    });
  };

  const { window } = useDOM();
  const startAutoScrollTimeoutIdRef = React.useRef<number | null>(null);
  const clearStartAutoScrollTimeout = () => {
    if (startAutoScrollTimeoutIdRef.current) {
      window!.clearTimeout(startAutoScrollTimeoutIdRef.current);
    }
  };
  const startAutoScrollIfNeeded = (draggableElRect: YCoords, edgeOfViewport: YCoords) => {
    if (!offsetParentAbsoluteYCoordsRef.current || !autoScrollControllerInstanceRef.current) {
      return;
    }

    const yScrollingData = getAutoScrollingData(draggableElRect, edgeOfViewport, offsetParentAbsoluteYCoordsRef.current); // prettier-ignore

    if (yScrollingData === null) {
      autoScrollControllerInstanceRef.current.stop();
      return;
    }

    const autoScroll = () => {
      if (autoScrollControllerInstanceRef.current) {
        autoScrollControllerInstanceRef.current.updateSpeed(yScrollingData.speed);

        if (!autoScrollControllerInstanceRef.current.isScrolling) {
          autoScrollControllerInstanceRef.current.start(yScrollingData.scrollTo);
        }
      }
    };

    if (shouldScrollImmediately(yScrollingData.speed)) {
      autoScroll();
    } else {
      startAutoScrollTimeoutIdRef.current = window!.setTimeout(autoScroll, AUTO_SCROLL_START_DELAY);
    }
  };

  const draggableElIsOutsideViewport = React.useRef<boolean>(false);
  const initializeDraggableElPosition = (draggableEl: HTMLElement) => {
    const scrollElRect = scrollElRectRef.current;
    const offsetParentRect = offsetParentRectRef.current;

    if (!scrollElRect || !offsetParentRect) {
      return;
    }

    const yEdgesOfViewport = getYEdgesOfViewport(window!, scrollElRect);

    offsetParentAbsoluteYCoordsRef.current = getOffsetParentAbsoluteYCoords(lastScrollTopRef.current, offsetParentRect, yEdgesOfViewport); // prettier-ignore

    const { direction, isOutside, shiftYOffset } = getElOverflowData(getBoundingClientRect(draggableEl), offsetParentRect, yEdgesOfViewport); // prettier-ignore

    lastDragDirectionRef.current = direction;
    draggableElIsOutsideViewport.current = isOutside;
    lastDragShiftYRef.current = preservedDragShiftYRef.current = shiftYOffset;

    if (draggableElIsOutsideViewport.current) {
      shiftDraggableEl(draggableEl, lastDragShiftYRef.current);
      shiftOrUnshiftItems(getBoundingClientRect(draggableEl));
    }
  };
  const reinitializeDraggableElPosition = (draggableEl: HTMLElement, nextShiftY: number) => {
    const scrollElRect = scrollElRectRef.current;
    const offsetParentRect = offsetParentRectRef.current;

    if (!scrollElRect || !offsetParentRect) {
      return;
    }

    preservedDragShiftYRef.current = nextShiftY;

    const shiftYDiff = lastDragShiftYRef.current - preservedDragShiftYRef.current;

    if (shiftYDiff < 0) {
      lastDragDirectionRef.current = 'down';
    } else if (shiftYDiff > 0) {
      lastDragDirectionRef.current = 'up';
    }

    shiftDraggableEl(draggableEl, preservedDragShiftYRef.current);

    const yEdgesOfViewport = getYEdgesOfViewport(window!, scrollElRect);
    let draggableElRect = getBoundingClientRect(draggableEl);
    const { isOutside, shiftYOffset } = getElOverflowData(
      draggableElRect,
      offsetParentRect,
      yEdgesOfViewport,
    );

    draggableElIsOutsideViewport.current = isOutside;
    lastDragShiftYRef.current = preservedDragShiftYRef.current + shiftYOffset;

    if (draggableElIsOutsideViewport.current) {
      shiftDraggableEl(draggableEl, lastDragShiftYRef.current);
      draggableElRect = getBoundingClientRect(draggableEl);
    }

    shiftOrUnshiftItems(draggableElRect);

    return { draggableElRect, yEdgesOfViewport };
  };

  const onDragStart = (event: TouchEvent) => {
    const draggableEl = draggableElRef.current;

    if (!draggableEl) {
      return;
    }

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    initializeItems(draggableEl);
    initializeScrollRefs(draggableEl);
    initializeOffsetParentRefs(draggableEl);

    initializeDraggableElPosition(draggableEl);

    setDragging(true);
  };

  const onDragMove = (event: TouchEvent) => {
    clearStartAutoScrollTimeout();

    const draggableEl = draggableElRef.current;

    if (!draggableEl) {
      return;
    }

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    requestAnimationFrame(() => {
      shiftYOffsetByDragRef.current = event.shiftY;

      const nextShiftY = shiftYOffsetByScrollRef.current + shiftYOffsetByDragRef.current;
      const updatedStates = reinitializeDraggableElPosition(draggableEl, nextShiftY);

      if (updatedStates) {
        const { draggableElRect, yEdgesOfViewport } = updatedStates;
        startAutoScrollIfNeeded(draggableElRect, yEdgesOfViewport);
      }
    });
  };

  const onDragEnd = (event: TouchEvent) => {
    clearStartAutoScrollTimeout();

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    shiftYOffsetByScrollRef.current = shiftYOffsetByDragRef.current = 0;
    preservedDragShiftYRef.current = lastDragShiftYRef.current = 0;
    lastDragDirectionRef.current = undefined;
    draggableElIsOutsideViewport.current = false;

    const swappedItemRange = cleanupItems();
    cleanupScrollRefs();
    cleanupOffsetParentRefs();

    setDragging(false);

    if (onDragFinish) {
      onDragFinish(swappedItemRange);
    }
  };

  useIsomorphicLayoutEffect(
    function recalculateOnScroll() {
      const draggableEl = draggableElRef.current;
      const scrollEl = scrollElRef.current;

      if (!dragging || !draggableEl || !scrollEl) {
        return;
      }

      const handleScroll = () => {
        requestAnimationFrame(() => {
          reinitializeScrollElRectRef();
          reinitializeOffsetParentRectRef();

          const nextScrollTop = getScrollTop(scrollEl);
          shiftYOffsetByScrollRef.current = nextScrollTop - lastScrollTopRef.current;

          const nextShiftY = shiftYOffsetByDragRef.current + shiftYOffsetByScrollRef.current;
          reinitializeDraggableElPosition(draggableEl, nextShiftY);
        });
      };

      scrollEl.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        if (scrollEl) {
          scrollEl.removeEventListener('scroll', handleScroll);
        }
      };
    },
    [dragging, draggableElRef],
  );

  return { dragging, onDragStart, onDragMove, onDragEnd };
};
