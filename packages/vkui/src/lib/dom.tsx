import * as React from 'react';
import { canUseDOM } from '@vkontakte/vkjs';
import {
  getNearestOverflowAncestor as getNearestOverflowAncestorLib,
  getWindow,
  isHTMLElement,
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

export const getBoundingClientRect = (node: Element | Window): DOMRect =>
  isWindow(node)
    ? node.document.documentElement.getBoundingClientRect()
    : node.getBoundingClientRect();

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

export const getScrollTop = (scrollEl: Element | Window) => {
  return isWindow(scrollEl) ? scrollEl.document.documentElement.scrollTop : scrollEl.scrollTop;
};
