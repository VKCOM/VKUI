export type CSSTransitionControllerUnit = 'px' | '%' | '';

export class CSSTransitionController<V extends number | string = number> {
  public readonly el: HTMLElement;
  public readonly property: string;

  constructor(el: HTMLElement, property: string) {
    this.el = el;
    this.property = property;
  }

  set(to: V) {
    this.el.style.setProperty(this.property, `${to}`);
    return this;
  }

  unset() {
    return this.cleanup();
  }

  enableTransition() {
    this.el.style.removeProperty('transition');
    return this;
  }

  disableTransition() {
    this.el.style.setProperty('transition', 'none');
    return this;
  }

  cleanup() {
    this.el.removeEventListener('transitionend', this.handleTransitionEnd);
    this.el.style.removeProperty('transition');
    this.el.style.removeProperty(this.property);
    return this;
  }

  cleanupOnTransitionEnd() {
    this.el.addEventListener('transitionend', this.handleTransitionEnd, { once: true });
    return this;
  }

  private readonly handleTransitionEnd = () => {
    this.cleanup();
    return this;
  };
}
