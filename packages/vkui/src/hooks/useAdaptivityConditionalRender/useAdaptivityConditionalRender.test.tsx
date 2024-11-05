import { renderHook } from '@testing-library/react';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { ViewHeight, ViewWidth } from '../../lib/adaptivity';
import {
  deviceTypeMediaQueryMapProps,
  forcedProps,
  sizeXCompactMediaQueryProps,
  sizeXRegularMediaQueryProps,
  sizeYCompactMediaQueryProps,
  sizeYRegularMediaQueryProps,
  viewWidthMediaQueryMapProps,
} from './constants';
import { useAdaptivityConditionalRender } from './useAdaptivityConditionalRender';

describe(useAdaptivityConditionalRender, () => {
  describe('without AdaptivityProvider', () => {
    it('sizeX', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.sizeX).toMatchObject({
        compact: sizeXCompactMediaQueryProps,
        regular: sizeXRegularMediaQueryProps,
      });
    });

    it('sizeY', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.sizeY).toMatchObject({
        compact: sizeYCompactMediaQueryProps,
        regular: sizeYRegularMediaQueryProps,
      });
    });

    it('viewWidth', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.viewWidth).toMatchObject({
        tabletPlus: viewWidthMediaQueryMapProps.tabletPlus,
        tabletMinus: viewWidthMediaQueryMapProps.tabletMinus,
      });
    });

    it('deviceType', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.deviceType).toMatchObject({
        mobile: deviceTypeMediaQueryMapProps.mobile,
        desktop: deviceTypeMediaQueryMapProps.desktop,
      });
    });
  });

  describe('with AdaptivityProvider', () => {
    const renderHookWithAdaptivityProvider = (adaptivityProps: AdaptivityProps) =>
      renderHook(useAdaptivityConditionalRender, {
        wrapper: (props) => <AdaptivityProvider {...adaptivityProps} {...props} />,
      });

    describe('sizeX', () => {
      it('compact', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeX: 'compact',
        });
        expect(result.current.sizeX).toMatchObject({
          compact: forcedProps,
          regular: false,
        });
      });

      it('regular', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeX: 'regular',
        });
        expect(result.current.sizeX).toMatchObject({
          compact: false,
          regular: forcedProps,
        });
      });
    });

    describe('sizeY', () => {
      it('compact', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeY: 'compact',
        });
        expect(result.current.sizeY).toMatchObject({
          compact: forcedProps,
          regular: false,
        });
      });

      it('regular', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeY: 'regular',
        });
        expect(result.current.sizeY).toMatchObject({
          compact: false,
          regular: forcedProps,
        });
      });
    });

    describe('viewWidth', () => {
      it('tablet', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.TABLET,
        });
        expect(result.current.viewWidth).toMatchObject({
          tabletPlus: forcedProps,
          tabletMinus: false,
        });
      });

      it('small tablet', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.SMALL_TABLET,
        });
        expect(result.current.viewWidth).toMatchObject({
          tabletPlus: false,
          tabletMinus: forcedProps,
        });
      });
    });

    describe('deviceType', () => {
      it('should ignore context if viewWidth provided only', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.SMALL_MOBILE,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeMediaQueryMapProps.mobile,
          desktop: deviceTypeMediaQueryMapProps.desktop,
        });
      });

      it('should ignore context if viewHeight provided only', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeMediaQueryMapProps.mobile,
          desktop: deviceTypeMediaQueryMapProps.desktop,
        });
      });

      it('should be mobile forced', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.MOBILE,
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: forcedProps,
          desktop: false,
        });
      });

      it('should be desktop forced', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.DESKTOP,
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: false,
          desktop: forcedProps,
        });
      });
    });
  });
});
