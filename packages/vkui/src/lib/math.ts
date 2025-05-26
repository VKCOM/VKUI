/**
 * Длина гипотенузы
 */
function hypotenuse(a: number, b: number): number {
  return Math.sqrt(a * a + b * b);
}

/**
 * Евклидово расстояние между двумя точками
 *
 * ```ts
 * import { distancePoint } from './math';
 * import * as assert from 'node:assert/strict';
 *
 * assert.equal(distance(1, 1, 4, 5), 5)
 * ```
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
  return hypotenuse(x1 - x2, y1 - y2);
}

/**
 * Евклидово расстояние между двумя точками
 *
 * ```ts
 * import { distancePoint } from './math';
 * import * as assert from 'node:assert/strict';
 *
 * assert.equal(distancePoint([1, 1], [4, 5]), 5)
 * ```
 */
export function distancePoint(
  [x1, y1]: readonly [number, number],
  [x2, y2]: readonly [number, number],
): number {
  return distance(x1, y1, x2, y2);
}
