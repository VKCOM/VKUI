import { getParentNode, isHTMLElement } from '../dom';

const EVENT_OPTIONS = { once: true, capture: true, passive: false };

export class UIScrollableChildrenObserver {
  isScrolling = false;

  get isScrollable() {
    return this.scrollableEl !== null;
  }

  get hasXScroll() {
    return this.availableOverflow.x;
  }

  get hasYScroll() {
    return this.availableOverflow.y;
  }

  get isYScrolled() {
    return this.scrollableEl ? this.scrollableEl.scrollTop > 0 : false;
  }

  observeOnce(rootEl: HTMLElement, targetEl: HTMLElement) {
    if (this.observed) {
      return;
    }

    this.observed = true;
    const overflowAncestor = getNearestOverflowAncestor(rootEl, targetEl);

    if (overflowAncestor) {
      const { x, y } = getAvailableOverflow(overflowAncestor);
      this.availableOverflow.x = x;
      this.availableOverflow.y = y;
      this.scrollableEl = overflowAncestor;
      this.scrollableEl.addEventListener('scroll', this.handleScroll, EVENT_OPTIONS);
    }
  }

  unobserve() {
    this.observed = false;

    if (this.scrollableEl) {
      this.scrollableEl.removeEventListener('scroll', this.handleScroll, EVENT_OPTIONS);
      this.scrollableEl = null;
      this.isScrolling = false;
      this.availableOverflow.x = false;
      this.availableOverflow.y = false;
    }
  }

  private observed = false;
  private scrollableEl: HTMLElement | null = null;
  private readonly availableOverflow = { x: false, y: false };
  private readonly handleScroll = () => {
    this.isScrolling = true;
  };
}

function getNearestOverflowAncestor(rootNode: Node, targetNode: Node): HTMLElement | null {
  const parentNode = getParentNode(targetNode);

  if (rootNode === parentNode) {
    return null;
  }

  /**
   * Функция из `@floating/utils/dom` не подходит, т.к. ей удовлетворяет любой заданный `overflow`.
   *
   * @see https://github.com/floating-ui/floating-ui/blob/%40floating-ui/dom%401.6.3/packages/utils/src/dom.ts#L52
   */
  const isOverflowElement = (element: Element) => {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return (
      /auto|scroll/.test(overflow + overflowY + overflowX) &&
      !['inline', 'contents'].includes(display)
    );
  };

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(rootNode, parentNode);
}

function getAvailableOverflow(overflowAncestor: HTMLElement) {
  const { clientWidth, scrollWidth, clientHeight, scrollHeight } = overflowAncestor;
  return { x: clientWidth < scrollWidth, y: clientHeight < scrollHeight };
}
