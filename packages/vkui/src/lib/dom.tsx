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
export const getDOM = () => ({
  window: canUseDOM ? window : undefined,
  document: canUseDOM ? document : undefined,
});
/* eslint-enable no-restricted-globals */

export const DOMContext = React.createContext<DOMContextInterface>(getDOM());

export const useDOM = () => {
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

export function blurActiveElement(document: Document | undefined) {
  if (document && document.activeElement) {
    (document.activeElement as HTMLElement).blur();
  }
}

export const TRANSFORM_DEFAULT_VALUES = ['none', 'initial', 'inherit', 'unset'];
export const WILL_CHANGE_DEFAULT_VALUES = ['auto', 'initial', 'inherit', 'unset'];
export function getTransformedParentCoords(element: Element) {
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

export const getScrollHeight = (node: Element | Window) => {
  return isWindow(node) ? node.document.documentElement.scrollHeight : node.scrollHeight;
};

export const getScrollRect = (node: Element | Window) => {
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

export const getDocumentBody = (node?: any) => getWindow(node).document.body;

export const getActiveElementByAnotherElement = (el: Element | null) =>
  el ? el.ownerDocument.activeElement : null;

export const contains = (parent?: Element | null, child?: Element | null) => {
  return parent && child ? parent.contains(child) : false;
};
