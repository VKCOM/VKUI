import { nodeEqualsOrContains } from "./nodeEqualsOrContains";

describe("nodesEqualContain", () => {
  it("returns true if contains", () => {
    const result = nodeEqualsOrContains(
      {} as any,
      { contains: () => true } as any
    );

    expect(result).toEqual(true);
  });
  it("returns true if equal", () => {
    const node = { contains: () => false } as any;
    const result = nodeEqualsOrContains(node, node);

    expect(result).toEqual(true);
  });
  it("returns true if contains (array)", () => {
    const first = { contains: () => false } as any;
    const second = { contains: () => true } as any;
    const result = nodeEqualsOrContains({} as any, [first, second]);

    expect(result).toEqual(true);
  });
  it("returns true if equal (array)", () => {
    const node = { contains: () => false } as any;
    const result = nodeEqualsOrContains(node, [
      { contains: () => false } as any,
      node,
    ]);

    expect(result).toEqual(true);
  });
  it("returns false if not equal and doesn't contain", () => {
    const node = { contains: () => false } as any;
    const result = nodeEqualsOrContains(node, { contains: () => false } as any);

    expect(result).toEqual(false);
  });
  it("returns false if not equal and doesn't contain (array)", () => {
    const node = {} as any;
    const result = nodeEqualsOrContains(node, [
      { contains: () => false } as any,
      { contains: () => false } as any,
    ]);

    expect(result).toEqual(false);
  });
});
