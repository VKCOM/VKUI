import { animate } from '@vkontakte/vkjs';
import { easeInOutSine } from '../fx';
import { rubberbandIfOutOfBounds } from '../jsAnimation';
import { UIPanGestureRecognizer, type VCoords } from './UIPanGestureRecognizer';
import { UIScrollableChildrenObserver } from './UIScrollableChildrenObserver';

const MINIMUM_DISTANCE_FOR_MOVING_START = 10;
const MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE = 1300;

export class BottomSheetController {
  private readonly panGestureRecognizer: UIPanGestureRecognizer;
  private readonly scrollableChildrenObserver: UIScrollableChildrenObserver;
  private readonly lowerBound = 75;

  private hasExpectedPanGestureDistance = false;
  private isMoving = false;
  private isPanStarted = false;
  // private expanded = false;

  private targetHeight = 0;
  private currentShiftY = 0;
  private nextShiftY = 0;

  constructor(private readonly targetEl: HTMLElement, private readonly onClose: () => void) {
    this.panGestureRecognizer = new UIPanGestureRecognizer();
    this.scrollableChildrenObserver = new UIScrollableChildrenObserver();
  }

  panStart(event: TouchEvent, currentShiftY: number) {
    this.isPanStarted = true;
    this.panGestureRecognizer.setStartCoords(event);
    this.scrollableChildrenObserver.observe(
      this.targetEl,
      // @ts-expect-error: TS2345 Argument of type 'EventTarget' is not assignable to parameter of type 'HTMLElement'
      event.target,
    );

    this.targetHeight = this.targetEl.offsetHeight;
    this.currentShiftY = currentShiftY;
  }

  panMove(event: TouchEvent) {
    if (!this.isPanStarted) {
      return;
    }

    this.panGestureRecognizer.setInitialTimeOnce();
    this.panGestureRecognizer.setEndCoords(event);

    const velocity = this.panGestureRecognizer.velocity();
    const panDirection = this.getPanDirection(velocity);

    this.hasExpectedPanGestureDistance = this.checkHasExpectedPanGestureDistance();
    this.isMoving = this.shouldStartMoving(panDirection);

    if (this.isMoving) {
      if (panDirection === 'down') {
        this.scrollableChildrenObserver.preventYScrollBounceOnTop(event);
      }

      const { y1, y2 } = this.panGestureRecognizer;
      const offsetPercent = y2 - y1;
      this.nextShiftY = (offsetPercent / this.targetHeight) * 100;
      this.nextShiftY += this.currentShiftY;
      this.nextShiftY = rubberbandIfOutOfBounds(this.nextShiftY, 0, 100);
      requestAnimationFrame(() => {
        this.targetEl.style.setProperty('transform', `translateY(${this.nextShiftY}%)`);
      });
    }
  }

  destroy() {
    const nextShiftY = this.nextShiftY;

    if (nextShiftY > this.lowerBound || this.isPanGestureForClose()) {
      this.onClose();
    } else {
      animate({
        duration: 300,
        timing: easeInOutSine,
        draw: (progress) => {
          if (progress < 1) {
            this.targetEl.style.setProperty(
              'transform',
              `translateY(${nextShiftY - nextShiftY * progress}%)`,
            );
          }
        },
      });
    }

    this.isPanStarted = false;
    this.nextShiftY = this.currentShiftY = 0;
    this.panGestureRecognizer.reset();
    this.scrollableChildrenObserver.disconnect();
  }

  private checkHasExpectedPanGestureDistance() {
    return this.hasExpectedPanGestureDistance
      ? true
      : this.panGestureRecognizer.distance() > MINIMUM_DISTANCE_FOR_MOVING_START;
  }

  private shouldStartMoving(panDirection?: 'up' | 'down') {
    if (!this.hasExpectedPanGestureDistance || this.scrollableChildrenObserver.isScrolling) {
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
