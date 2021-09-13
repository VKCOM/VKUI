import { classNames } from './classNames';

describe(classNames, () => {
  it('joins string classes', () =>
    expect(classNames('a', 'b')).toEqual('a b'));
  it('processes objects', () =>
    expect(classNames({ b: true, no: false, c: true, no2: null, no3: undefined })).toEqual('b c'));
  it('filters out falsey values', () =>
    expect(classNames('a', false, 'b', null, 'c', undefined)).toEqual('a b c'));
  it('supports heterogenous args', () =>
    expect(classNames('a', { b: true, no: false }, 'c')).toEqual('a b c'));
  it('returns single class as string', () =>
    expect(classNames({ b: true, no: false })).toEqual('b'));
  it('returns empty string', () =>
    expect(classNames(false, { no: false })).toEqual(''));
  it('returns classname as string', () => {
    expect(classNames('A', 'B')).toBe('A B');
    expect(classNames('A')).toBe('A');
    expect(classNames()).toBe('');
  });
});
