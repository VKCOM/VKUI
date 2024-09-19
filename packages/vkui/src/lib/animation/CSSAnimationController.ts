export type CSSAnimationControllerProps = {
  duration: string;
  easing: string;
};

export abstract class CSSAnimationController {
  inlineStylesModified = false;
  waitingTransitionEnd = false;

  constructor(
    public readonly el: HTMLElement,
    public readonly props: CSSAnimationControllerProps,
  ) {}

  abstract setInlineStyles(v: number): this;

  abstract handleTransitionEnd(): this;

  abstract unsetInlineStylesWithTransition(): this;
}
