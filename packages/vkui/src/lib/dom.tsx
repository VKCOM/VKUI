import * as React from 'react';
import { canUseDOM } from '@vkontakte/vkjs';
import { rectToClientRect } from '@vkontakte/vkui-floating-ui/core';
import {
  getNearestOverflowAncestor as getNearestOverflowAncestorLib,
  getWindow,
  isElement,
  isHTMLElement,
} from '@vkontakte/vkui-floating-ui/utils/dom';

export {
  getWindow,
  getNodeScroll,
  isHTMLElement,
  isElement,
} from '@vkontakte/vkui-floating-ui/utils/dom';

export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs';
export interface DOMContextInterface {
  /**
   * @ignore
   */
  window?: Window;
  /**
   * @ignore
   */
  document?: Document;
}

export type DOMProps = DOMContextInterface;

/* eslint-disable no-restricted-globals */
export const getDOM = (): DOMContextInterface => ({
  window: canUseDOM ? window : undefined,
  document: canUseDOM ? document : undefined,
});
/* eslint-enable no-restricted-globals */

export const DOMContext: React.Context<DOMContextInterface> =
  React.createContext<DOMContextInterface>(getDOM());

export const useDOM = (): DOMContextInterface => {
  return React.useContext(DOMContext);
};

/**
 * В случае, если используется DOMContext, при проверке 'node instanceOf Window' – Window может быть
 * другим объектом.
 */
export const isWindow = (
  node: Element | Window | VisualViewport | undefined | null,
): node is Window => {
  return node !== null && node !== undefined && 'navigator' in node;
};

export const isBody = (
  node: Element | Window | VisualViewport | undefined | null,
): node is HTMLBodyElement => {
  return node !== null && node !== undefined && 'tagName' in node && node.tagName === 'BODY';
};

export const isDocumentElement = (
  node: Element | Window | VisualViewport | undefined | null,
): node is HTMLHtmlElement => {
  return node !== null && node !== undefined && 'tagName' in node && node.tagName === 'HTML';
};

export function withDOM<Props>(
  Component: React.ComponentType<Props & DOMProps>,
): React.ComponentType<Props> {
  const WithDOM = (props: Props) => {
    const dom = useDOM();
    return <Component {...props} {...dom} />;
  };
  return WithDOM;
}

export function blurActiveElement(document: Document | undefined): void {
  if (document && document.activeElement) {
    (document.activeElement as HTMLElement).blur();
  }
}

export const TRANSFORM_DEFAULT_VALUES: string[] = ['none', 'initial', 'inherit', 'unset'];
export const WILL_CHANGE_DEFAULT_VALUES: string[] = ['auto', 'initial', 'inherit', 'unset'];
export function getTransformedParentCoords(element: Element): {
  x: number;
  y: number;
} {
  let parentNode = element.parentNode;
  while (parentNode !== null) {
    if (isHTMLElement(parentNode)) {
      const { transform, willChange } = getComputedStyle(parentNode);
      if (
        !TRANSFORM_DEFAULT_VALUES.includes(transform) ||
        !WILL_CHANGE_DEFAULT_VALUES.includes(willChange)
      ) {
        const { x, y } = parentNode.getBoundingClientRect();
        return { x, y };
      }
    }
    parentNode = parentNode.parentNode;
  }
  return { x: 0, y: 0 };
}

export const getBoundingClientRect = (node: Element | Window, isFixedStrategy = false) => {
  const element = isWindow(node) ? node.document.documentElement : node;
  const clientRect = element.getBoundingClientRect();

  if (isDocumentElement(element)) {
    /**
     * Если на странице не используется `html, body { height: 100% }` (или `height: 100vh`), то
     * `height`, полученный из `document.documentElement.getBoundingClientRect()`, будет возвращать
     * `scrollHeight`, а не `clientHeight`. Поэтому перебиваем `height` на `clientHeight`.
     */
    clientRect.height = element.clientHeight;
  }

  let offsetX = 0;
  let offsetY = 0;
  if (isFixedStrategy) {
    const { x, y } = getTransformedParentCoords(element);
    offsetX = x;
    offsetY = y;
  }

  return rectToClientRect({
    x: clientRect.left - offsetX,
    y: clientRect.top - offsetY,
    width: clientRect.width,
    height: clientRect.height,
  }) as DOMRect;
};

export const getRelativeBoundingClientRect = (parent: Element, child: Element) => {
  const parentRect = getBoundingClientRect(parent);
  const childRect = getBoundingClientRect(child);
  return rectToClientRect({
    x: childRect.left - parentRect.left,
    y: childRect.top - parentRect.top,
    width: childRect.width,
    height: childRect.height,
  }) as DOMRect;
};

/**
 * Адаптер над getNearestOverflowAncestor из @floating-ui/utils/dom.
 *
 * document.body подменяем на window, т.к. на document.body нельзя применить скролл.
 */
export const getNearestOverflowAncestor = (childEl: Node): HTMLElement | Window | null => {
  const foundAncestor = getNearestOverflowAncestorLib(childEl);

  return isBody(foundAncestor)
    ? getWindow(foundAncestor)
    : isHTMLElement(childEl)
      ? foundAncestor
      : null;
};

export const getScrollHeight = (node: Element | Window): number => {
  return isWindow(node) ? node.document.documentElement.scrollHeight : node.scrollHeight;
};

export const getScrollRect = (
  node: Element | Window,
): {
  relative: DOMRect;
  edges: {
    y: [number, number];
  };
} => {
  const window = isElement(node) ? getWindow(node) : node;
  const scrollElRect = getBoundingClientRect(node);

  const edgeTop = window.scrollY + scrollElRect.top;
  const edgeBottom = edgeTop + scrollElRect.height;
  const y: [number, number] = [edgeTop, edgeBottom];

  return {
    relative: scrollElRect,
    edges: { y },
  };
};

export const getDocumentBody = (node?: any): HTMLElement => getWindow(node).document.body;

export const getActiveElementByAnotherElement = (el: Element | null): Element | null =>
  el ? el.ownerDocument.activeElement : null;

export const contains = (parent?: Element | null, child?: Element | null): boolean => {
  return parent && child ? parent.contains(child) : false;
};

export const getFirstTouchEventData = (
  event: UIEvent | React.UIEvent<HTMLElement>,
): {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
} => {
  let dataRaw = (function resolveData() {
    switch (event.type) {
      case 'touchend':
        return (event as TouchEvent).changedTouches[0];
      case 'touchstart':
      case 'touchmove':
      case 'touchcancel':
        return (event as TouchEvent).touches[0];
      case 'mousedown':
      case 'mousemove':
      case 'mouseup':
      case 'mouseleave':
        return event as MouseEvent;
      default:
        return { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0 };
    }
  })();
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'test') {
    dataRaw = dataRaw
      ? dataRaw
      : { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0 };
  }
  return {
    screenX: dataRaw.screenX || 0,
    screenY: dataRaw.screenY || 0,
    clientX: dataRaw.clientX || 0,
    clientY: dataRaw.clientY || 0,
    pageX: dataRaw.pageX || 0,
    pageY: dataRaw.pageY || 0,
  };
};

/**
 * ⚠️ В частности, необходимо для iOS 15. Начиная с этой версии в Safari добавили
 * pull-to-refresh. CSS св-во `overflow-behavior` появился только с iOS 16.
 *
 * Во вторую очередь, полезна блокированием скролла, чтобы пользователь дождался обновления
 * данных.
 */
export const initializeBrowserGesturePreventionEffect = (window: Window): VoidFunction => {
  const options: AddEventListenerOptions & EventListenerOptions = { passive: false };
  const handleWindowTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  window.document.documentElement.classList.add('vkui--disable-overscroll-behavior'); // eslint-disable-line no-restricted-properties
  window.addEventListener('touchmove', handleWindowTouchMove, options);

  return function dispose() {
    window.document.documentElement.classList.remove('vkui--disable-overscroll-behavior'); // eslint-disable-line no-restricted-properties
    window.removeEventListener('touchmove', handleWindowTouchMove, options);
  };
};
