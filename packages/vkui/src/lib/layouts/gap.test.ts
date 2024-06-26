import { calculateGap } from './gap';

describe(calculateGap, () => {
  it('Returns correct values', () => {
    expect(calculateGap(undefined)).toEqual([undefined, undefined]);
    expect(calculateGap(8)).toEqual([8, 8]);
    expect(calculateGap([8, 16])).toEqual([8, 16]);
  });
});
