import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { type BridgeAdaptivity, useBridgeAdaptivity } from '../../hooks/useBridgeAdaptivity';
import { SizeType, ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';
import { AdaptivityProvider, type AdaptivityProviderProps } from './AdaptivityProvider';

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

function CatchAdaptivityProviderContext() {
  const { sizeX, sizeY, viewWidth, viewHeight } = React.useContext(AdaptivityContext);

  return (
    <div
      data-testid="adaptivity-provider-context"
      data-size-x={sizeX}
      data-size-y={sizeY}
      data-view-width={viewWidth}
      data-view-height={viewHeight}
    />
  );
}

function renderAdaptiveProvider(props?: AdaptivityProviderProps): AdaptivityProps {
  render(
    <AdaptivityProvider {...props}>
      <CatchAdaptivityProviderContext />
    </AdaptivityProvider>,
  );
  const elWithContextData = screen.getByTestId('adaptivity-provider-context');

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    sizeX: elWithContextData.dataset.sizeX,
    sizeY: elWithContextData.dataset.sizeY,
    viewWidth: elWithContextData.dataset.viewWidth
      ? Number(elWithContextData.dataset.viewWidth)
      : undefined,
    viewHeight: elWithContextData.dataset.viewHeight
      ? Number(elWithContextData.dataset.viewHeight)
      : undefined,
  } as AdaptivityProps;
}

function renderAdaptiveProviderWithBridge(
  type: BridgeAdaptivity['type'],
  viewportWidth = 0,
  viewportHeight = 0,
  hasPointer?: boolean,
) {
  (useBridgeAdaptivity as jest.Mock).mockReturnValue({
    type,
    viewportWidth,
    viewportHeight,
  });

  return renderAdaptiveProvider({ hasPointer });
}

describe('AdaptivityProvider', () => {
  beforeEach(() => {
    (useBridgeAdaptivity as jest.Mock).mockReturnValue({
      type: '',
      viewportWidth: 0,
      viewportHeight: 0,
    });
  });

  baselineComponent(AdaptivityProvider, { forward: false, a11y: false });

  describe('without bridge', () => {
    it('should return undefined adaptivity props', () => {
      const result = renderAdaptiveProvider();
      expect(result).toEqual({
        sizeX: undefined,
        sizeY: undefined,
        viewWidth: undefined,
        viewHeight: undefined,
      });
    });

    it('should define sizeX and sizeY adaptivity props', () => {
      const result = renderAdaptiveProvider({
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
    });
  });

  describe('with bridge', () => {
    it('should apply bridge adaptivity [viewWidth] SMALL_MOBILE', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 300, 420);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] MOBILE', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 420);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] SMALL_TABLET', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 768, 420);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] TABLET', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1024, 420);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] DESKTOP', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1280, 420);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewHeight] EXTRA_SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 340);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it('should apply bridge adaptivity [viewHeight] SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 415);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewHeight] MEDIUM', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 720);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it('should apply bridge adaptivity [both] SMALL_MOBILE / EXTRA_SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 300, 340);
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it('should apply bridge adaptivity [both] SMALL_TABLET / SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 768, 415);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [both] TABLET / MEDIUM', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1024, 720);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it('should apply bridge adaptivity [both] DESKTOP / MEDIUM', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1280, 720);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it('should ignore custom mouse with bridge [viewWidth] SMALL_TABLET', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 768, 420, false);
      expect(result).toEqual({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should use bridge force_mobile preset', () => {
      const result = renderAdaptiveProviderWithBridge('force_mobile');
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: undefined,
      });
    });

    it('should use bridge force_mobile_compact preset', () => {
      const result = renderAdaptiveProviderWithBridge('force_mobile_compact');
      expect(result).toEqual({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: undefined,
      });
    });
  });
});
