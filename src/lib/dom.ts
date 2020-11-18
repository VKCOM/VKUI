export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs/lib/dom';

const isScrollable = function(el: Element) {
  const hasScrollableContent = el.scrollHeight > el.clientHeight;
  const overflowYStyle = getComputedStyle(el).overflowY;
  const isOverflowHidden = overflowYStyle === 'hidden';

  return hasScrollableContent && !isOverflowHidden;
};

export const getScrollableParent = function(el: Element): Element {
  return !el || el === document.body
    ? document.body
    : isScrollable(el) ? el : getScrollableParent(el.parentNode as Element);
};
