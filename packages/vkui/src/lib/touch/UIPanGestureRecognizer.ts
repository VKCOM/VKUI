import { getFirstTouchEventData } from '../dom';

export type VCoords = { x: number; y: number };

const DEFAULT_INITIAL_TIME = 0;
const MILLISECONDS = 1000;

/**
 * JS имплементация класса из UIKIt iOS.
 *
 * https://developer.apple.com/documentation/uikit/uipangesturerecognizer
 */
export class UIPanGestureRecognizer {
  private initialTime = DEFAULT_INITIAL_TIME;
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;

  setInitialTimeOnce(): void {
    if (this.initialTime === DEFAULT_INITIAL_TIME) {
      this.initialTime = Date.now();
    }
  }

  setStartCoords(event: UIEvent): void {
    const { clientX, clientY } = getFirstTouchEventData(event);
    this.x1 = clientX;
    this.y1 = clientY;
  }

  setEndCoords(event: UIEvent): void {
    const { clientX, clientY } = getFirstTouchEventData(event);
    this.x2 = clientX;
    this.y2 = clientY;
  }

  delta(): {
    x: number;
    y: number;
  } {
    return {
      x: this.x2 - this.x1,
      y: this.y2 - this.y1,
    };
  }

  distance(): number {
    const { x, y } = this.delta();
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  velocity(): {
    x: number;
    y: number;
  } {
    const deltaTime = (Date.now() - this.initialTime) / MILLISECONDS;

    if (deltaTime <= 0) {
      return { x: 0, y: 0 };
    }

    const { x, y } = this.delta();
    return { x: x / deltaTime, y: y / deltaTime };
  }

  angle(): number {
    const deltaX = this.x2 - this.x1;
    const deltaY = this.y2 - this.y1;
    const radians = Math.atan2(deltaY, deltaX);
    const degrees = (radians * 180) / Math.PI;
    return degrees < 0 ? 360 + degrees : degrees;
  }

  reset(): void {
    this.initialTime = DEFAULT_INITIAL_TIME;
    this.x1 = this.y1 = 0;
    this.x2 = this.y2 = 0;
  }
}
