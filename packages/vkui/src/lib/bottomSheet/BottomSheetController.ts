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

  private pannedEl: HTMLElement | null = null;
  private isPanStarted = false;
  private isMoving = false;
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
    const target = event.target as HTMLElement;

    if (hasSelectionWithRangeType(target)) {
      return;
    }

    this.panGestureRecognizer.setStartCoords(event);
    this.currentShiftY = currentShiftY;
    this.pannedEl = target;
    this.isPanStarted = true;
  }

  panMove(event: TouchEvent) {
    if (!this.isPanStarted || hasSelectionWithRangeType(event.target)) {
      return;
    }

    this.panGestureRecognizer.setInitialTimeOnce();
    this.panGestureRecognizer.setEndCoords(event);

    const scheduleCallingShouldStartMovingFn = () => {
      if (this.canStartMoving(this.getPanDirection())) {
        event.preventDefault();

        if (this.targetHeight === 0) {
          this.targetHeight = this.targetEl.offsetHeight;
        }

        const { y1, y2 } = this.panGestureRecognizer;
        const offsetPercent = y2 - y1 - MINIMUM_DISTANCE_FOR_MOVING_START;
        this.nextShiftY = (offsetPercent / this.targetEl.offsetHeight) * 100;
        this.nextShiftY += this.currentShiftY;
        this.nextShiftY = rubberbandIfOutOfBounds(this.nextShiftY, 0, 100);

        if (this.currentShiftY !== this.nextShiftY) {
          this.isMoving = true;
          this.animationBackdropController.setInlineStyles(this.nextShiftY);
          this.animationTargetController.setInlineStyles(this.nextShiftY);
        }
      }
    };

    requestAnimationFrame(scheduleCallingShouldStartMovingFn);
  }

  panEnd() {
    if (this.isMoving) {
      if (this.nextShiftY > this.lowerBound || this.isPanGestureForClose()) {
        this.onClose();
      } else {
        requestAnimationFrame(() => {
          this.animationBackdropController.unsetInlineStylesWithTransition();
          this.animationTargetController.setInlineStyles(this.currentShiftY, true);
        });
      }
    }

    this.isPanStarted = false;
    this.isMoving = false;
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

  private canStartMoving(panDirection?: 'up' | 'down') {
    const hasExpectedPanGestureDistance =
      this.panGestureRecognizer.distance() > MINIMUM_DISTANCE_FOR_MOVING_START;

    if (!hasExpectedPanGestureDistance) {
      return false;
    }

    if (this.checkScrollablePredicates()) {
      return false;
    }

    switch (panDirection) {
      case 'up':
        if (this.scrollableChildrenObserver.hasYScroll) {
          return this.currentShiftY !== 0;
        }

        return true;
      case 'down':
      default:
        return true;
    }
  }

  private checkScrollablePredicates() {
    if (!this.pannedEl) {
      return false;
    }

    this.scrollableChildrenObserver.observeOnce(this.targetEl, this.pannedEl);

    if (!this.scrollableChildrenObserver.isScrollable) {
      return false;
    }

    if (this.scrollableChildrenObserver.isScrolling) {
      return true;
    }

    if (this.scrollableChildrenObserver.hasXScroll) {
      const delta = this.panGestureRecognizer.delta();

      if (Math.abs(delta.x) > Math.abs(delta.y)) {
        return true;
      }
    }

    if (this.scrollableChildrenObserver.hasYScroll) {
      return this.scrollableChildrenObserver.isYScrolled;
    }

    return false;
  }

  private getPanDirection() {
    const delta = this.panGestureRecognizer.delta();
    if (delta.y > 0) {
      return 'down';
    } else if (delta.y < 0) {
      return 'up';
    }
    return;
  }

  private isPanGestureForClose() {
    if (this.getPanDirection() !== 'down') {
      return false;
    }

    const velocity = this.panGestureRecognizer.velocity();
    return velocity.y >= MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
  }
}
