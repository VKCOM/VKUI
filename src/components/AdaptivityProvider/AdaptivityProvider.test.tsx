import { render } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { AdaptivityProvider } from "./AdaptivityProvider";
import { SizeType, ViewHeight, ViewWidth } from "./AdaptivityContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useBridgeAdaptivity } from "../../hooks/useBridgeAdaptivity";

jest.mock("../../hooks/useBridgeAdaptivity", () => {
  const bridgeMock = jest.fn(() => {
    return {
      type: "",
      viewportWidth: 0,
      viewportHeight: 0,
    };
  });

  return {
    useBridgeAdaptivity: bridgeMock,
  };
});

const originalInnerWidth = window.innerWidth;
const originalInnerHeight = window.innerHeight;

let innerWidthMock = jest.fn(() => originalInnerWidth);
let innerHeightMock = jest.fn(() => originalInnerHeight);

function Adaptive() {
  const { sizeX, sizeY, viewWidth, viewHeight } = useAdaptivity();

  return (
    <div
      data-size-x={sizeX}
      data-size-y={sizeY}
      data-view-width={viewWidth}
      data-view-height={viewHeight}
    />
  );
}

function renderExtractAdaptive(
  innerWidth: number,
  innerHeight: number,
  hasMouse?: boolean
): {
  sizeX: string;
  sizeY: string;
  viewHeight: number;
  viewWidth: number;
} {
  innerWidthMock.mockReturnValue(innerWidth);
  innerHeightMock.mockReturnValue(innerHeight);

  const renderResult = render(
    <AdaptivityProvider hasMouse={hasMouse}>
      <Adaptive />
    </AdaptivityProvider>
  );
  const renderee = renderResult.container.firstElementChild as HTMLElement;

  const result = {
    sizeX: String(renderee.dataset.sizeX),
    sizeY: String(renderee.dataset.sizeY),
    viewWidth: Number(renderee.dataset.viewWidth),
    viewHeight: Number(renderee.dataset.viewHeight),
  };

  return result;
}

function renderBridgeAdaptive(
  viewWidth = 0,
  viewHeight = 0,
  hasMouse?: boolean
) {
  (useBridgeAdaptivity as jest.Mock).mockReturnValue({
    type: "adaptive",
    viewportWidth: viewWidth,
    viewportHeight: viewHeight,
  });

  return renderExtractAdaptive(100, 100, hasMouse);
}

function renderBridgeForce(
  type: string,
  innerWidth: number,
  innerHeight: number
) {
  (useBridgeAdaptivity as jest.Mock).mockReturnValue({
    type: type,
    viewportWidth: 0,
    viewportHeight: 0,
  });

  return renderExtractAdaptive(innerWidth, innerHeight);
}

beforeAll(() => {
  Object.defineProperty(window, "innerWidth", {
    get: innerWidthMock,
  });

  Object.defineProperty(window, "innerHeight", {
    get: innerHeightMock,
  });
});

afterEach(() => {
  innerWidthMock.mockRestore();
  innerHeightMock.mockRestore();
  (useBridgeAdaptivity as jest.Mock).mockReturnValue({
    type: "",
    viewportWidth: 0,
    viewportHeight: 0,
  });
});

// Default
// hasMouse=true
// deviceHasHover=true
// TODO: More tests for these variations

describe("AdaptivityProvider", () => {
  baselineComponent<any>(AdaptivityProvider, { forward: false });

  describe("window adaptivity", () => {
    it("should apply window adaptivity [viewWidth] SMALL_MOBILE", () => {
      const result = renderExtractAdaptive(300, 420);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [viewWidth] MOBILE", () => {
      const result = renderExtractAdaptive(320, 420);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [viewWidth] SMALL_TABLET", () => {
      const result = renderExtractAdaptive(768, 420);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [viewWidth] TABLET", () => {
      const result = renderExtractAdaptive(1024, 420);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [viewWidth] DESKTOP", () => {
      const result = renderExtractAdaptive(1280, 420);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [viewHeight] EXTRA_SMALL", () => {
      const result = renderExtractAdaptive(320, 340);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it("should apply window adaptivity [viewHeight] SMALL", () => {
      const result = renderExtractAdaptive(320, 415);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [viewHeight] MEDIUM", () => {
      const result = renderExtractAdaptive(320, 720);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it("should apply window adaptivity [both] SMALL_MOBILE / EXTRA_SMALL", () => {
      const result = renderExtractAdaptive(300, 340);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it("should apply window adaptivity [both] SMALL_TABLET / SMALL", () => {
      const result = renderExtractAdaptive(768, 415);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply window adaptivity [both] TABLET / MEDIUM", () => {
      const result = renderExtractAdaptive(1024, 720);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it("should apply window adaptivity [both] DESKTOP / MEDIUM", () => {
      const result = renderExtractAdaptive(1280, 720);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
  });

  describe("bridge adaptivity", () => {
    it("should apply bridge adaptivity [viewWidth] SMALL_MOBILE", () => {
      const result = renderBridgeAdaptive(300, 420);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [viewWidth] MOBILE", () => {
      const result = renderBridgeAdaptive(320, 420);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [viewWidth] SMALL_TABLET", () => {
      const result = renderBridgeAdaptive(768, 420);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [viewWidth] TABLET", () => {
      const result = renderBridgeAdaptive(1024, 420);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [viewWidth] DESKTOP", () => {
      const result = renderBridgeAdaptive(1280, 420);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [viewHeight] EXTRA_SMALL", () => {
      const result = renderBridgeAdaptive(320, 340);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it("should apply bridge adaptivity [viewHeight] SMALL", () => {
      const result = renderBridgeAdaptive(320, 415);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [viewHeight] MEDIUM", () => {
      const result = renderBridgeAdaptive(320, 720);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it("should apply bridge adaptivity [both] SMALL_MOBILE / EXTRA_SMALL", () => {
      const result = renderBridgeAdaptive(300, 340);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it("should apply bridge adaptivity [both] SMALL_TABLET / SMALL", () => {
      const result = renderBridgeAdaptive(768, 415);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should apply bridge adaptivity [both] TABLET / MEDIUM", () => {
      const result = renderBridgeAdaptive(1024, 720);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it("should apply bridge adaptivity [both] DESKTOP / MEDIUM", () => {
      const result = renderBridgeAdaptive(1280, 720);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
  });

  describe("bridge force", () => {
    it("should force bridge adaptivity [force_mobile]", () => {
      const result = renderBridgeForce("force_mobile", 768, 720);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it("should force bridge adaptivity [force_mobile] 2", () => {
      const result = renderBridgeForce("force_mobile", 768, 300);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it("should force bridge adaptivity [force_mobile_compact]", () => {
      const result = renderBridgeForce("force_mobile_compact", 768, 720);

      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
  });

  describe("custom props", () => {
    it("should override mouse for viewWidth SMALL_TABLET", () => {
      const result = renderExtractAdaptive(768, 420, false);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it("should ignore custom mouse with bridge [viewWidth] SMALL_TABLET", () => {
      const result = renderBridgeAdaptive(768, 420, false);

      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });
  });
});
