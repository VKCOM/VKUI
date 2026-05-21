import type { DeepReadonly, DeepWriteable } from '../../../types';
import * as array from '../../array';

type Flag = 0 | 1;

export type CoordinatePair = [number, number];
export type Coordinate = [number];
export type CurvetoCoordinate = [number, number, number, number, number, number];
export type SmoothCurvetoCoordinate = [number, number, number, number];
export type QuadraticCurvetoCoordinate = [number, number, number, number];
export type EllipticalArcArgument = [number, number, number, Flag, Flag, number, number];

export type DrawtoCommandAbsolute =
  | ['M', CoordinatePair]
  | ['L', CoordinatePair]
  | ['H', Coordinate]
  | ['V', Coordinate]
  | ['C', CurvetoCoordinate]
  | ['S', SmoothCurvetoCoordinate]
  | ['Q', QuadraticCurvetoCoordinate]
  | ['T', CoordinatePair]
  | ['A', EllipticalArcArgument]
  | ['Z', []];

type DrawtoCommandRelative =
  | ['m', CoordinatePair]
  | ['l', CoordinatePair]
  | ['h', Coordinate]
  | ['v', Coordinate]
  | ['c', CurvetoCoordinate]
  | ['s', SmoothCurvetoCoordinate]
  | ['q', QuadraticCurvetoCoordinate]
  | ['t', CoordinatePair]
  | ['a', EllipticalArcArgument]
  | ['z', []];

export type DrawtoCommand = DrawtoCommandAbsolute | DrawtoCommandRelative;

export type SVGPath = DrawtoCommand[];

export type DrawtoCommandSupport =
  | ['M', CoordinatePair]
  | ['L', CoordinatePair]
  | ['C', CurvetoCoordinate]
  | ['Z', []];

/**
 * Поддерживаем только `M`, `L`, `C`, и `Z` команды для оптимизации размера кода
 */
export type SVGPathSupport = DrawtoCommandSupport[];

/**
 * Преобразует `SVGPath` в строку
 *
 * ```ts
 * import * as path from './path';
 * import * as assert from 'node:assert/strict';
 *
 * assert.equal(
 *   path.svgPathToString([['M', [20, 40]], ['L', [40, 60]]]),
 *   'M20,40L40,60',
 * );
 * ```
 */
export function svgPathToString(svgPath: DeepReadonly<SVGPath>): string {
  // return svgPath.reduce((acc, value) => acc + value[0] + value[1].join(','), '');

  let value = '';

  // WARNING: При изменении кода рекомендуется проверить изменение
  // времени исполнения на компоненте ExpressiveSpinner в профайлерах
  for (let index = 0; index < svgPath.length; index++) {
    value += svgPath[index][0];
    for (let valueIndex = 0; valueIndex < svgPath[index][1].length - 1; valueIndex++) {
      value += svgPath[index][1][valueIndex].toFixed(4) + ',';
    }

    if (svgPath[index][1].length) {
      value += svgPath[index][1][svgPath[index][1].length - 1].toFixed(4);
    }
  }

  return value;
}

/**
 * Копирует массив команд для пути
 *
 * ```ts
 * import * as path from './path';
 * import * as assert from 'node:assert/strict';
 *
 * const originalSVGPath = [['M', [20, 40]], ['L', [40, 60]]];
 * const copiedSVGPath = path.copy(originalSVGPath);
 *
 * assert.deepEqual(copiedSVGPath, originalSVGPath);
 * assert.notEqual(copiedSVGPath, originalSVGPath);
 * ```
 */
export function copySVGPath<T extends DeepReadonly<SVGPath>>(svgPath: T): DeepWriteable<T> {
  return svgPath.map((value) => [value[0], array.copy(value[1])]) as DeepWriteable<T>;
}
