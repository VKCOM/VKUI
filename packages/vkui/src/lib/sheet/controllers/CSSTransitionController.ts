export type CSSTransitionControllerUnit = 'px' | '%' | '';

export class CSSTransitionController<V extends number | string = number> {
  constructor(
    public readonly el: HTMLElement,
    public readonly property: string,
  ) {}

  set(to: V) {
    this.el.style.setProperty(this.property, `${to}`);
    return this;
  }

  unset(from?: V) {
    if (from !== undefined) {
      this.el.addEventListener('transitionend', this.handleTransitionEnd, { once: true });
      this.enableTransition();
      this.el.style.setProperty(this.property, `${from}`);
      return this;
    }

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
