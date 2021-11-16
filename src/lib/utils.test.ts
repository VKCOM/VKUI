import { omit } from './utils';

describe('Utils', () => {
  it('[Omit] Removes keys from object', () => {
    const result = omit({ foo: 'foo', bar: 'bar', baz: 'baz' }, 'bar');
    expect(result).toMatchObject({ foo: 'foo', baz: 'baz' });
  });
});
