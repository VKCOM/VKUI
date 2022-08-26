import { ViewHeight } from "../lib/adaptivity";
import { getViewHeightClassName } from "./getViewHeightClassName";

describe("getViewHeightClassName", () => {
  describe("without `styles` argument", () => {
    it("returns 'none' className if there is no viewHeight", () =>
      expect(getViewHeightClassName("base")).toBe("base--viewHeight-none"));

    it("returns desktop className", () =>
      expect(getViewHeightClassName("base", ViewHeight.EXTRA_SMALL)).toBe(
        `base--viewHeight-extraSmall`
      ));
    it("returns mobile className", () =>
      expect(getViewHeightClassName("base", ViewHeight.MEDIUM)).toBe(
        `base--viewHeight-medium`
      ));
    it("returns smallMobile className", () =>
      expect(getViewHeightClassName("base", ViewHeight.SMALL)).toBe(
        `base--viewHeight-small`
      ));
  });

  describe("with `styles` argument", () => {
    const styles = {
      base: "some-hash",
      "base--viewHeight-none": "some-hash-none",
      "base--viewHeight-extraSmall": "some-hash-desktop",
      "base--viewHeight-medium": "some-hash-mobile",
      "base--viewHeight-small": "some-hash-smallMobile",
    };

    it("returns 'none' className if there is no viewHeight", () =>
      expect(getViewHeightClassName("base", undefined, styles)).toBe(
        styles["base--viewHeight-none"]
      ));

    it("returns desktop className", () =>
      expect(
        getViewHeightClassName("base", ViewHeight.EXTRA_SMALL, styles)
      ).toBe(styles[`base--viewHeight-extraSmall`]));
    it("returns mobile className", () =>
      expect(getViewHeightClassName("base", ViewHeight.MEDIUM, styles)).toBe(
        styles[`base--viewHeight-medium`]
      ));
    it("returns smallMobile className", () =>
      expect(getViewHeightClassName("base", ViewHeight.SMALL, styles)).toBe(
        styles[`base--viewHeight-small`]
      ));
  });
});
