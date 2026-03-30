export const getRequiredValueByKey = <VALUE, KEY extends PropertyKey = PropertyKey>(
  key: KEY,
  map: Record<KEY, VALUE>,
): VALUE => {
  if (!map.hasOwnProperty(key)) {
    throw new Error(`getRequiredValueByKey(${String(key)})`);
  }
  return map[key];
};

export const getValueByKey = <VALUE, KEY extends PropertyKey = PropertyKey>(
  key: KEY,
  map: Record<any, VALUE>,
  defaultValue: VALUE,
): VALUE => {
  if (!map.hasOwnProperty(key)) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`getValueByKey(${String(key)})`);
  }
  return map[key];
};
