import { calcInitialsAvatarColor } from './avatar';

describe.each([
  { id: 1, expected: 2 },
  { id: 2, expected: 3 },
  { id: 3, expected: 4 },
  { id: 4, expected: 5 },
  { id: 5, expected: 6 },
  { id: 6, expected: 1 },
  { id: 7, expected: 2 },
  { id: 8, expected: 3 },
  { id: 9, expected: 4 },
  { id: 10, expected: 5 },
  { id: 11, expected: 6 },
  { id: 12, expected: 1 },
])('calcInitialsAvatarColor($id)', ({ id, expected }) => {
  test(`returns ${expected}`, () => {
    expect(calcInitialsAvatarColor(id)).toBe(expected);
  });
});
