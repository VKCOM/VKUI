import { CSSAnimationController } from '../animation';

export class CSSAnimationBackdropController extends CSSAnimationController {
  private readonly initialValue: number;

  constructor(
    public readonly el: HTMLElement,
    private readonly opacityCSSPropertyKey = 'opacity',
  ) {
    super(el);

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

  unsetInlineStyles = () => {
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
    this.el.addEventListener('transitionend', this.unsetInlineStyles, { once: true });
    this.el.style.setProperty('transition', 'opacity 300ms ease-in-out');
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
