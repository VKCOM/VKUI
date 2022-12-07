import { SizeType } from "../lib/adaptivity";
import { getSizeYClassName } from "./getSizeYClassName";

describe("getSizeYClassName", () => {
  describe("without `styles` argument", () => {
    it("returns 'none' className if there is no sizeY", () =>
      expect(getSizeYClassName("base")).toBe("base--sizeY-none"));

    it("returns className with actual sizeY if there is sizeY", () =>
      expect(getSizeYClassName("base", SizeType.COMPACT)).toBe(
        `base--sizeY-${SizeType.COMPACT}`
      ));
  });

  describe("with `styles` argument", () => {
    const styles = {
      base: "some-hash",
      "base--sizeY-none": "some-hash-none",
      [`base--sizeY-${SizeType.REGULAR}` as const]: "some-hash-regular",
      [`base--sizeY-${SizeType.COMPACT}` as const]: "some-hash-compact",
    };

    it("returns 'none' className if there is no sizeY", () =>
      expect(getSizeYClassName("base", undefined, styles)).toBe(
        styles["base--sizeY-none"]
      ));

    it("returns className with actual sizeY if there is sizeY", () =>
      expect(getSizeYClassName("base", SizeType.COMPACT, styles)).toBe(
        styles[`base--sizeY-${SizeType.COMPACT}`]
      ));
  });
});
