import { minOr } from './comparing';

it('minOr', () => {
  const defaultValue = 24;

  expect(minOr([48, 10, 12], defaultValue)).toEqual(10);
  expect(minOr([undefined, 10, 12], defaultValue)).toEqual(10);
  expect(minOr([undefined], defaultValue)).toEqual(24);
  expect(minOr([], defaultValue)).toEqual(24);
  expect(minOr([], defaultValue)).toEqual(24);
});
