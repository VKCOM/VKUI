import { mapObject } from './object';

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
    const mappingFn = jest.fn((value, key) => `${key}:${value}`);

    const result = mapObject(input, mappingFn);

    expect(result).toEqual({ a: 'a:1', b: 'b:2' });
    expect(mappingFn).toHaveBeenCalledWith(1, 'a');
    expect(mappingFn).toHaveBeenCalledWith(2, 'b');
    expect(mappingFn).toHaveBeenCalledTimes(2);
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
