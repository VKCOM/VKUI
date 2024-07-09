import type { Direction, DraggingItem, PlaceholderItem, SiblingItem } from './types';

export const getTargetIsOverOrUnderElData = (
  clientY: number,
  elRect: DOMRect,
): {
  isUnderEl: boolean;
  isOverEl: boolean;
} => {
  const elRectHalfHeight = elRect.height / 2;
  return {
    isUnderEl: clientY <= elRect.bottom - elRectHalfHeight,
    isOverEl: clientY >= elRect.top + elRectHalfHeight,
  };
};

export const setDraggingItemShiftStyles = (draggingEl: HTMLElement, nextShiftY: number): void => {
  requestAnimationFrame(() => {
    draggingEl.style.transform = `translateY(${nextShiftY}px)`;
  });
};

export const setSiblingItemsShiftStyles = (
  [
    {
      el,
      draggingElRect: { height },
    },
    direction,
  ]: [Omit<SiblingItem, 'shifted'>, Direction],
  additionalGap = 0,
): void => {
  requestAnimationFrame(() => {
    if (direction === 'up') {
      el.style.setProperty('transition', 'transform 0.3s ease-in 0s');
      el.style.removeProperty('transform');
    } else {
      el.style.setProperty('transition', 'transform 0.3s ease-out 0s');
      el.style.setProperty('transform', `translateY(${height + additionalGap}px)`);
    }
  });
};

export const setInitialDraggingItemStyles = ({ el, draggingElRect }: DraggingItem): void => {
  const { top, left, width, height } = draggingElRect;
  requestAnimationFrame(() => {
    // Inspired by https://github.com/hello-pangea/dnd
    el.style.setProperty('pointer-events', 'none');
    el.style.setProperty('position', 'fixed');
    el.style.setProperty('top', `${top}px`);
    el.style.setProperty('left', `${left}px`);
    el.style.setProperty('width', `${width}px`);
    el.style.setProperty('height', `${height}px`);
    el.style.setProperty('z-index', 'var(--vkui_internal--z_index_cell_dragging)');
    el.style.setProperty('box-sizing', 'border-box');
    el.style.setProperty('transform', 'translateY(0)');
  });
};

export const unsetInitialDraggingItemStyles = ({ el }: DraggingItem): void => {
  requestAnimationFrame(() => {
    el.style.removeProperty('pointer-events');
    el.style.removeProperty('position');
    el.style.removeProperty('top');
    el.style.removeProperty('left');
    el.style.removeProperty('width');
    el.style.removeProperty('height');
    el.style.removeProperty('z-index');
    el.style.removeProperty('box-sizing');
    el.style.removeProperty('transform');
  });
};

export const setInitialPlaceholderItemStyles = ({ el, draggingElRect }: PlaceholderItem): void => {
  if (el.firstElementChild) {
    return;
  }
  const { width, height } = draggingElRect;
  const node = el.cloneNode() as HTMLElement;
  node.style.setProperty('display', 'block');
  node.style.setProperty('width', `${width}px`);
  node.style.setProperty('height', `${height}px`);
  node.style.setProperty('pointer-events', 'none');
  el.appendChild(node);
  el.style.setProperty('display', 'block');
};

export const unsetInitialPlaceholderItemStyles = ({ el }: PlaceholderItem): void => {
  el.style.display = '';
  el.removeAttribute('style');
  if (el.firstElementChild) {
    el.firstElementChild.remove();
  }
};

export const setInitialSiblingItemStyles = (
  { el, shifted, draggingElRect }: SiblingItem,
  additionalGap = 0,
): void => {
  const { height } = draggingElRect;
  requestAnimationFrame(() => {
    el.style.setProperty('pointer-events', 'none');
    el.style.setProperty('transition', 'none 0s ease 0s');

    if (shifted) {
      el.style.setProperty('transform', `translateY(${height + additionalGap}px)`);
    }
  });
};

export const unsetInitialSiblingItemStyles = ({ el }: Omit<SiblingItem, 'shifted'>): void => {
  requestAnimationFrame(() => {
    el.style.removeProperty('pointer-events');
    el.style.removeProperty('transition');
    el.style.removeProperty('transform');
  });
};
