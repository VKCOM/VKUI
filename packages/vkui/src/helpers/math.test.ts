import { rescale, clamp, precisionRound } from './math';

describe(clamp, () => {
  it('clamps min', () => expect(clamp(10, 20, 30)).toBe(20));
  it('clamps max', () => expect(clamp(40, 20, 30)).toBe(30));
});

describe(precisionRound, () => {
  it('rounds to precision', () => {
    expect(precisionRound(0.3 + 0.6, 1)).toBe(0.9);
    expect(precisionRound(0.88, 1)).toBe(0.9);
    expect(precisionRound(0.881, 2)).toBe(0.88);
  });
  it('can integer-round', () => {
    expect(precisionRound(1.1, 0)).toBe(1);
    expect(precisionRound(0.9, 0)).toBe(1);
  });
});

describe(rescale, () => {
  it('scales value', () => {
    expect(rescale(0.5, [0, 1], [3, 5])).toBe(4);
    expect(rescale(1.5, [1, 2], [3, 5])).toBe(4);
  });
  it('clamps value', () => {
    expect(rescale(-1, [0, 1], [10, 11])).toBe(10);
    expect(rescale(12, [0, 1], [10, 11])).toBe(11);
  });
  it('rounds value to integer step', () => {
    expect(rescale(0.3, [0, 1], [0, 2], { step: 1 })).toBe(1);
    expect(rescale(0.6, [0, 1], [0, 2], { step: 1 })).toBe(1);
    expect(rescale(0.67, [0, 1], [0, 100], { step: 10 })).toBe(70);
  });
  it('rounds precision', () => {
    expect(rescale(3.1415926, [3, 4], [3, 4], { step: 0.01 })).toBe(3.14);
  });
  describe('non-divisor step', () => {
    it('rounds to min + k * step when min != n * step', () => {
      expect(rescale(0.1, [0.1, 3.1], [0.1, 3.1], { step: 2 })).toBe(0.1);
      expect(rescale(3, [1, 5], [1, 5], { step: 2 })).toBe(3);
    });
    it('clamps to min + min(max, min + k * step) when max != min + n * step', () => {
      expect(rescale(3, [0, 3], [0, 3], { step: 2 })).toBe(2);
    });
  });
});
