export const getValueByCheckedKey = <VALUE, KEY extends PropertyKey>(
  key: KEY,
  map: Record<KEY, VALUE>,
): VALUE => {
  if (!map.hasOwnProperty(key)) {
    throw new Error(`getValueByCheckedKey(${key})`);
  }
  return map[key];
};
