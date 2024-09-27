import { rubberbandIfOutOfBounds } from '../animation';
import { hasSelectionWithRangeType } from '../dom';
import { UIPanGestureRecognizer } from '../touch/UIPanGestureRecognizer';
import { CSSAnimationBackdropController } from './CSSAnimationBackdropController';
import { CSSAnimationTargetController } from './CSSAnimationTargetController';
import { UIScrollableChildrenObserver } from './UIScrollableChildrenObserver';

const MINIMUM_DISTANCE_FOR_MOVING_START = 12;
const MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE = 1300;

export class BottomSheetController {
  private readonly panGestureRecognizer: UIPanGestureRecognizer;
  private readonly animationTargetController: CSSAnimationTargetController;
  private readonly animationBackdropController: CSSAnimationBackdropController;
  private readonly scrollableChildrenObserver: UIScrollableChildrenObserver;
  private readonly lowerBound = 75;

  private panState: 'idle' | 'start' | 'moving' = 'idle';
  private pannedEl: HTMLElement | null = null;
  private rafId: number | null = null;
  // private expanded = false;

  private targetHeight = 0;
  private currentShiftY = 0;
  private nextShiftY = 0;

  constructor(
    private readonly targetEl: HTMLElement,
    backdropEl: HTMLElement,
    private readonly onClose: () => void,
  ) {
    this.panGestureRecognizer = new UIPanGestureRecognizer();
    this.scrollableChildrenObserver = new UIScrollableChildrenObserver();
    this.animationTargetController = new CSSAnimationTargetController(targetEl, {
      duration: '400ms',
      easing: 'var(--vkui--animation_easing_platform)',
    });
    this.animationBackdropController = new CSSAnimationBackdropController(backdropEl);
  }

  panStart(event: TouchEvent, currentShiftY: number) {
    if (this.panState !== 'idle') {
      return;
    }

    const target = event.target as HTMLElement;

    if (hasSelectionWithRangeType(target)) {
      return;
    }

    this.panState = 'start';
    this.pannedEl = target;
    this.currentShiftY = currentShiftY;
    this.panGestureRecognizer.setStartCoords(event);
  }

  panMove(event: TouchEvent) {
    if (this.panState === 'idle') {
      return;
    }

    this.panGestureRecognizer.setInitialTimeOnce();
    this.panGestureRecognizer.setEndCoords(event);

    if (this.panState === 'moving') {
      if (event.cancelable) {
        event.preventDefault();
      }

      if (this.rafId === null) {
        this.rafId = requestAnimationFrame(this.scheduleCallingShouldStartMovingFn);
      }
    } else {
      if (
        this.shouldBePreventedIfPanGestureDistanceIsNotAsExpected() ||
        // Может быть `null` если нажали на Shadow DOM.
        this.pannedEl === null ||
        this.shouldBePreventedIfPannedElIsScrolling(this.pannedEl) ||
        this.shouldBePreventedIfPannedElIsExternal(this.pannedEl) ||
        this.shouldBePreventedByDataAttribute(this.pannedEl)
      ) {
        return;
      }

      this.panState = 'moving';
      this.targetHeight = this.targetEl.offsetHeight;
      this.panGestureRecognizer.setStartCoords(event);
    }
  }

  panEnd() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    if (this.panState === 'moving') {
      if (this.nextShiftY > this.lowerBound || this.isPanGestureForClose()) {
        this.onClose();
      } else {
        requestAnimationFrame(() => {
          this.animationBackdropController.unsetInlineStylesWithTransition();
          this.animationTargetController.setInlineStyles(this.currentShiftY, true);
        });
      }
    }

    this.panState = 'idle';
    this.targetHeight = 0;
    this.nextShiftY = 0;
    this.pannedEl = null;
    this.panGestureRecognizer.reset();
    this.scrollableChildrenObserver.unobserve();
  }

  destroy() {
    this.animationBackdropController.handleTransitionEnd();
    this.animationTargetController.handleTransitionEnd();
    this.panGestureRecognizer.reset();
    this.scrollableChildrenObserver.unobserve();
  }

  private readonly scheduleCallingShouldStartMovingFn = () => {
    const { y1, y2 } = this.panGestureRecognizer;
    const offsetPercent = y2 - y1;

    this.nextShiftY = (offsetPercent / this.targetEl.offsetHeight) * 100;
    this.nextShiftY += this.currentShiftY;
    this.nextShiftY = rubberbandIfOutOfBounds(this.nextShiftY, 0, 100);

    if (this.currentShiftY !== this.nextShiftY) {
      this.animationBackdropController.setInlineStyles(this.nextShiftY);
      this.animationTargetController.setInlineStyles(this.nextShiftY);
    }

    this.rafId = null;
  };

  private isPanGestureForClose() {
    const panDirection = this.panGestureRecognizer.direction();
    if (panDirection.axis !== 'y' || panDirection.direction !== 1) {
      return false;
    }

    const velocity = this.panGestureRecognizer.velocity();
    return velocity.y >= MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
  }

  private shouldBePreventedIfPanGestureDistanceIsNotAsExpected() {
    return this.panGestureRecognizer.distance() < MINIMUM_DISTANCE_FOR_MOVING_START;
  }

  private shouldBePreventedIfPannedElIsExternal(pannedEl: HTMLElement) {
    return !this.targetEl.contains(pannedEl);
  }

  private shouldBePreventedByDataAttribute(pannedEl: HTMLElement) {
    // eslint-disable-next-line no-restricted-properties
    return pannedEl.closest('[data-vkui-prevent-swipe=true]');
  }

  private shouldBePreventedIfPannedElIsScrolling(pannedEl: HTMLElement) {
    this.scrollableChildrenObserver.observeOnce(this.targetEl, pannedEl);

    if (this.scrollableChildrenObserver.isScrollable) {
      if (this.scrollableChildrenObserver.isScrolling) {
        return true;
      }

      const panDirection = this.panGestureRecognizer.direction();
      return (
        (this.scrollableChildrenObserver.hasXScroll && panDirection.axis === 'x') ||
        (this.scrollableChildrenObserver.hasYScroll &&
          (panDirection.direction === -1 || this.scrollableChildrenObserver.isYScrolled))
      );
    }

    return false;
  }
}
