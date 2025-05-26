import { type DeepReadonly } from '../../../types';
import * as array from '../../array';
import {
  type CoordinatePair,
  copySVGPath,
  type CurvetoCoordinate,
  type DrawtoCommandSupport,
  type SVGPathSupport,
} from './path';

type TransformFn = <T extends CoordinatePair | CurvetoCoordinate>(values: Readonly<T>) => T;

function transformDrawtoCommand(
  drawtoCommand: DeepReadonly<DrawtoCommandSupport>,
  fn: TransformFn,
): DrawtoCommandSupport {
  if (drawtoCommand[0] === 'Z') {
    return ['Z', []];
  }

  return [drawtoCommand[0], fn(drawtoCommand[1])] as DrawtoCommandSupport;
}

function transformSVGPath(path: DeepReadonly<SVGPathSupport>, fn: TransformFn): SVGPathSupport {
  return path.map((item) => transformDrawtoCommand(item, fn));
}

/**
 * Масштабирует путь.
 *
 * ```ts
 * import * as transform from './transform';
 * import * as assert from 'node:assert/strict';
 *
 * const scalePath = transform.scale(
 *   [['M', [10, 20]], ['L', [30, 40]]],
 *   2,
 *   2,
 * );
 *
 * assert.deepEqual(
 *   scalePath,
 *   [['M', [20, 40]], ['L', [60, 80]]],
 * );
 * ```
 */
export function scale(
  path: DeepReadonly<SVGPathSupport>,
  scaleX: number,
  scaleY: number,
): SVGPathSupport {
  if (scaleX === 1 && scaleY === 1) {
    return copySVGPath(path);
  }

  const scaleTransform = <T extends number[]>(values: Readonly<T>): T =>
    values.map((value, index) => value * (index % 2 === 0 ? scaleX : scaleY)) as T;

  return transformSVGPath(path, scaleTransform);
}

/**
 * Перемещает путь по осям X и Y.
 *
 * ```ts
 * import * as transform from './transform';
 * import * as assert from 'node:assert/strict';
 *
 * const translatePath = transform.translate(
 *   [['M', [10, 20]], ['L', [30, 40]]],
 *   10,
 *   20,
 * );
 *
 * assert.deepEqual(
 *   translatePath,
 *    [['M', [20, 40]], ['L', [40, 60]]],
 * );
 * ```
 */
export function translate(
  path: DeepReadonly<SVGPathSupport>,
  translateX: number,
  translateY: number,
): SVGPathSupport {
  if (translateX === 0 && translateY === 0) {
    return copySVGPath(path);
  }

  const translateTransform = <T extends number[]>(values: Readonly<T>): T =>
    values.map((value, index) => value + (index % 2 === 0 ? translateX : translateY)) as T;

  return transformSVGPath(path, translateTransform);
}

/**
 * Вращает путь относительно заданной точки на заданный угол
 *
 * ```ts
 * import * as transform from './transform';
 * import * as assert from 'node:assert/strict';
 *
 * const rotatePath = transform.rotate(
 *   [['M', [10, 20]], ['L', [30, 40]]],
 *   30,
 *   30,
 *   180
 * );
 *
 * assert.deepEqual(
 *   rotatePath,
 *   [['M', [20, 40]], ['L', [60, 80]]],
 * );
 * ```
 */
export function rotate(
  path: DeepReadonly<SVGPathSupport>,
  originX: number,
  originY: number,
  angle: number,
): SVGPathSupport {
  angle %= 360;
  if (angle === 0) {
    return copySVGPath(path);
  }

  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  const rotateTransformAbsolute = <T extends number[]>(originValues: Readonly<T>): T => {
    const values = array.copy(originValues);

    for (let i = 0; i < values.length; i += 2) {
      const px = values[i];
      const py = values[i + 1];
      const qx = originX + (px - originX) * cos - (py - originY) * sin;
      const qy = originY + (px - originX) * sin + (py - originY) * cos;
      values[i] = qx;
      values[i + 1] = qy;
    }

    return values;
  };

  return transformSVGPath(path, rotateTransformAbsolute);
}
