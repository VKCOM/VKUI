import * as array from './array';

it('array.copy', () => {
  const originalArray = [1, 2, 3];
  const copiedArray = array.copy(originalArray);

  expect(copiedArray).toStrictEqual(originalArray);
  expect(copiedArray).not.toBe(originalArray);
});
