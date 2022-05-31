import { deriveAppearance, Scheme } from "./appearance";

describe("deriveAppearance", () => {
  it("Returns 'light' if scheme is undefined", () => {
    expect(deriveAppearance(undefined)).toEqual("light");
  });
  it("Returns 'light' if scheme is 'bright_light'", () => {
    expect(deriveAppearance(Scheme.BRIGHT_LIGHT)).toEqual("light");
  });
  it("Returns 'light' if scheme is 'vkcom_light'", () => {
    expect(deriveAppearance(Scheme.VKCOM_LIGHT)).toEqual("light");
  });
  it("Returns 'dark' if scheme is 'space_gray'", () => {
    expect(deriveAppearance(Scheme.SPACE_GRAY)).toEqual("dark");
  });
  it("Returns 'dark' if scheme is 'vkcom_dark'", () => {
    expect(deriveAppearance(Scheme.VKCOM_DARK)).toEqual("dark");
  });
});
