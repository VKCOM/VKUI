import { ViewWidth } from "../lib/adaptivity";
import { getViewWidthClassName } from "./getViewWidthClassName";

describe("getViewWidthClassName", () => {
  describe("without `styles` argument", () => {
    it("returns 'none' className if there is no viewWidth", () =>
      expect(getViewWidthClassName("base")).toBe("base--viewWidth-none"));

    it("returns desktop className", () =>
      expect(getViewWidthClassName("base", ViewWidth.DESKTOP)).toBe(
        `base--viewWidth-desktop base--viewWidth-smallTabletPlus base--viewWidth-tabletPlus`
      ));
    it("returns tablet className", () =>
      expect(getViewWidthClassName("base", ViewWidth.TABLET)).toBe(
        `base--viewWidth-tablet base--viewWidth-smallTabletPlus base--viewWidth-tabletPlus`
      ));
    it("returns smallTablet className", () =>
      expect(getViewWidthClassName("base", ViewWidth.SMALL_TABLET)).toBe(
        `base--viewWidth-smallTablet base--viewWidth-smallTabletPlus`
      ));
    it("returns mobile className", () =>
      expect(getViewWidthClassName("base", ViewWidth.MOBILE)).toBe(
        `base--viewWidth-mobile`
      ));
    it("returns smallMobile className", () =>
      expect(getViewWidthClassName("base", ViewWidth.SMALL_MOBILE)).toBe(
        `base--viewWidth-smallMobile`
      ));
  });

  describe("with `styles` argument", () => {
    const styles = {
      base: "some-hash",
      "base--viewWidth-none": "some-hash-none",
      "base--viewWidth-desktop": "some-hash-desktop",
      "base--viewWidth-mobile": "some-hash-mobile",
      "base--viewWidth-smallMobile": "some-hash-smallMobile",
      "base--viewWidth-smallTablet": "some-hash-smallTablet",
      "base--viewWidth-tablet": "some-hash-tablet",
      "base--viewWidth-smallTabletPlus": "some-hash-smallTabletPlus",
      "base--viewWidth-tabletPlus": "some-hash-tabletPlus",
    };

    it("returns 'none' className if there is no viewWidth", () =>
      expect(getViewWidthClassName("base", undefined, styles)).toBe(
        styles["base--viewWidth-none"]
      ));

    it("returns desktop className", () =>
      expect(
        getViewWidthClassName("base", ViewWidth.DESKTOP, styles)
      ).toContain(styles[`base--viewWidth-desktop`]));
    it("returns desktop className", () =>
      expect(
        getViewWidthClassName("base", ViewWidth.DESKTOP, styles)
      ).toContain(styles[`base--viewWidth-smallTabletPlus`]));
    it("returns desktop className", () =>
      expect(
        getViewWidthClassName("base", ViewWidth.DESKTOP, styles)
      ).toContain(styles[`base--viewWidth-tabletPlus`]));
    it("returns tablet className", () =>
      expect(getViewWidthClassName("base", ViewWidth.TABLET, styles)).toContain(
        styles[`base--viewWidth-tablet`]
      ));
    it("returns tablet className", () =>
      expect(getViewWidthClassName("base", ViewWidth.TABLET, styles)).toContain(
        styles[`base--viewWidth-smallTabletPlus`]
      ));
    it("returns tablet className", () =>
      expect(getViewWidthClassName("base", ViewWidth.TABLET, styles)).toContain(
        styles[`base--viewWidth-tabletPlus`]
      ));
    it("returns smallTablet className", () =>
      expect(
        getViewWidthClassName("base", ViewWidth.SMALL_TABLET, styles)
      ).toContain(styles[`base--viewWidth-smallTablet`]));
    it("returns smallTablet className", () =>
      expect(
        getViewWidthClassName("base", ViewWidth.SMALL_TABLET, styles)
      ).toContain(styles[`base--viewWidth-smallTabletPlus`]));
    it("returns mobile className", () =>
      expect(getViewWidthClassName("base", ViewWidth.MOBILE, styles)).toBe(
        styles[`base--viewWidth-mobile`]
      ));
    it("returns smallMobile className", () =>
      expect(
        getViewWidthClassName("base", ViewWidth.SMALL_MOBILE, styles)
      ).toBe(styles[`base--viewWidth-smallMobile`]));
  });
});
