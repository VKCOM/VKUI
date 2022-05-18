import { SizeType } from "../hoc/withAdaptivity";
import { getSizeYClassName } from "./getSizeYClassName";

describe("getSizeYClassName", () => {
  it("returns 'none' className if there is no sizeY", () =>
    expect(getSizeYClassName("base")).toBe("base--sizeY-none"));

  it("returns className with actual sizeY if there is sizeY", () =>
    expect(getSizeYClassName("base", SizeType.COMPACT)).toBe(
      `base--sizeY-${SizeType.COMPACT}`
    ));
});
