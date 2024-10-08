import { type CSSAnimationControllerProps } from '../animation';

export class CSSAnimationTargetController {
  constructor(
    public readonly el: HTMLElement,
    public readonly props: CSSAnimationControllerProps = {
      duration: '300ms',
      easing: 'ease-in-out',
    },
  ) {
    // super(el, props);
  }

  setInlineStyles(value: number, withTransition = false) {
    this.clearTransition();
    if (withTransition) {
      this.setTransition();
    }
    this.el.style.setProperty('transform', `translate3d(0, ${value}%, 0)`);
    return this;
  }

  handleTransitionEnd = () => {
    this.clearTransition();
    this.el.style.removeProperty('transform');
    return this;
  };

  private setTransition() {
    this.el.addEventListener('transitionend', this.handleTransitionEnd, { once: true });
    this.el.style.setProperty(
      'transition',
      `transform ${this.props.duration} ${this.props.easing}`,
    );
    this.waitingTransitionEnd = true;
  }

  private clearTransition() {
    if (this.waitingTransitionEnd) {
      this.el.removeEventListener('transitionend', this.handleTransitionEnd);
      this.el.style.removeProperty('transition');
      this.waitingTransitionEnd = false;
    }
    return this;
  }
}
