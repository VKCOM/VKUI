import { ViewHeight, ViewWidth } from './constants';
import { tryToCheckIsDesktop, viewWidthToClassName } from './functions';

describe('adaptivity/functions', () => {
  describe(tryToCheckIsDesktop, () => {
    describe('check types', () => {
      it('should be null if all adaptivity parameters are empty', () => {
        expect(tryToCheckIsDesktop(undefined, undefined, undefined)).toBeNull();
      });

      it('should be null if only first adaptivity parameter is exist', () => {
        expect(tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, undefined)).toBeNull(); // prettier-ignore
      });

      it('should be null if only second adaptivity parameter is exist', () => {
        expect(tryToCheckIsDesktop(undefined, ViewHeight.MEDIUM, undefined)).toBeNull(); // prettier-ignore
      });

      it('should be null if only third adaptivity parameter is exist', () => {
        expect(tryToCheckIsDesktop(undefined, undefined, true)).toBeNull();
        expect(tryToCheckIsDesktop(undefined, undefined, false)).toBeNull();
      });

      it('should be boolean if first and second adaptivity parameters are exist', () => {
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, undefined)).toBe("boolean"); // prettier-ignore
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, true)).toBe("boolean"); // prettier-ignore
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, false)).toBe("boolean"); // prettier-ignore
      });

      it('should be boolean if first and third parameters are exist', () => {
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, true)).toBe("boolean"); // prettier-ignore
        expect(typeof tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, false)).toBe("boolean"); // prettier-ignore
      });
    });

    describe('check functionality', () => {
      it('should be true if first and second adaptivity parameters are valid for desktop', () => {
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.MEDIUM, undefined)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.MEDIUM, false)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.TABLET, ViewHeight.MEDIUM, false)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.DESKTOP, ViewHeight.MEDIUM, false)).toBeTruthy(); // prettier-ignore
      });

      it('should be true if first and third adaptivity parameters are valid for desktop', () => {
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, true)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.EXTRA_SMALL, true)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.TABLET, undefined, true)).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.DESKTOP, undefined, true)).toBeTruthy(); // prettier-ignore
      });

      it('should be false if some parameters are not valid for desktop', () => {
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, false)).toBeFalsy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.TABLET, ViewHeight.EXTRA_SMALL, undefined)).toBeFalsy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.MOBILE, ViewHeight.SMALL, undefined)).toBeFalsy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_MOBILE, ViewHeight.MEDIUM, true)).toBeFalsy(); // prettier-ignore
      });

      it('[CRUTCH] should be always true if platform is VKCOM', () => {
        expect(tryToCheckIsDesktop(undefined, undefined, undefined, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, undefined, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(undefined, ViewHeight.MEDIUM, undefined, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(undefined, undefined, true, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, ViewHeight.EXTRA_SMALL, undefined, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.MOBILE, ViewHeight.EXTRA_SMALL, undefined, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.MOBILE, ViewHeight.EXTRA_SMALL, true, 'vkcom')).toBeTruthy(); // prettier-ignore
        expect(tryToCheckIsDesktop(ViewWidth.SMALL_TABLET, undefined, false, 'vkcom')).toBeTruthy(); // prettier-ignore
      });
    });
  });

  describe(viewWidthToClassName, () => {
    describe('with full classNames', () => {
      const classNames = {
        none: 'some-hash-none',
        smallMobileMinus: 'some-hash-smallMobileMinus',
        mobile: 'some-hash-mobile',
        mobilePlus: 'some-hash-mobilePlus',
        smallTabletMinus: 'some-hash-smallTabletMinus',
        smallTablet: 'some-hash-smallTablet',
        smallTabletPlus: 'some-hash-smallTabletPlus',
        tabletMinus: 'some-hash-tabletMinus',
        tablet: 'some-hash-tablet',
        tabletPlus: 'some-hash-tabletPlus',
        desktopPlus: 'some-hash-desktopPlus',
      };

      it('should return "none" class name if viewWidth is "none"', () => {
        expect(viewWidthToClassName(classNames)).toBe(classNames['none']);
      });

      it('should return "smallMobile" class names', () => {
        expect(viewWidthToClassName(classNames, ViewWidth.SMALL_MOBILE)).toBe(
          [classNames.smallMobileMinus, classNames.smallTabletMinus, classNames.tabletMinus].join(
            ' ',
          ),
        );
      });

      it('should return "mobile" class names', () => {
        expect(viewWidthToClassName(classNames, ViewWidth.MOBILE)).toBe(
          [
            classNames.mobile,
            classNames.mobilePlus,
            classNames.smallTabletMinus,
            classNames.tabletMinus,
          ].join(' '),
        );
      });

      it('should return "smallTablet" class names', () => {
        expect(viewWidthToClassName(classNames, ViewWidth.SMALL_TABLET)).toBe(
          [
            classNames.smallTablet,
            classNames.mobilePlus,
            classNames.smallTabletPlus,
            classNames.tabletMinus,
          ].join(' '),
        );
      });

      it('should return "tablet" class names', () => {
        expect(viewWidthToClassName(classNames, ViewWidth.TABLET)).toBe(
          [
            classNames.tablet,
            classNames.mobilePlus,
            classNames.smallTabletPlus,
            classNames.tabletPlus,
          ].join(' '),
        );
      });

      it('should return "desktop" class names', () => {
        expect(viewWidthToClassName(classNames, ViewWidth.DESKTOP)).toBe(
          [
            classNames.desktopPlus,
            classNames.mobilePlus,
            classNames.smallTabletPlus,
            classNames.tabletPlus,
          ].join(' '),
        );
      });
    });

    describe('with partially classNames', () => {
      it('should return null', () => {
        const classNames = {};
        expect(viewWidthToClassName(classNames)).toBe(null);
        expect(viewWidthToClassName(classNames, ViewWidth.SMALL_MOBILE)).toBe(null);
        expect(viewWidthToClassName(classNames, ViewWidth.MOBILE)).toBe(null);
        expect(viewWidthToClassName(classNames, ViewWidth.SMALL_TABLET)).toBe(null);
        expect(viewWidthToClassName(classNames, ViewWidth.TABLET)).toBe(null);
        expect(viewWidthToClassName(classNames, ViewWidth.DESKTOP)).toBe(null);
      });

      it('should return null when viewWidth is "smallTabletPlus"', () => {
        const classNames = {
          mobile: 'some-hash-mobile',
          desktopPlus: 'some-hash-desktopPlus',
        };
        expect(viewWidthToClassName(classNames, ViewWidth.MOBILE)).toBe(classNames['mobile']);
      });

      it('should return null when viewWidth is "smallTabletMinus"', () => {
        const classNames = {
          mobile: 'some-hash-mobile',
          mobilePlus: 'some-hash-mobilePlus',
          desktopPlus: 'some-hash-desktopPlus',
        };
        expect(viewWidthToClassName(classNames, ViewWidth.MOBILE)).toBe(
          [classNames['mobile'], classNames['mobilePlus']].join(' '),
        );
      });
    });
  });
});
