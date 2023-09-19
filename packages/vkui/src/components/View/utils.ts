import { getOverflowAncestors } from '../../lib/floating';
import { TouchEvent } from '../Touch/Touch';

const swipeBackExcludedSelector = 'input, textarea, [data-vkui-swipe-back=false]';

export function swipeBackExcluded(e: TouchEvent) {
  const target = e.originalEvent.target as HTMLElement;
  // eslint-disable-next-line no-restricted-properties
  return Boolean(target?.closest?.(swipeBackExcludedSelector));
}

export function hasHorizontalScrollableElementWithScrolledToLeft(node: HTMLElement) {
  return getOverflowAncestors(node).some((node) =>
    'scrollLeft' in node ? node.scrollLeft > 0 : false,
  );
}

export const SWIPE_BACK_EDGE_SIZE_THRESHOLD = 20;

export const SWIPE_BACK_SHIFT_THRESHOLD = 10;

export const getSwipeBackPredicates = (startX: number, shiftX: number, innerWidth: number) => {
  const swipedToOpposite = shiftX < 0;
  const swipeBackTriggered = shiftX >= SWIPE_BACK_SHIFT_THRESHOLD;
  const viewportStartEdgeTouched = startX <= SWIPE_BACK_EDGE_SIZE_THRESHOLD;
  const viewportEndEdgeTouched = startX >= innerWidth - SWIPE_BACK_EDGE_SIZE_THRESHOLD;
  return { swipedToOpposite, swipeBackTriggered, viewportStartEdgeTouched, viewportEndEdgeTouched };
};
