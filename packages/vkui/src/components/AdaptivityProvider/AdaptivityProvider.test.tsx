import * as React from 'react';
import { render } from '@testing-library/react';
import { ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';
import { AdaptivityProvider, type AdaptivityProviderProps } from './AdaptivityProvider';

const CatchAdaptivityProviderContext = React.forwardRef<AdaptivityProps>((_, ref) => {
  const adaptivityProps = React.useContext(AdaptivityContext);
  React.useImperativeHandle(ref, () => adaptivityProps, [adaptivityProps]);
  return null;
});

const TestAdaptiveProvider = React.forwardRef<AdaptivityProps, AdaptivityProviderProps>(
  (props, ref) => (
    <AdaptivityProvider {...props}>
      <CatchAdaptivityProviderContext ref={ref} />
    </AdaptivityProvider>
  ),
);

describe('AdaptivityProvider', () => {
  baselineComponent(AdaptivityProvider, { forward: false, a11y: false, getRootRef: false });

  it('should return undefined adaptivity props', () => {
    const adaptivityPropsRef = React.createRef<AdaptivityProps>();
    render(<TestAdaptiveProvider ref={adaptivityPropsRef} />);
    expect(adaptivityPropsRef.current).toEqual({
      sizeX: undefined,
      sizeY: undefined,
      viewWidth: undefined,
      viewHeight: undefined,
    });
  });

  it.each([
    {
      inProps: { viewWidth: ViewWidth.DESKTOP, viewHeight: ViewHeight.MEDIUM },
      outProps: {
        sizeX: 'regular',
        sizeY: 'compact',
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: { viewWidth: ViewWidth.MOBILE, viewHeight: ViewHeight.EXTRA_SMALL },
      outProps: {
        sizeX: 'compact',
        sizeY: 'compact',
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      },
    },
    {
      inProps: { viewWidth: ViewWidth.SMALL_TABLET, viewHeight: ViewHeight.MEDIUM },
      outProps: {
        sizeX: 'regular',
        sizeY: 'compact',
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: {
        sizeX: 'compact' as const,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
      outProps: {
        sizeX: 'compact',
        sizeY: 'compact',
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: {
        sizeY: 'regular' as const,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: {
        sizeX: 'regular' as const,
        sizeY: 'regular' as const,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: {
        sizeX: 'regular' as const,
        sizeY: 'regular' as const,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
      },
    },
  ])('should define sizeX and sizeY adaptivity props', ({ inProps, outProps }) => {
    const adaptivityPropsRef = React.createRef<AdaptivityProps>();
    render(<TestAdaptiveProvider ref={adaptivityPropsRef} {...inProps} />);
    expect(adaptivityPropsRef.current).toEqual(outProps);
  });
});
