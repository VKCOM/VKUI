'use client';

import * as React from 'react';
import { canUseDOM } from '@vkontakte/vkjs';
import { rectToClientRect } from '@vkontakte/vkui-floating-ui/core';
import {
  getParentNode,
  getWindow,
  isElement,
  isHTMLElement,
  isLastTraversableNode,
  isOverflowElement,
} from '@vkontakte/vkui-floating-ui/utils/dom';

export {
  getWindow,
  getNodeScroll,
  isHTMLElement,
  isElement,
  getParentNode,
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
const getDOM = (): DOMContextInterface => ({
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
 * Переписанный `getNearestOverflowAncestor` из @floating-ui/utils/dom.
 *
 * [1] добавляем ноду, на которой нужно остановить рекурсию
 * [2] document.body подменяем на window, т.к. на document.body нельзя применить скролл.
 *
 * @link https://github.com/floating-ui/floating-ui/blob/%40floating-ui/dom%401.6.3/packages/utils/src/dom.ts#L143
 */
export function getNearestOverflowAncestor(node: Node): HTMLElement | Window | null;
export function getNearestOverflowAncestor(node: Node, terminalNode: Node): HTMLElement | null;
export function getNearestOverflowAncestor(node: Node, terminalNode?: any): any {
  const parentNode = getParentNode(node);

  if (terminalNode === parentNode) {
    return null; /* [1] */
  }

  if (isLastTraversableNode(parentNode)) {
    return getWindow(parentNode); /* [2] */
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode, terminalNode);
}

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

const nonTextInputTypes = { button: true, submit: true, reset: true, color: true, file: true, image: true, checkbox: true, radio: true }; // prettier-ignore

export const isHTMLContentEditableElement = (
  el: Element | null,
): el is HTMLInputElement | HTMLTextAreaElement | HTMLElement => {
  if (el === null) {
    return false;
  }

  if (el.tagName === 'INPUT') {
    // @ts-expect-error: TS2339 за счёт `tagName` удовлетворяемся, что это `HTMLInputElement`
    return !nonTextInputTypes[el.type]; // prettier-ignore
  }

  return (
    el.tagName === 'TEXTAREA' ||
    // eslint-disable-next-line no-restricted-properties
    el.closest('[contenteditable=true]') !== null
  );
};

export type VisualViewport = {
  offsetTop: number;
  offsetLeft: number;
  width: number;
  height: number;
};

/**
 * Фоллбек `visualViewport` для **Safari 12**.
 */
export function getVisualViewport(win: Window): VisualViewport {
  const result: VisualViewport = { offsetTop: 0, offsetLeft: 0, width: 0, height: 0 };
  if (win.visualViewport) {
    const { offsetTop, offsetLeft, width, height } = win.visualViewport;
    result.offsetTop = Math.round(offsetTop);
    result.offsetLeft = offsetLeft;
    result.width = width;
    result.height = Math.round(height);

    return result;
  }

  // TODO[Safari@>=13] Удалить фоллбек
  result.offsetTop = win.pageYOffset;
  result.offsetLeft = win.pageXOffset;
  result.width = win.innerWidth; // note: вызывает reflow в отличии от visualViewport
  result.height = win.innerHeight; // note: вызывает reflow в отличии от visualViewport
  return result;
}

export const hasSelectionWithRangeType = (node: unknown) => {
  const selection = getWindow(node).getSelection();
  return selection ? selection.type === 'Range' : false;
};
