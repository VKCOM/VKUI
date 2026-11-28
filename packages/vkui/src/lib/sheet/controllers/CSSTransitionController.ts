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
    this.removeTransitionListeners();
    this.el.style.setProperty('transition', 'none');
    return this;
  }

  cleanup() {
    this.removeTransitionListeners();
    this.el.style.removeProperty('transition');
    this.el.style.removeProperty(this.property);
    return this;
  }

  cleanupOnTransitionEnd() {
    const { transitionDuration, transitionProperty } = getComputedStyle(this.el);
    if (
      transitionProperty === 'none' ||
      transitionDuration.split(',').every((duration) => parseFloat(duration) === 0)
    ) {
      return this.cleanup();
    }

    this.el.addEventListener('transitionend', this.handleTransitionEnd);
    this.el.addEventListener('transitioncancel', this.handleTransitionEnd);
    return this;
  }

  private removeTransitionListeners() {
    this.el.removeEventListener('transitionend', this.handleTransitionEnd);
    this.el.removeEventListener('transitioncancel', this.handleTransitionEnd);
  }

  private readonly handleTransitionEnd = (event: TransitionEvent) => {
    if (event.target === this.el) {
      this.cleanup();
    }
  };
}
