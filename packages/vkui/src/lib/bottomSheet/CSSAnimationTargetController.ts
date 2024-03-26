import { CSSAnimationController } from '../animation';

export class CSSAnimationTargetController extends CSSAnimationController {
  private initialValue = 0;

  constructor(public readonly el: HTMLElement) {
    super(el);
  }

  setInitialValue(value: number) {
    this.initialValue = value;
    return this;
  }

  setInlineStyles(value: number) {
    this.clearTransition();
    this.el.style.setProperty('transform', `translateY(${value}%)`);
    return this;
  }

  unsetInlineStyles = () => {
    this.clearTransition();
    this.el.style.removeProperty('transform');
    return this;
  };

  unsetInlineStylesWithTransition() {
    this.clearTransition();
    this.setTransition();
    this.el.style.setProperty('transform', `translateY(${this.initialValue}%)`);
    return this;
  }

  private setTransition() {
    this.el.addEventListener('transitionend', this.unsetInlineStyles, { once: true });
    this.el.style.setProperty('transition', 'transform 300ms ease-in-out');
    this.waitingTransitionEnd = true;
  }

  private clearTransition() {
    if (this.waitingTransitionEnd) {
      this.el.removeEventListener('transitionend', this.unsetInlineStyles);
      this.el.style.removeProperty('transition');
      this.waitingTransitionEnd = false;
    }
    return this;
  }
}
