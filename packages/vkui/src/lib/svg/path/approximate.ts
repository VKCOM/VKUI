import { type DeepReadonly } from '../../../types';
import * as array from '../../array';
import { cubicBezierTwoDimensional } from '../../curve';
import { distancePoint } from '../../math';
import type { SVGPathSupport } from './path';
import { type Point, type Points } from './point';

export interface MaxSegmentLengthOptions {
  maxSegmentLength?: number;
}

/**
 * Аппроксимирует кривую Безье в точки
 */
function approximateCurves(
  prevPoint: [number, number],
  args: [number, number, number, number, number, number],
  { maxSegmentLength }: Required<MaxSegmentLengthOptions>,
): Points {
  const distancePoints = distancePoint([args[4], args[5]], prevPoint);
  const acc: Points = new Array(Math.ceil(Math.max(2, distancePoints / maxSegmentLength)));

  for (let index = 0; index < acc.length; index++) {
    const progress = Math.min(1, (maxSegmentLength / distancePoints) * index);

    acc[index] = cubicBezierTwoDimensional(
      prevPoint[0],
      prevPoint[1],
      args[0],
      args[1],
      args[2],
      args[3],
      args[4],
      args[5],
      progress,
    );
  }

  return acc;
}

/**
 * Аппроксимирует svg путь в точки
 *
 * ```ts
 * import * as approximate from './approximate';
 * import * as assert from 'node:assert/strict';
 *
 * assert.equal(
 *   approximate.approximateRing([['M', [20, 40]], ['L', [40, 60]]]),
 *   [[20, 40], [40, 60]],
 * );
 * ```
 */
export function approximateRing(
  path: DeepReadonly<SVGPathSupport>,
  { maxSegmentLength = 1 }: MaxSegmentLengthOptions = {},
): Points {
  const prevPoint: Point = [0, 0];

  return path.reduce<Points>((acc, [command, args]) => {
    switch (command) {
      case 'M':
      case 'L':
        acc.push(array.copy(args));
        prevPoint[0] = args[0];
        prevPoint[1] = args[1];
        break;
      case 'C':
        acc.push(...approximateCurves(prevPoint, array.copy(args), { maxSegmentLength }));
        prevPoint[0] = args[4];
        prevPoint[1] = args[5];

        break;
      case 'Z':
        break;
    }

    return acc;
  }, []);
}
