import { filterObject, mapObject } from './object';

describe('mapObject', () => {
  it('should map object values using provided function', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = mapObject(input, (value) => value * 2);

    expect(result).toEqual({ a: 2, b: 4, c: 6 });
  });

  it('should handle empty object', () => {
    const input = {};
    const result = mapObject(input, (value) => value);

    expect(result).toEqual({});
  });

  it('should pass both value and key to mapping function', () => {
    const input = { a: 1, b: 2 };
    const mappingFn = vi.fn((value, key) => `${key}:${value}`);

    const result = mapObject(input, mappingFn);

    expect(result).toEqual({ a: 'a:1', b: 'b:2' });
    /* eslint-disable @vitest/prefer-called-exactly-once-with */
    expect(mappingFn).toHaveBeenCalledWith(1, 'a');
    expect(mappingFn).toHaveBeenCalledWith(2, 'b');
    expect(mappingFn).toHaveBeenCalledTimes(2);
    /* eslint-enable @vitest/prefer-called-exactly-once-with */
  });

  it('should handle different value types', () => {
    const input = {
      number: 42,
      string: 'hello',
      boolean: true,
      object: { nested: 'value' },
      array: [1, 2, 3],
    };

    const result = mapObject(input, (value) => String(value));

    expect(result).toEqual({
      number: '42',
      string: 'hello',
      boolean: 'true',
      object: '[object Object]',
      array: '1,2,3',
    });
  });
});

describe('filterObject', () => {
  it('should filter by value', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = filterObject(input, (value) => value > 1);
    expect(result).toEqual({ b: 2, c: 3 });
  });

  it('should filter by key', () => {
    const input = { apple: 1, banana: 2, avocado: 3 };
    const result = filterObject(input, (_, key) => key.startsWith('a'));
    expect(result).toEqual({ apple: 1, avocado: 3 });
  });

  it('should return empty object when no matches', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = filterObject(input, (value) => value > 10);
    expect(result).toEqual({});
  });

  it('should preserve nested objects', () => {
    const input = {
      a: { name: 'Alice' },
      b: { name: 'Bob' },
      c: { name: 'Charlie' },
    };
    const result = filterObject(input, (_, key) => key !== 'b');
    expect(result).toEqual({
      a: { name: 'Alice' },
      c: { name: 'Charlie' },
    });
  });

  it('should handle mixed types', () => {
    const input = {
      id: 1,
      name: 'test',
      enabled: false,
      tags: ['a', 'b'],
    };
    const result = filterObject(input, (value) => typeof value !== 'string' && value !== false);
    expect(result).toEqual({
      id: 1,
      tags: ['a', 'b'],
    });
  });
});
