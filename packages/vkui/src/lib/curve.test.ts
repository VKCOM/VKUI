import { cubicBezierOneDimensional, cubicBezierTwoDimensional } from './curve';

it('cubicBezierOneDimensional', () => {
  expect(cubicBezierOneDimensional(0, 1, 2, 3, 0.5)).toBeCloseTo(1.5);
});

it('cubicBezierTwoDimensional', () => {
  const [x, y] = cubicBezierTwoDimensional(0, 0, 1, 1, 2, 1, 3, 0, 0.5);
  expect(x).toBeCloseTo(1.5);
  expect(y).toBeCloseTo(0.75);
});
