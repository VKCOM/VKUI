import { rubberbandIfOutOfBounds } from './rubberbandIfOutOfBounds';

describe(rubberbandIfOutOfBounds, () => {
  it('should resolve edge cases', () => {
    expect(rubberbandIfOutOfBounds(5, 0, 10, 0)).toBe(5);
    expect(rubberbandIfOutOfBounds(1, 0, 0, 1)).toBe(1);
    expect(rubberbandIfOutOfBounds(-1, 0, 0, 1)).toBe(-1);
  });

  it('should resolve basic cases', () => {
    expect(rubberbandIfOutOfBounds(0, 0, 10)).toBe(0);
    expect(rubberbandIfOutOfBounds(-2, 0, 10)).toMatchInlineSnapshot(`-0.2912621359223301`);
    expect(rubberbandIfOutOfBounds(11, 0, 10)).toMatchInlineSnapshot(`10.147783251231527`);
  });
});
