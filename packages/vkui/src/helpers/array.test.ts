import { arraysEquals } from './array';

describe.each([
  { arrA: [1, 2, 3], arrB: [1, 2, 3], expected: true },
  { arrA: [1, 2, 3, 4], arrB: [1, 2, 3], expected: false },
  { arrA: [1, 2, 3], arrB: [1, 3, 2], expected: false },
  { arrA: [{}, {}], arrB: [{}, {}], expected: false },
])('arraysEquals', ({ arrA, arrB, expected }) => {
  test(`returns ${expected}`, () => {
    expect(arraysEquals(arrA, arrB)).toBe(expected);
  });
});
