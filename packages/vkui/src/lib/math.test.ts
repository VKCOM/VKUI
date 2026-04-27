import { distance, distancePoint } from './math';

it('distance', () => {
  expect(distance(1, 1, 4, 5)).toBeCloseTo(5);
});

it('distancePoint', () => {
  expect(distancePoint([1, 1], [4, 5])).toBeCloseTo(5);
});
