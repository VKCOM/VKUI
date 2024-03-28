import { getParentNode, isHTMLElement } from '../dom';

export class UIScrollableChildrenObserver {
  /**
   * Функция из `@floating/utils/dom` не подходит, т.к. ей удовлетворяет любой заданный `overflow`.
   *
   * см. https://github.com/floating-ui/floating-ui/blob/%40floating-ui/dom%401.6.3/packages/utils/src/dom.ts#L52
   */
  private static isOverflowElement(element: Element): boolean {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return (
      /auto|scroll/.test(overflow + overflowY + overflowX) &&
      !['inline', 'contents'].includes(display)
    );
  }

  private static getNearestOverflowAncestor(rootNode: Node, targetNode: Node): HTMLElement | null {
    const parentNode = getParentNode(targetNode);

    if (rootNode === parentNode) {
      return null;
    }

    if (isHTMLElement(parentNode) && UIScrollableChildrenObserver.isOverflowElement(parentNode)) {
      return parentNode;
    }

    return UIScrollableChildrenObserver.getNearestOverflowAncestor(rootNode, parentNode);
  }

  private static getAvailableOverflow(overflowAncestor: HTMLElement) {
    const { clientWidth, scrollWidth, clientHeight, scrollHeight } = overflowAncestor;

    return {
      x: clientWidth < scrollWidth,
      y: clientHeight < scrollHeight,
    };
  }

  get isScrollable() {
    return this.scrollableEl !== null;
  }

  get hasYScroll() {
    return this.availableOverflow.y;
  }

  get isYScrolled() {
    return this.scrollableEl ? this.scrollableEl.scrollTop > 0 : false;
  }

  isScrolling = false;

  private readonly handleScroll = () => {
    this.isScrolling = true;
  };
  private scrollableEl: HTMLElement | null = null;
  private readonly availableOverflow = { x: false, y: false };

  observe(rootEl: HTMLElement, targetEl: HTMLElement) {
    const overflowAncestor = UIScrollableChildrenObserver.getNearestOverflowAncestor(
      rootEl,
      targetEl,
    );

    if (overflowAncestor) {
      const { x, y } = UIScrollableChildrenObserver.getAvailableOverflow(overflowAncestor);
      this.availableOverflow.x = x;
      this.availableOverflow.y = y;
      this.scrollableEl = overflowAncestor;
      this.scrollableEl.addEventListener('scroll', this.handleScroll, {
        capture: true,
        passive: true,
      });
    }
  }

  disconnect() {
    this.isScrolling = false;
    this.availableOverflow.x = false;
    this.availableOverflow.y = false;

    if (this.scrollableEl) {
      this.scrollableEl.removeEventListener('scroll', this.handleScroll, {
        capture: true,
        // @ts-expect-error: TS2769 В интерфейсе EventListenerOptions нет поля passive
        passive: true,
      });
      this.scrollableEl = null;
    }
  }

  preventYScrollBounceOnTop(event: Event) {
    if (this.isScrollable && this.hasYScroll && !this.isYScrolled) {
      event.preventDefault();
    }
  }
}
