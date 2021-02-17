export function removeObjectKeys<T, K extends keyof T>(obj: T, keys: K[] = []): T {
  let newObj: T = { ...obj };

  keys.forEach((key: K) => delete newObj[key]);

  return newObj;
}
