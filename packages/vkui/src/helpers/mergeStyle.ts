/**
 * Мержит стили, пытаясь уменьшить кол-во копирований
 *
 * ## Пример
 *
 * ```ts
 * const style = mergeStyle(arrowStyles, styleProp)
 * ```
 */
export const mergeStyle: (
  ...objects: Array<React.CSSProperties | undefined>
) => React.CSSProperties | undefined = mergeObject;

function mergeObject<T extends object>(...objects: Array<T | undefined>): T | undefined {
  if (objects.length <= 1) {
    return objects[0];
  }

  let counter = 0;

  return objects.reduce<T | undefined>((result, object) => {
    if (!object) {
      return result;
    }

    counter++;

    switch (counter) {
      case 1:
        return object;
      case 2:
        return { ...result, ...object };
      default:
        return Object.assign(result!, object);
    }
  }, undefined);
}
