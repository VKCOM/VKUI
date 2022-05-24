import { SizeType } from "../components/AdaptivityProvider/AdaptivityContext";
import { getSizeXClassName } from "./getSizeXClassName";

describe("getSizeXClassName", () => {
  it("returns 'none' className if there is no sizeX", () =>
    expect(getSizeXClassName("base")).toBe("base--sizeX-none"));

  it("returns className with actual sizeX if there is sizeX", () =>
    expect(getSizeXClassName("base", SizeType.COMPACT)).toBe(
      `base--sizeX-${SizeType.COMPACT}`
    ));
});
