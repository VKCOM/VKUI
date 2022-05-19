import { getHoverClassName } from "./getHoverClassName";

describe("getHoverClassName", () => {
  it("returns 'none' className if there is no hover", () =>
    expect(getHoverClassName("base")).toBe("base--hover-none"));

  it("returns className with 'has' if there is hover", () =>
    expect(getHoverClassName("base", true)).toBe(`base--hover-has`));
});
