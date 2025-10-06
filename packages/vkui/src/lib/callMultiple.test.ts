import { callMultiple } from './callMultiple';

describe('callMultiple', () => {
  it('Runs functions with same args call', () => {
    const fn1 = vi.fn();
    const fn2 = vi.fn();

    callMultiple(undefined, fn1, fn2)(1);

    expect(fn1).toHaveBeenCalledExactlyOnceWith(1);
    expect(fn2).toHaveBeenCalledExactlyOnceWith(1);
  });
});
