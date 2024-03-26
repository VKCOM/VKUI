export abstract class CSSAnimationController {
  inlineStylesModified = false;
  waitingTransitionEnd = false;

  constructor(public readonly el: HTMLElement) {}

  abstract setInlineStyles(v: number): this;

  abstract unsetInlineStyles(): this;

  abstract unsetInlineStylesWithTransition(): this;
}
