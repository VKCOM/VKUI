import * as React from 'react';
import { render } from '@testing-library/react';
// import {hasMouse}from "@vkontakte/vkjs";
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';
import { AdaptivityProvider, type AdaptivityProviderProps } from './AdaptivityProvider';

const hasMouseLibDetectionStub = jest.fn(() => false);
jest.mock('@vkontakte/vkjs', () => ({
  get hasMouse() {
    return hasMouseLibDetectionStub();
  },
  get canUseDOM() {
    return true;
  },
  detectIOS: () => false,
}));
const mediaQueryListSub = {
  addEventListener: () => jest.fn(),
  addListener: () => jest.fn(),
  removeEventListener: () => jest.fn(),
  removeListener: () => jest.fn(),
};
jest.mock('../../hooks/useMediaQueries', () => ({
  useMediaQueries: () => ({
    desktopPlus: () => mediaQueryListSub,
    smallTabletPlus: () => mediaQueryListSub,
    tablet: () => mediaQueryListSub,
    smallTablet: () => mediaQueryListSub,
    mobile: () => mediaQueryListSub,
    mediumHeight: () => mediaQueryListSub,
    mobileLandscapeHeight: () => mediaQueryListSub,
  }),
}));
jest.mock('../../lib/matchMedia', () => ({
  matchMediaListAddListener: () => jest.fn(),
  matchMediaListRemoveListener: () => jest.fn(),
}));

const getViewWidthByMediaQueriesStub = jest.fn().mockReturnValue(ViewWidth.SMALL_MOBILE);
const getViewHeightByMediaQueriesStub = jest.fn().mockReturnValue(ViewHeight.SMALL);
jest.mock('../../lib/adaptivity', () => {
  return {
    ...jest.requireActual('../../lib/adaptivity'),
    getViewWidthByMediaQueries: () => getViewWidthByMediaQueriesStub(),
    getViewHeightByMediaQueries: () => getViewHeightByMediaQueriesStub(),
  };
});

interface AdaptivityResultsRef {
  adaptivityProviderResults: AdaptivityProps;
  adaptivityWithJsMediaQueriesHookResults: AdaptivityProps;
}

const CatchAdaptivityProviderContext = React.forwardRef<AdaptivityResultsRef>((_, ref) => {
  const adaptivityProviderResults = React.useContext(AdaptivityContext);
  const adaptivityWithJsMediaQueriesHookResults = useAdaptivityWithJSMediaQueries();
  React.useImperativeHandle(
    ref,
    () => ({
      adaptivityProviderResults,
      adaptivityWithJsMediaQueriesHookResults,
    }),
    [adaptivityProviderResults, adaptivityWithJsMediaQueriesHookResults],
  );
  return null;
});

const TestAdaptiveProvider = React.forwardRef<
  {
    adaptivityProviderResults: AdaptivityProps;
    adaptivityWithJsMediaQueriesHookResults: AdaptivityProps;
  },
  AdaptivityProviderProps
>((props, ref) => (
  <AdaptivityProvider {...props}>
    <CatchAdaptivityProviderContext ref={ref} />
  </AdaptivityProvider>
));

describe('AdaptivityProvider + useAdaptivityWithJSMediaQueries should return identical results for identical input', () => {
  baselineComponent(AdaptivityProvider, { forward: false, a11y: false, getRootRef: false });

  it('should return undefined adaptivity props', () => {
    const adaptivityProviderResultsRef = React.createRef<AdaptivityResultsRef>();
    render(<TestAdaptiveProvider ref={adaptivityProviderResultsRef} />);
    expect(adaptivityProviderResultsRef.current?.adaptivityProviderResults).toEqual({
      sizeX: undefined,
      sizeY: undefined,
      viewWidth: undefined,
      viewHeight: undefined,
    });
  });

  [
    {
      inProps: {
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
        hasMouseLibDetection: true,
      },
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
      inProps: {
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
        hasMouseLibDetection: false,
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
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
        hasMouseLibDetection: true,
      },
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
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'compact',
        sizeY: 'regular',
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
      },
    },
    {
      inProps: {
        sizeX: 'compact' as const,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.MEDIUM,
        hasMouseLibDetection: true,
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
    {
      inProps: {
        viewWidth: ViewWidth.SMALL_MOBILE,
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'compact',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.SMALL_MOBILE,
        hasMouseLibDetection: true,
      },
      outProps: {
        sizeX: 'compact',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.MOBILE,
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'compact',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.MOBILE,
        hasMouseLibDetection: true,
      },
      outProps: {
        sizeX: 'compact',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.SMALL_TABLET,
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.SMALL_TABLET,
        hasMouseLibDetection: true,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'compact',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.TABLET,
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.TABLET,
        hasMouseLibDetection: true,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'compact',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.DESKTOP,
        hasMouseLibDetection: false,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'regular',
      },
    },
    {
      inProps: {
        viewWidth: ViewWidth.DESKTOP,
        hasMouseLibDetection: true,
      },
      outProps: {
        sizeX: 'regular',
        sizeY: 'compact',
      },
    },
  ].map((testOptions) => {
    const { inProps, outProps } = testOptions;

    const test = inProps.only ? it.only : it;

    test(`should define sizeX and sizeY adaptivity props for input: \n${JSON.stringify(
      inProps,
      null,
      '\t',
    )}\n`, () => {
      const { hasMouseLibDetection, ...props } = inProps;

      hasMouseLibDetectionStub.mockReturnValue(hasMouseLibDetection ?? false);
      getViewWidthByMediaQueriesStub.mockReturnValue(() => inProps.viewWidth);
      getViewHeightByMediaQueriesStub.mockReturnValue(() => inProps.viewHeight);

      const adaptivityProviderResultsRef = React.createRef<AdaptivityResultsRef>();

      render(<TestAdaptiveProvider ref={adaptivityProviderResultsRef} {...props} />);

      // AdaptivityProvider results
      expect(adaptivityProviderResultsRef.current?.adaptivityProviderResults).toMatchObject(
        outProps,
      );
      // useAdaptivityWithJSMediaQueries results
      expect(
        adaptivityProviderResultsRef.current?.adaptivityWithJsMediaQueriesHookResults,
      ).toMatchObject(outProps);
    });
  });
});
