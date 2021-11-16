import { omit } from './utils';

describe('Utils', () => {
  it('[Omit] Removes keys from object', () => {
    const result = omit({ foo: 'foo', bar: 'bar', baz: 'baz' }, 'bar');
    expect(result).toMatchObject({ foo: 'foo', baz: 'baz' });
  });

  it('[Omit] Not returning same object pointer', () => {
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const result = omit(input, 'bar');
    expect(result).not.toEqual(input);
  });
});
