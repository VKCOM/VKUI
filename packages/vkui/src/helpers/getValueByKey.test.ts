import { getRequiredValueByKey, getValueByKey } from './getValueByKey';

describe('getRequiredValueByKey', () => {
  it('should return value when key exists', () => {
    const map = { key1: 'value1' };
    expect(getRequiredValueByKey('key1', map)).toBe('value1');
  });

  it('should throw error when key does not exist', () => {
    const map = { key1: 'value1' };
    // @ts-expect-error: TS2345 функция, как и задумано, ругается на то, что ключа key2 нет в map
    expect(() => getRequiredValueByKey('key2', map)).toThrow('getRequiredValueByKey(key2)');
  });
});

describe('getValueByKey', () => {
  it('should return value when key exists', () => {
    const map = { key1: 'value1' };
    expect(getValueByKey('key1', map, 'default')).toBe('value1');
  });

  it('should return default value when key does not exist and default value is provided', () => {
    const map = { key1: 'value1' };
    expect(getValueByKey('key2', map, 'default')).toBe('default');
  });

  it('should throw error when key does not exist and default value is falsy', () => {
    const map = { key1: 'value1' };
    expect(() => getValueByKey('key2', map, null)).toThrow('getValueByKey(key2)');
  });

  // Дополнительные тесты для граничных случаев
  it('should handle numeric keys', () => {
    const map = { 1: 'value1' };
    expect(getValueByKey(1, map, 'default')).toBe('value1');
  });

  it('should handle symbol keys', () => {
    const symbolKey = Symbol('test');
    const map = { [symbolKey]: 'value1' };
    expect(getValueByKey(symbolKey, map, 'default')).toBe('value1');
  });

  it('should handle falsy values in map', () => {
    const map = { key1: null, key2: undefined, key3: 0, key4: '' };
    expect(getValueByKey('key1', map, 'default')).toBeNull();
    expect(getValueByKey('key2', map, 'default')).toBeUndefined();
    expect(getValueByKey('key3', map, 'default')).toBe(0);
    expect(getValueByKey('key4', map, 'default')).toBe('');
  });
});
