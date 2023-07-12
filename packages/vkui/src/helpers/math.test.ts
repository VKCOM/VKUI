import { clamp, rescale } from './math';

describe(clamp, () => {
  it('clamps min', () => expect(clamp(10, 20, 30)).toBe(20));
  it('clamps max', () => expect(clamp(40, 20, 30)).toBe(30));
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
  it('rounds to min when min != n * step', () => {
    expect(rescale(0.1, [0.1, 3.1], [0.1, 3.1], { step: 2 })).toBe(0.1);
  });
  it('rounds to max when max != n * step', () => {
    expect(rescale(3, [1, 5], [1, 5], { step: 2 })).toBe(3);
    expect(rescale(3, [0, 3], [0, 3], { step: 2 })).toBe(3);
  });
  describe('check use cases', () =>
    // см. https://github.com/VKCOM/VKUI/pull/5284
    it('should return 20000', () => {
      expect(rescale(100, [0, 100], [250, 20000], { step: 115 })).toBe(20000);
    }));
});
