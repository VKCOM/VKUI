import { rubberbandIfOutOfBounds } from '../animation';
import { UIPanGestureRecognizer, type VCoords } from '../touch/UIPanGestureRecognizer';
import { CSSAnimationBackdropController } from './CSSAnimationBackdropController';
import { CSSAnimationTargetController } from './CSSAnimationTargetController';
import { UIScrollableChildrenObserver } from './UIScrollableChildrenObserver';

const MINIMUM_DISTANCE_FOR_MOVING_START = 10;
const MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE = 1300;

export class BottomSheetController {
  private readonly panGestureRecognizer: UIPanGestureRecognizer;
  private readonly animationTargetController: CSSAnimationTargetController;
  private readonly animationBackdropController: CSSAnimationBackdropController;
  private readonly scrollableChildrenObserver: UIScrollableChildrenObserver;
  private readonly lowerBound = 75;

  private isPanStarted = false;
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
    this.animationTargetController = new CSSAnimationTargetController(targetEl);
    this.animationBackdropController = new CSSAnimationBackdropController(backdropEl);
  }

  panStart(event: TouchEvent, currentShiftY: number) {
    this.currentShiftY = currentShiftY;
    this.targetHeight = this.targetEl.offsetHeight;
    this.panGestureRecognizer.setStartCoords(event);
    this.scrollableChildrenObserver.observe(
      this.targetEl,
      // @ts-expect-error: TS2345 Argument of type 'EventTarget' is not assignable to parameter of type 'HTMLElement'
      event.target,
    );
    this.isPanStarted = true;
  }

  panMove(event: TouchEvent) {
    if (!this.isPanStarted) {
      return;
    }

    this.panGestureRecognizer.setInitialTimeOnce();
    this.panGestureRecognizer.setEndCoords(event);

    const scheduleCallingShouldStartMovingFn = () => {
      const velocity = this.panGestureRecognizer.velocity();
      const panDirection = this.getPanDirection(velocity);

      if (this.shouldStartMoving(panDirection)) {
        if (panDirection === 'down') {
          this.scrollableChildrenObserver.preventYScrollBounceOnTop(event);
        }

        const { y1, y2 } = this.panGestureRecognizer;
        const offsetPercent = y2 - y1;
        this.nextShiftY = (offsetPercent / this.targetHeight) * 100;
        this.nextShiftY += this.currentShiftY;
        this.nextShiftY = rubberbandIfOutOfBounds(this.nextShiftY, 0, 100);

        this.animationBackdropController.setInlineStyles(this.nextShiftY);
        this.animationTargetController.setInlineStyles(this.nextShiftY);
      }
    };

    requestAnimationFrame(scheduleCallingShouldStartMovingFn);
  }

  panEnd() {
    const nextShiftY = this.nextShiftY;

    if (nextShiftY > this.lowerBound || this.isPanGestureForClose()) {
      this.onClose();
    } else {
      requestAnimationFrame(() => {
        this.animationBackdropController.unsetInlineStylesWithTransition();
        this.animationTargetController
          .setInitialValue(this.currentShiftY)
          .unsetInlineStylesWithTransition();
      });
    }

    this.isPanStarted = false;
    this.nextShiftY = 0;
    this.panGestureRecognizer.reset();
    this.scrollableChildrenObserver.disconnect();
  }

  destroy() {
    this.animationBackdropController.unsetInlineStyles();
    this.animationTargetController.unsetInlineStyles();
    this.panGestureRecognizer.reset();
    this.scrollableChildrenObserver.disconnect();
  }

  private shouldStartMoving(panDirection?: 'up' | 'down') {
    const hasExpectedPanGestureDistance =
      this.panGestureRecognizer.distance() > MINIMUM_DISTANCE_FOR_MOVING_START;

    if (!hasExpectedPanGestureDistance || this.scrollableChildrenObserver.isScrolling) {
      return false;
    }

    switch (panDirection) {
      case 'up':
        if (this.scrollableChildrenObserver.hasYScroll) {
          return this.currentShiftY !== 0;
        }

        return true;
      case 'down':
        return !this.scrollableChildrenObserver.isYScrolled;
      default:
        return true;
    }
  }

  private getPanDirection(velocity: VCoords) {
    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      if (velocity.y > 0) {
        return 'down';
      } else if (velocity.y < 0) {
        return 'up';
      }
    }

    return;
  }

  private isPanGestureForClose() {
    const velocity = this.panGestureRecognizer.velocity();

    if (this.getPanDirection(velocity) !== 'down' || this.scrollableChildrenObserver.isScrolling) {
      return false;
    }

    return velocity.y >= MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
  }
}
