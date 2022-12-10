import { callMultiple } from './callMultiple';

describe('callMultiple', () => {
  it('Runs functions with same args call', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    callMultiple(undefined, fn1, fn2)(1);

    expect(fn1).toHaveBeenCalledWith(1);
    expect(fn2).toHaveBeenCalledWith(1);
  });
});
