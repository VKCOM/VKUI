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

  setInitialTimeOnce() {
    if (this.initialTime === DEFAULT_INITIAL_TIME) {
      this.initialTime = Date.now();
    }
  }

  setStartCoords(event: Event) {
    const { clientX, clientY } = getFirstTouchEventData(event);
    this.x1 = clientX;
    this.y1 = clientY;
  }

  setEndCoords(event: Event) {
    const { clientX, clientY } = getFirstTouchEventData(event);
    this.x2 = clientX;
    this.y2 = clientY;
  }

  distance() {
    const deltaX = this.x2 - this.x1;
    const deltaY = this.y2 - this.y1;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }

  velocity() {
    const deltaX = this.x2 - this.x1;
    const deltaY = this.y2 - this.y1;

    let deltaTime = (Date.now() - this.initialTime) / MILLISECONDS;
    deltaTime = deltaTime <= 0 ? 1 : deltaTime;

    return { x: deltaX / deltaTime, y: deltaY / deltaTime };
  }

  angle() {
    const deltaX = this.x2 - this.x1;
    const deltaY = this.y2 - this.y1;
    const radians = Math.atan2(deltaY, deltaX);
    const degrees = (radians * 180) / Math.PI;
    return degrees < 0 ? 360 + degrees : degrees;
  }

  reset() {
    this.initialTime = DEFAULT_INITIAL_TIME;
    this.x1 = this.y1 = 0;
    this.x2 = this.y2 = 0;
  }
}
