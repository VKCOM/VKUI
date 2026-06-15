import { cubicBezierTwoDimensional } from './curve';

/**
 * ease function
 * @param x absolute progress of the animation in bounds 0 (beginning) and 1 (end)
 */
export function easeInOutSine(x: number): number {
  return 0.5 * (1 - Math.cos(Math.PI * x));
}

export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  return function (progress: number): number {
    return cubicBezierTwoDimensional(0, 0, x1, y1, x2, y2, 1, 1, progress)[1];
  };
}
