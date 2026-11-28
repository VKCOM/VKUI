import { describe, expect, it } from 'vitest';
import { CSSTransitionController } from './CSSTransitionController';

describe(CSSTransitionController, () => {
  it('keeps the new drag position when the previous transition is canceled', () => {
    const element = document.createElement('div');
    element.style.transitionProperty = 'transform';
    element.style.transitionDuration = '0.4s';

    const controller = new CSSTransitionController<string>(element, '--snap-point');
    controller.set('100px').cleanupOnTransitionEnd();

    controller.disableTransition().set('70px');
    element.dispatchEvent(new Event('transitioncancel'));

    expect(element.style.getPropertyValue('--snap-point')).toBe('70px');
    expect(element.style.transition).toBe('none');
  });
});
