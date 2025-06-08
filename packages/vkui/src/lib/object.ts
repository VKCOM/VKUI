// eslint-disable-next-line @typescript-eslint/ban-types
export function mapObject<T extends Object, R extends Record<keyof T, any>>(
  object: T,
  map: (value: T[keyof T], key: keyof T) => R[keyof T],
): R {
  return Object.entries(object).reduce(
    (acc, [key, value]) =>
      Object.assign(acc, {
        [key]: map(value, key as keyof T),
      }),
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/prefer-reduce-type-parameter
    {} as R,
  );
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function filterObject<T extends Object, R extends Record<keyof T, any>>(
  object: T,
  filter: (value: T[keyof T], key: keyof T) => boolean,
): R {
  return Object.entries(object).reduce(
    (acc, [key, value]) => {
      if (filter(value, key as keyof T)) {
        Object.assign(acc, {
          [key]: value,
        });
      }
      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/prefer-reduce-type-parameter
    {} as R,
  );
}
