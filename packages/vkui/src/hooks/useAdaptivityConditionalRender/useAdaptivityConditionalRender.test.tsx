import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { ViewHeight, ViewWidth } from '../../lib/adaptivity';
import {
  deviceTypeClassNames,
  sizeXCompactClassNames,
  sizeXRegularClassNames,
  sizeYCompactClassNames,
  sizeYRegularClassNames,
  viewWidthClassNames,
} from './constants';
import { useAdaptivityConditionalRender } from './useAdaptivityConditionalRender';

describe(useAdaptivityConditionalRender, () => {
  describe('without AdaptivityProvider', () => {
    it('sizeX', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.sizeX).toMatchObject({
        compact: sizeXCompactClassNames.mq,
        regular: sizeXRegularClassNames.mq,
      });
    });

    it('sizeY', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.sizeY).toMatchObject({
        compact: sizeYCompactClassNames.mq,
        regular: sizeYRegularClassNames.mq,
      });
    });

    it('viewWidth', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.viewWidth).toMatchObject({
        tabletPlus: viewWidthClassNames.tabletPlus.mq,
        tabletMinus: viewWidthClassNames.tabletMinus.mq,
      });
    });

    it('deviceType', () => {
      const { result } = renderHook(useAdaptivityConditionalRender);
      expect(result.current.deviceType).toMatchObject({
        mobile: deviceTypeClassNames.mobile.mq,
        desktop: deviceTypeClassNames.desktop.mq,
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
          compact: sizeXCompactClassNames['compact'],
          regular: false,
        });
      });

      it('regular', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeX: 'regular',
        });
        expect(result.current.sizeX).toMatchObject({
          compact: false,
          regular: sizeXRegularClassNames['regular'],
        });
      });
    });

    describe('sizeY', () => {
      it('compact', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeY: 'compact',
        });
        expect(result.current.sizeY).toMatchObject({
          compact: sizeYCompactClassNames['compact'],
          regular: false,
        });
      });

      it('regular', () => {
        const { result } = renderHookWithAdaptivityProvider({
          sizeY: 'regular',
        });
        expect(result.current.sizeY).toMatchObject({
          compact: false,
          regular: sizeYRegularClassNames['regular'],
        });
      });
    });

    describe('viewWidth', () => {
      it('tablet', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.TABLET,
        });
        expect(result.current.viewWidth).toMatchObject({
          tabletPlus: viewWidthClassNames.tabletPlus.forced,
          tabletMinus: false,
        });
      });

      it('small tablet', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.SMALL_TABLET,
        });
        expect(result.current.viewWidth).toMatchObject({
          tabletPlus: false,
          tabletMinus: viewWidthClassNames.tabletMinus.forced,
        });
      });
    });

    describe('deviceType', () => {
      it('should ignore context if viewWidth provided only', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.SMALL_MOBILE,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeClassNames.mobile.mq,
          desktop: deviceTypeClassNames.desktop.mq,
        });
      });

      it('should ignore context if viewHeight provided only', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeClassNames.mobile.mq,
          desktop: deviceTypeClassNames.desktop.mq,
        });
      });

      it('should be mobile forced', () => {
        const { result } = renderHookWithAdaptivityProvider({
          viewWidth: ViewWidth.MOBILE,
          viewHeight: ViewHeight.MEDIUM,
        });
        expect(result.current.deviceType).toMatchObject({
          mobile: deviceTypeClassNames.mobile.forced,
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
          desktop: deviceTypeClassNames.desktop.forced,
        });
      });
    });
  });
});
