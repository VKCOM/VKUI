import { Platform } from "../platform";
import { ViewHeight, ViewWidth } from "./constants";
import { tryToCheckIsDesktop } from "./functions";

describe("adaptivity/functions", () => {
  describe(tryToCheckIsDesktop, () => {
    describe("check types", () => {
      it("should be null if all adaptivity parameters are empty", () => {
        expect(tryToCheckIsDesktop(undefined, undefined, undefined)).toBeNull();
      });

      it("should be null if only first adaptivity parameter is exist", () => {
        expect(tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, undefined)).toBeNull(); // prettier-ignore
      });

      it("should be null if only second adaptivity parameter is exist", () => {
        expect(tryToCheckIsDesktop(undefined, ViewHeight.MEDIUM, undefined)).toBeNull(); // prettier-ignore
      });

      it("should be null if only third adaptivity parameter is exist", () => {
        expect(tryToCheckIsDesktop(undefined, undefined, true)).toBeNull();
        expect(tryToCheckIsDesktop(undefined, undefined, false)).toBeNull();
      });

      it("should be boolean if first and second adaptivity parameters are exist", () => {
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, undefined)).toBe("boolean"); // prettier-ignore
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, true)).toBe("boolean"); // prettier-ignore
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, false)).toBe("boolean"); // prettier-ignore
      });

      it("should be boolean if first and third parameters are exist", () => {
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, true)).toBe("boolean"); // prettier-ignore
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, false)).toBe("boolean"); // prettier-ignore
      });
    });

    describe("check functionality", () => {
      it("should be true if first and second adaptivity parameters are valid for desktop", () => {
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.MEDIUM, undefined)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.MEDIUM, false)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.TABLET, ViewHeight.MEDIUM, false)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, false)).toBeTruthy(); // prettier-ignore
      });

      it("should be true if first and third adaptivity parameters are valid for desktop", () => {
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, true)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.EXTRA_SMALL, true)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.TABLET, undefined, true)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, true)).toBeTruthy(); // prettier-ignore
      });

      it("should be false if some parameters are not valid for desktop", () => {
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, false)).toBeFalsy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.TABLET, ViewHeight.EXTRA_SMALL, undefined)).toBeFalsy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.MOBILE, ViewHeight.SMALL, undefined)).toBeFalsy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_MOBILE, ViewHeight.MEDIUM, true)).toBeFalsy(); // prettier-ignore
      });

      it("[CRUTCH] should be always true if platform is VKCOM", () => {
        expect(tryToCheckIsDesktop(undefined, undefined, undefined, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, undefined, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(undefined, ViewHeight.MEDIUM, undefined, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(undefined, undefined, true, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.EXTRA_SMALL, undefined, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.MOBILE, ViewHeight.EXTRA_SMALL, undefined, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.MOBILE, ViewHeight.EXTRA_SMALL, true, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, false, Platform.VKCOM)).toBeTruthy(); // prettier-ignore
      });
    });
  });
});
