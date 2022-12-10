import { range, rangeIncrement } from './range';

describe(range, () => {
  it('range 1..5', () => expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]));
  it('range -2..2', () => expect(range(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]));
  it('range 5..1', () => expect(range(5, 1)).toStrictEqual([5, 4, 3, 2, 1]));

  it('range step=2', () => {
    expect(range(1, 5, 2)).toStrictEqual([1, 3, 5]);
    expect(range(-2, 2, 2)).toStrictEqual([-2, 0, 2]);
    expect(range(5, 1, 2)).toStrictEqual([5, 3, 1]);
  });
});

describe(rangeIncrement, () => {
  it('rangeIncrement 1..5', () => expect(rangeIncrement(1, 5)).toStrictEqual([1, 2, 3, 4, 5]));
  it('rangeIncrement 5..1', () => expect(rangeIncrement(5, 1)).toStrictEqual([]));
});
