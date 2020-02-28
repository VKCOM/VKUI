export default function removeObjectKeys<T>(obj: T, keys: string[] = []): T {
  let newObj = { ...obj };

  keys.forEach((key: string) => delete newObj[key]);

  return newObj;
}
