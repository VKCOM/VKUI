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
