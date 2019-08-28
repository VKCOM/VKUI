export default function removeObjectKeys(obj: Object = {}, keys: string[] = []): Object {
  let newObj = { ...obj };

  keys.forEach(key => delete newObj[key]);

  return newObj;
}
