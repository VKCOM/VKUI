import { now } from '../../lib/date';
import { isWindow } from '../../lib/dom';
import { easeInOutSine } from '../../lib/fx';

/**
 * Часть функции заимствованна из полифила https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
 */
export class AutoScrollController {
  public static readonly DEFAULT_SCROLL_SPEED = 428;

  private readonly scrollEl: Element;

  public isScrolling = false;

  constructor(node: Element | Window, public speed = AutoScrollController.DEFAULT_SCROLL_SPEED) {
    this.scrollEl = isWindow(node) ? node.document.documentElement : node;
  }

  private scroll(startTime: number, startY: number, endY: number) {
    if (!this.isScrolling) {
      return;
    }

    const currentTime = now();

    let elapsed = (currentTime - startTime) / this.speed;
    elapsed = elapsed > 1 ? 1 : elapsed;

    const value = easeInOutSine(elapsed);
    const currentY = startY + (endY - startY) * value;

    if (currentY !== endY) {
      this.scrollEl.scrollTo(0, currentY);
      requestAnimationFrame(() => this.scroll(startTime, startY, endY));
    } else {
      this.stop();
    }
  }

  public updateSpeed(value: number) {
    this.speed = value;
  }

  public start(scrollTo: number) {
    if (this.isScrolling) {
      return;
    }
    this.isScrolling = true;
    this.scroll(now(), this.scrollEl.scrollTop, scrollTo);
  }

  public stop() {
    this.isScrolling = false;
    this.updateSpeed(AutoScrollController.DEFAULT_SCROLL_SPEED);
  }
}
