import { type Writeable } from '@vkontakte/vkjs';

/**
 * Поверхностно копирует массив
 *
 * ```ts
 * import * as array from './array';
 * import * as assert from 'node:assert/strict';
 *
 * const originalArray = [1, 2, 3];
 * const copiedArray = array.copy(originalArray);
 *
 * assert.deepEqual(copiedArray, originalArray);
 * assert.notEqual(copiedArray, originalArray);
 * ```
 */
export function copy<T extends Pick<unknown[], 'slice'>>(array: T): Writeable<T> {
  return array.slice(0) as unknown as T;
}
