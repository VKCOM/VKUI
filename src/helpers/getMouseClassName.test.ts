import { getMouseClassName } from "./getMouseClassName";

describe(getMouseClassName, () => {
  describe("without `styles` argument", () => {
    it("returns 'none' className if there is no mouse", () =>
      expect(getMouseClassName("base")).toBe("base--mouse-none"));

    it("returns className with 'has' if mouse is true", () =>
      expect(getMouseClassName("base", true)).toBe(`base--mouse-has`));

    it("returns className with 'has-not' if mouse is false", () =>
      expect(getMouseClassName("base", false)).toBe(`base--mouse-has-not`));
  });

  describe("with `styles` argument", () => {
    const styles = {
      base: "some-hash",
      "base--mouse-none": "some-hash-none",
      "base--mouse-has": "some-hash-has",
      "base--mouse-has-not": "some-hash-has-not",
    };

    it("returns 'none' className if there is no mouse", () =>
      expect(getMouseClassName("base", undefined, styles)).toBe(
        styles["base--mouse-none"]
      ));

    it("returns className with 'has' if mouse is true", () =>
      expect(getMouseClassName("base", true, styles)).toBe(
        styles["base--mouse-has"]
      ));

    it("returns className with 'has-not' if mouse is false", () =>
      expect(getMouseClassName("base", false, styles)).toBe(
        styles["base--mouse-has-not"]
      ));
  });
});
