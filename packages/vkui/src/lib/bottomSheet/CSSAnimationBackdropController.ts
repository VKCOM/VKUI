import { CSSAnimationController, type CSSAnimationControllerProps } from '../animation';

export class CSSAnimationBackdropController extends CSSAnimationController {
  private readonly initialValue: number;

  constructor(
    public readonly el: HTMLElement,
    public readonly opacityCSSPropertyKey = 'opacity',
    public readonly props: CSSAnimationControllerProps = {
      duration: '300ms',
      easing: 'ease-in-out',
    },
  ) {
    super(el, props);

    const initialValueRaw = getComputedStyle(el).getPropertyValue(opacityCSSPropertyKey);

    if (initialValueRaw === '') {
      throw Error(`${opacityCSSPropertyKey} not exists`);
    }

    this.initialValue = Number(initialValueRaw);
  }

  /**
   * @param value 0 - 100
   */
  setInlineStyles(value: number) {
    if (value < 0 || value > 100) {
      return this;
    }

    this.clearTransition();
    const nextValue = this.initialValue - this.initialValue * (value / 100);
    this.el.style.setProperty(this.opacityCSSPropertyKey, `${nextValue}`);
    this.inlineStylesModified = true;

    return this;
  }

  handleTransitionEnd = () => {
    this.clearTransition();
    this.el.style.removeProperty(this.opacityCSSPropertyKey);
    this.inlineStylesModified = false;
    return this;
  };

  unsetInlineStylesWithTransition() {
    if (this.inlineStylesModified) {
      this.clearTransition();
      this.setTransition();
      this.el.style.setProperty(this.opacityCSSPropertyKey, String(this.initialValue));
    }
    return this;
  }

  private setTransition() {
    this.el.addEventListener('transitionend', this.handleTransitionEnd, { once: true });
    this.el.style.setProperty('transition', `opacity ${this.props.duration} ${this.props.easing}`);
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
