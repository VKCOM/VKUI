import { calculateGap } from './gaps';

describe(calculateGap, () => {
  it('Returns correct values', () => {
    expect(calculateGap(undefined)).toEqual([undefined, undefined]);
    expect(calculateGap('s')).toEqual(['s', 's']);
    expect(calculateGap([8, 16])).toEqual([8, 16]);
  });
});
