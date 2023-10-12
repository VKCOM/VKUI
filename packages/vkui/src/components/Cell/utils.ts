import type { Item, YCoords } from './types';

export const getYEdgesOfViewport = (window: Window, scrollElRect: DOMRect) => {
  const scrollElTop = window.scrollY + scrollElRect.top;
  const scrollElBottom = scrollElTop + scrollElRect.height;
  return {
    top: scrollElTop,
    bottom: scrollElBottom,
  };
};

export const getElOverflowData = (
  elRect: DOMRect,
  offsetParentRect: DOMRect,
  yEdgesOfViewport: YCoords,
) => {
  const edgeTop = Math.max(offsetParentRect.top, yEdgesOfViewport.top);
  const edgeBottom = Math.min(offsetParentRect.bottom, yEdgesOfViewport.bottom);

  if (elRect.top < edgeTop) {
    return {
      isOutside: true,
      direction: 'up' as const,
      shiftYOffset: edgeTop - elRect.top,
    };
  }

  if (elRect.bottom > edgeBottom) {
    return {
      isOutside: true,
      direction: 'down' as const,
      shiftYOffset: edgeBottom - elRect.bottom,
    };
  }

  return { isOutside: false, direction: undefined, shiftYOffset: 0 };
};

export const getOffsetParentAbsoluteYCoords = (
  scrollTop: number,
  offsetParentRect: DOMRect,
  yEdgesOfViewport: YCoords,
) => {
  const top = scrollTop + offsetParentRect.top - yEdgesOfViewport.top;
  const bottom = scrollTop + offsetParentRect.bottom - yEdgesOfViewport.bottom;
  return { top, bottom };
};

const MAXIMUM_STEP = 900;
const INVERT_STEP = 2000;

export const getAutoScrollingData = (
  elCoord: YCoords,
  yEdgesOfViewport: YCoords,
  offsetParentAbsoluteYCoords: YCoords,
  minDistanceFromEdge = 24,
) => {
  const edgeTop = yEdgesOfViewport.top + minDistanceFromEdge;
  const edgeBottom = yEdgesOfViewport.bottom - minDistanceFromEdge;

  if (elCoord.top < edgeTop) {
    return {
      speed: INVERT_STEP - ((edgeTop - elCoord.top) / minDistanceFromEdge) * MAXIMUM_STEP,
      scrollTo: offsetParentAbsoluteYCoords.top,
    };
  }

  if (elCoord.bottom > edgeBottom) {
    return {
      speed: INVERT_STEP - ((elCoord.bottom - edgeBottom) / minDistanceFromEdge) * MAXIMUM_STEP,
      scrollTo: offsetParentAbsoluteYCoords.bottom,
    };
  }

  return null;
};

export const shouldScrollImmediately = (scrollSpeed: number | null) => {
  return scrollSpeed ? scrollSpeed <= INVERT_STEP - MAXIMUM_STEP : false;
};

export const shiftDraggableEl = (draggableEl: HTMLElement, shiftY: number) => {
  draggableEl.style.transform = `translateY(${shiftY}px)`;
};

export const shiftItem = (direction: 'up' | 'down', item: Item) => {
  const directionEasingType = direction === 'up' ? 'in' : 'out';
  const directionTranslateY = direction === 'up' ? -100 : 100;
  item.el.style.transition = `transform 0.3s ease-${directionEasingType}`;
  item.el.style.transform = `translateY(${directionTranslateY}%)`;
  item.shifted = true;
};

export const unshiftItem = (item: Item) => {
  item.el.style.transform = '';
  item.shifted = false;
};

export const resetItemShiftStyle = (item: Item) => {
  item.el.style.transition = '';
  item.el.style.transform = '';
};
