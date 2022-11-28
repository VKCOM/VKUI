import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { SizeType, ViewHeight, ViewWidth } from "../../lib/adaptivity";
import { AdaptivityProvider } from "../../components/AdaptivityProvider/AdaptivityProvider";
import { useAdaptivityConditionalRender } from "./useAdaptivityConditionalRender";
import {
  deviceTypeClassNames,
  sizeXCompactClassNames,
  sizeXRegularClassNames,
  sizeYCompactClassNames,
  sizeYRegularClassNames,
  viewWidthClassNames,
} from "./constants";
import { AdaptivityProps } from "../../components/AdaptivityProvider/AdaptivityContext";

describe(useAdaptivityConditionalRender, () => {
  describe("without AdaptivityProvider", () => {
    it("sizeX", () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.sizeX).toMatchObject({
        compact: sizeXCompactClassNames.mq,
        regular: sizeXRegularClassNames.mq,
      });
    });

    it("sizeY", () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.sizeY).toMatchObject({
        compact: sizeYCompactClassNames.mq,
        regular: sizeYRegularClassNames.mq,
      });
    });

    it("viewWidth", () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.viewWidth).toMatchObject({
        tabletPlus: viewWidthClassNames.tabletPlus.mq,
        tabletMinus: viewWidthClassNames.tabletMinus.mq,
      });
    });

    it("deviceType", () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.deviceType).toMatchObject({
        mobile: deviceTypeClassNames.mobile.mq,
        desktop: deviceTypeClassNames.desktop.mq,
      });
    });
  });

  describe("with AdaptivityProvider", () => {
    const renderHookWithAdaptivityProvider = (
      adaptivityProps: AdaptivityProps
    ) =>
      renderHook(useAdaptivityConditionalRender, {
        wrapper: (props) => (
          <AdaptivityProvider {...adaptivityProps} {...props} />
        ),
      });

    describe("sizeX", () => {
      it(SizeType.COMPACT, () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeX: SizeType.COMPACT,
        });
        expect(result.current.sizeX).toMatchObject({
          compact: sizeXCompactClassNames[SizeType.COMPACT],
          regular: false,
        });
      });

      it(SizeType.REGULAR, () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeX: SizeType.REGULAR,
        });
        expect(result.current.sizeX).toMatchObject({
          compact: false,
          regular: sizeXRegularClassNames[SizeType.REGULAR],
        });
      });
    });

    describe("sizeY", () => {
      it(SizeType.COMPACT, () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeY: SizeType.COMPACT,
        });
        expect(result.current.sizeY).toMatchObject({
          compact: sizeYCompactClassNames[SizeType.COMPACT],
          regular: false,
        });
      });

      it(SizeType.REGULAR, () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeY: SizeType.REGULAR,
        });
        expect(result.current.sizeY).toMatchObject({
          compact: false,
          regular: sizeYRegularClassNames[SizeType.REGULAR],
        });
      });
    });

    describe("viewWidth", () => {
      it("tablet", () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.TABLET,
        });
        expect(result.current.viewWidth).toMatchObject({
          tabletPlus: viewWidthClassNames.tabletPlus.forced,
          tabletMinus: false,
        });
      });

      it("small tablet", () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.SMALL_TABLET,
        });
        expect(result.current.viewWidth).toMatchObject({
          tabletPlus: false,
          tabletMinus: viewWidthClassNames.tabletMinus.forced,
        });
      });
    });

    describe("deviceType", () => {
      it("should ignore context if viewWidth provided only", () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.SMALL_MOBILE,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeClassNames.mobile.mq,
          desktop: deviceTypeClassNames.desktop.mq,
        });
      });

      it("should ignore context if viewHeight provided only", () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeClassNames.mobile.mq,
          desktop: deviceTypeClassNames.desktop.mq,
        });
      });

      it("should be mobile forced", () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.MOBILE,
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeClassNames.mobile.forced,
          desktop: false,
        });
      });

      it("should be desktop forced", () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.DESKTOP,
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: false,
          desktop: deviceTypeClassNames.desktop.forced,
        });
      });
    });
  });
});
