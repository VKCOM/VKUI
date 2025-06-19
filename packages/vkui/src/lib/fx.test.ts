import { cubicBezier, easeInOutSine } from './fx';

describe('easeInOutSine', () => {
  it('should return 0 when x is 0', () => {
    expect(easeInOutSine(0)).toBe(0);
  });

  it('should return 0.5 when x is 0.5', () => {
    expect(easeInOutSine(0.5)).toBeCloseTo(0.5);
  });

  it('should return 1 when x is 1', () => {
    expect(easeInOutSine(1)).toBe(1);
  });

  it('should be within bounds 0 and 1 for x in bounds 0 and 1', () => {
    for (let x = 0; x <= 1; x += 0.1) {
      expect(easeInOutSine(x)).toBeGreaterThanOrEqual(0);
      expect(easeInOutSine(x)).toBeLessThanOrEqual(1);
    }
  });
});

it('cubicBezier', () => {
  const bezierFunction = cubicBezier(0.5, 0.5);

  expect(bezierFunction(0.25)).toBeCloseTo(0.3);
});
