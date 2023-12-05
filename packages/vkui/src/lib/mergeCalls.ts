import { callMultiple } from './callMultiple';

/**
 * Собирает события в callMultiple
 *
 * # Пример
 *
 * ```js
 * const handlers = mergeCalls(focusEvents, { onFocus, onBlur })
 * ```
 */
export function mergeCalls(...props: Array<Record<string, any>>): Record<string, any> {
  const objectToArrays = props.reduce<Record<string, any[]>>((record, obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (!record.hasOwnProperty(key)) {
        record[key] = [];
      }
      record[key].push(value);
    });

    return record;
  }, {});

  return Object.entries(objectToArrays).reduce<Record<string, any>>((record, [key, array]) => {
    record[key] = callMultiple(...array);
    return record;
  }, {});
}
