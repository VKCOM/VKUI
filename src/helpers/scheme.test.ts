import { Platform } from "../lib/platform";
import { getScheme } from "./getScheme";
import { normalizeScheme, Scheme } from "./scheme";

jest.mock("./getScheme");

describe("normalizeScheme", () => {
  it("Returns getScheme result if appearance passed", () => {
    (getScheme as jest.Mock).mockReturnValue("getScheme");

    const result = normalizeScheme({
      platform: Platform.VKCOM,
      appearance: "dark",
      scheme: "space_gray",
    });

    expect(getScheme).toHaveBeenCalledWith({
      platform: Platform.VKCOM,
      appearance: "dark",
    });
    expect(result).toEqual("getScheme");
  });
  it("Returns 'inherit' if scheme is 'inherit'", () => {
    const result = normalizeScheme({
      platform: Platform.VKCOM,
      scheme: "inherit",
    });

    expect(result).toEqual("inherit");
  });
  it("Returns VKCOM_LIGHT if scheme is VKCOM", () => {
    const result = normalizeScheme({
      platform: Platform.VKCOM,
      scheme: Scheme.VKCOM,
    });

    expect(result).toEqual(Scheme.VKCOM_LIGHT);
  });
  it("Returns VKCOM_LIGHT if scheme is BRIGHT_LIGHT and platform is VKCOM", () => {
    const result = normalizeScheme({
      platform: Platform.VKCOM,
      scheme: Scheme.BRIGHT_LIGHT,
    });

    expect(result).toEqual(Scheme.VKCOM_LIGHT);
  });
  it("Returns VKCOM_LIGHT if scheme is SPACE_GRAY and platform is VKCOM", () => {
    const result = normalizeScheme({
      platform: Platform.VKCOM,
      scheme: Scheme.SPACE_GRAY,
    });

    expect(result).toEqual(Scheme.VKCOM_LIGHT);
  });
  it("Returns SPACE_GRAY if scheme is DEPRECATED_CLIENT_DARK", () => {
    const result = normalizeScheme({
      platform: Platform.VKCOM,
      scheme: Scheme.DEPRECATED_CLIENT_DARK,
    });

    expect(result).toEqual(Scheme.SPACE_GRAY);
  });
  it("Returns scheme if no match", () => {
    const result = normalizeScheme({
      platform: Platform.VKCOM,
      scheme: "test" as Scheme,
    });

    expect(result).toEqual("test");
  });
});
