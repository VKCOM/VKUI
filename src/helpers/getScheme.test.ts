import { Platform } from "../lib/platform";
import { getScheme } from "./getScheme";
import { Scheme } from "./scheme";

describe("getScheme", () => {
  it("Returns dark vkcom theme", () => {
    const result = getScheme({ platform: Platform.VKCOM, appearance: "dark" });

    expect(result).toEqual(Scheme.VKCOM_DARK);
  });
  it("Returns dark ios theme", () => {
    const result = getScheme({ platform: Platform.IOS, appearance: "dark" });

    expect(result).toEqual(Scheme.SPACE_GRAY);
  });
  it("Returns light vkcom theme", () => {
    const result = getScheme({ platform: Platform.VKCOM, appearance: "light" });

    expect(result).toEqual(Scheme.VKCOM_LIGHT);
  });
  it("Returns light ios theme", () => {
    const result = getScheme({ platform: Platform.IOS, appearance: "light" });

    expect(result).toEqual(Scheme.BRIGHT_LIGHT);
  });
});
