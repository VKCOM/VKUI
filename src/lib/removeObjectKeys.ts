export default function removeObjectKeys<T extends {}, K extends keyof T> (
  obj: T = {} as T,
  keys: K[] = []
): Omit<T, K> {
  const newObj: T = { ...obj };

  keys.forEach(key => delete newObj[key]);

  return newObj;
}
