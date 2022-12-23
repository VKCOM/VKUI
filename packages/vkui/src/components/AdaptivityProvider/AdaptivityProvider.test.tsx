import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from './AdaptivityProvider';
import { SizeType, ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useBridgeAdaptivity } from '../../hooks/useBridgeAdaptivity';

jest.mock('../../hooks/useBridgeAdaptivity', () => {
  const bridgeMock = jest.fn(() => {
    return {
      type: '',
      viewportWidth: 0,
      viewportHeight: 0,
    };
  });

  return {
    useBridgeAdaptivity: bridgeMock,
  };
});

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

function renderExtractAdaptive(hasPointer?: boolean): {
  sizeX: string;
  sizeY: string;
  viewHeight: number;
  viewWidth: number;
} {
  const renderResult = render(
    <AdaptivityProvider hasPointer={hasPointer}>
      <Adaptive />
    </AdaptivityProvider>,
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

function renderBridgeAdaptive(viewWidth = 0, viewHeight = 0, hasPointer?: boolean) {
  (useBridgeAdaptivity as jest.Mock).mockReturnValue({
    type: 'adaptive',
    viewportWidth: viewWidth,
    viewportHeight: viewHeight,
  });

  return renderExtractAdaptive(hasPointer);
}

// TODO: More tests for these variations

describe('AdaptivityProvider', () => {
  beforeEach(() => {
    (useBridgeAdaptivity as jest.Mock).mockReturnValue({
      type: '',
      viewportWidth: 0,
      viewportHeight: 0,
    });
  });
  baselineComponent(AdaptivityProvider, { forward: false });
  describe('bridge adaptivity', () => {
    it('should apply bridge adaptivity [viewWidth] SMALL_MOBILE', () => {
      const result = renderBridgeAdaptive(300, 420);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [viewWidth] MOBILE', () => {
      const result = renderBridgeAdaptive(320, 420);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [viewWidth] SMALL_TABLET', () => {
      const result = renderBridgeAdaptive(768, 420);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [viewWidth] TABLET', () => {
      const result = renderBridgeAdaptive(1024, 420);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [viewWidth] DESKTOP', () => {
      const result = renderBridgeAdaptive(1280, 420);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [viewHeight] EXTRA_SMALL', () => {
      const result = renderBridgeAdaptive(320, 340);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });
    it('should apply bridge adaptivity [viewHeight] SMALL', () => {
      const result = renderBridgeAdaptive(320, 415);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [viewHeight] MEDIUM', () => {
      const result = renderBridgeAdaptive(320, 720);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
    it('should apply bridge adaptivity [both] SMALL_MOBILE / EXTRA_SMALL', () => {
      const result = renderBridgeAdaptive(300, 340);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });
    it('should apply bridge adaptivity [both] SMALL_TABLET / SMALL', () => {
      const result = renderBridgeAdaptive(768, 415);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });
    it('should apply bridge adaptivity [both] TABLET / MEDIUM', () => {
      const result = renderBridgeAdaptive(1024, 720);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
    it('should apply bridge adaptivity [both] DESKTOP / MEDIUM', () => {
      const result = renderBridgeAdaptive(1280, 720);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
  });
  describe('custom props', () => {
    it('should ignore custom mouse with bridge [viewWidth] SMALL_TABLET', () => {
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
