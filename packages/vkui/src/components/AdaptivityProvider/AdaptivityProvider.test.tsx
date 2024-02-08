import * as React from 'react';
import { render } from '@testing-library/react';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';
import { AdaptivityProvider, type AdaptivityProviderProps } from './AdaptivityProvider';

jest.mock('@vkontakte/vkjs', () => ({
  get canUseDOM() {
    return true;
  },
  detectIOS: () => false,
}));
jest.mock('../../hooks/useMediaQueries', () => ({
  useMediaQueries: () => ({
    desktopPlus: () => jest.fn(),
    smallTabletPlus: () => jest.fn(),
    tablet: () => jest.fn(),
    smallTablet: () => jest.fn(),
    mobile: () => jest.fn(),
    mediumHeight: () => jest.fn(),
    mobileLandscapeHeight: () => jest.fn(),
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

const TestAdaptiveProvider = React.forwardRef<AdaptivityResultsRef, AdaptivityProviderProps>(
  (props, ref) => (
    <AdaptivityProvider {...props}>
      <CatchAdaptivityProviderContext ref={ref} />
    </AdaptivityProvider>
  ),
);

interface TestSuite {
  inProps: AdaptivityProviderProps & {
    runOnlyThisSuite?: boolean;
  };
  outProps: AdaptivityProps;
}

const testSuites: TestSuite[] = [
  {
    inProps: {
      viewWidth: ViewWidth.DESKTOP,
      viewHeight: ViewHeight.MEDIUM,
      hasPointer: false,
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
      hasPointer: true,
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
      hasPointer: false,
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
      hasPointer: true,
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
      hasPointer: false,
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
      hasPointer: true,
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
      hasPointer: false,
    },
    outProps: {
      sizeX: 'compact',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_MOBILE,
      hasPointer: true,
    },
    outProps: {
      sizeX: 'compact',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.MOBILE,
      hasPointer: false,
    },
    outProps: {
      sizeX: 'compact',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.MOBILE,
      hasPointer: true,
    },
    outProps: {
      sizeX: 'compact',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: false,
    },
    outProps: {
      sizeX: 'regular',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: true,
    },
    outProps: {
      sizeX: 'regular',
      sizeY: 'compact',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.TABLET,
      hasPointer: false,
    },
    outProps: {
      sizeX: 'regular',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.TABLET,
      hasPointer: true,
    },
    outProps: {
      sizeX: 'regular',
      sizeY: 'compact',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.DESKTOP,
      hasPointer: false,
    },
    outProps: {
      sizeX: 'regular',
      sizeY: 'regular',
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.DESKTOP,
      hasPointer: true,
    },
    outProps: {
      sizeX: 'regular',
      sizeY: 'compact',
    },
  },
];

describe('AdaptivityProvider', () => {
  baselineComponent(AdaptivityProvider, { forward: false, a11y: false, getRootRef: false });

  it('should return undefined adaptivity props', () => {
    const adaptivityProviderResultsRef = React.createRef<AdaptivityResultsRef>();
    render(<TestAdaptiveProvider ref={adaptivityProviderResultsRef} />);
    expect(adaptivityProviderResultsRef.current?.adaptivityProviderResults).toMatchObject({
      sizeX: undefined,
      sizeY: undefined,
      viewWidth: undefined,
      viewHeight: undefined,
    });
  });
});

describe('AdaptiveProvider and useAdaptivityWithJSMediaQueries should return similar results', () => {
  testSuites.map((testOptions) => {
    const { inProps, outProps } = testOptions;

    describe(`should define sizeX and sizeY adaptivity props for input: \n${JSON.stringify(
      inProps,
      null,
      '\t',
    )}\n`, () => {
      beforeEach(() => {
        getViewWidthByMediaQueriesStub.mockReturnValue(() => inProps.viewWidth);
        getViewHeightByMediaQueriesStub.mockReturnValue(() => inProps.viewHeight);
      });

      const test = inProps.runOnlyThisSuite ? it.only : it;
      test('AdaptiveProvider', () => {
        const adaptivityProviderResultsRef = React.createRef<AdaptivityResultsRef>();

        render(<TestAdaptiveProvider ref={adaptivityProviderResultsRef} {...inProps} />);

        // AdaptivityProvider results
        expect(adaptivityProviderResultsRef.current?.adaptivityProviderResults).toMatchObject(
          outProps,
        );
      });

      test('useAdaptivityWithJSMediaQueries', () => {
        const adaptivityProviderResultsRef = React.createRef<AdaptivityResultsRef>();

        render(<TestAdaptiveProvider ref={adaptivityProviderResultsRef} {...inProps} />);

        // useAdaptivityWithJSMediaQueries results
        expect(
          adaptivityProviderResultsRef.current?.adaptivityWithJsMediaQueriesHookResults,
        ).toMatchObject(outProps);
      });
    });
  });
});
