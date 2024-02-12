import * as React from 'react';
import { render } from '@testing-library/react';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { type BridgeAdaptivity } from '../../hooks/useBridgeAdaptivity';
import { SizeType, ViewHeight, ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext, type AdaptivityProps } from './AdaptivityContext';
import { AdaptivityProvider, type AdaptivityProviderProps } from './AdaptivityProvider';

const bridgeMock = jest.fn(() => {
  return {
    type: '',
    viewportWidth: 0,
    viewportHeight: 0,
  };
});
jest.mock('../../hooks/useBridgeAdaptivity', () => {
  return {
    useBridgeAdaptivity: () => bridgeMock(),
  };
});

const hasPointerStub = jest.fn().mockReturnValue(true);
jest.mock('@vkontakte/vkjs', () => ({
  get canUseDOM() {
    return true;
  },
  detectIOS: () => false,
  get hasMouse() {
    return hasPointerStub();
  },
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

jest.mock('../../lib/platform', () => {
  return {
    ...jest.requireActual('../../lib/platform'),
    platform: () => 'vkcom',
  };
});
jest.mock('../../hooks/usePlatform', () => {
  return {
    usePlatform: () => 'vkcom',
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

function renderAdaptiveProvider(props?: AdaptivityProviderProps): AdaptivityProps {
  const adaptivityProviderResultsRef = React.createRef<AdaptivityResultsRef>();

  render(<TestAdaptiveProvider ref={adaptivityProviderResultsRef} {...props} />);

  if (!adaptivityProviderResultsRef.current) {
    throw new Error('adaptivityProviderResultsRef.current is not defined');
  }

  return adaptivityProviderResultsRef.current?.adaptivityProviderResults;
}

function renderAdaptiveProviderWithBridge(
  type: BridgeAdaptivity['type'],
  viewportWidth = 0,
  viewportHeight = 0,
  hasPointer?: boolean,
) {
  bridgeMock.mockReturnValue({
    type,
    viewportWidth,
    viewportHeight,
  });

  return renderAdaptiveProvider({ hasPointer });
}

describe('AdaptivityProvider', () => {
  beforeEach(() => {
    bridgeMock.mockReturnValue({
      type: '',
      viewportWidth: 0,
      viewportHeight: 0,
    });
  });

  baselineComponent(AdaptivityProvider, { forward: false, a11y: false, getRootRef: false });

  describe('without bridge', () => {
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

    it('should define sizeX and sizeY adaptivity props', () => {
      expect(
        renderAdaptiveProvider({
          viewWidth: ViewWidth.DESKTOP,
          viewHeight: ViewHeight.MEDIUM,
        }),
      ).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });

      expect(
        renderAdaptiveProvider({
          viewWidth: ViewWidth.DESKTOP,
          viewHeight: ViewHeight.MEDIUM,
          hasPointer: true,
        }),
      ).toMatchObject({
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
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] MOBILE', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 420);
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] SMALL_TABLET', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 768, 420);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] TABLET', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1024, 420);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewWidth] DESKTOP', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1280, 420);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewHeight] EXTRA_SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 340);
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it('should apply bridge adaptivity [viewHeight] SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 415);
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [viewHeight] MEDIUM', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 320, 720);
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it('should apply bridge adaptivity [both] SMALL_MOBILE / EXTRA_SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 300, 340);
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_MOBILE,
        viewHeight: ViewHeight.EXTRA_SMALL,
      });
    });

    it('should apply bridge adaptivity [both] SMALL_TABLET / SMALL', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 768, 415);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should apply bridge adaptivity [both] TABLET / MEDIUM', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1024, 720);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.TABLET,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it('should apply bridge adaptivity [both] DESKTOP / MEDIUM', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 1280, 720);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.DESKTOP,
        viewHeight: ViewHeight.MEDIUM,
      });
    });

    it('should ignore custom mouse with bridge [viewWidth] SMALL_TABLET', () => {
      const result = renderAdaptiveProviderWithBridge('adaptive', 768, 420, false);
      expect(result).toMatchObject({
        sizeX: SizeType.REGULAR,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.SMALL_TABLET,
        viewHeight: ViewHeight.SMALL,
      });
    });

    it('should use bridge force_mobile preset', () => {
      const result = renderAdaptiveProviderWithBridge('force_mobile');
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: undefined,
      });
    });

    it('should use bridge force_mobile_compact preset', () => {
      const result = renderAdaptiveProviderWithBridge('force_mobile_compact');
      expect(result).toMatchObject({
        sizeX: SizeType.COMPACT,
        sizeY: SizeType.COMPACT,
        viewWidth: ViewWidth.MOBILE,
        viewHeight: undefined,
      });
    });
  });
});

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
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
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
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.COMPACT,
      viewWidth: ViewWidth.DESKTOP,
      viewHeight: ViewHeight.MEDIUM,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.MOBILE,
      viewHeight: ViewHeight.EXTRA_SMALL,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.COMPACT,
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
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
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
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.COMPACT,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
  },
  {
    inProps: {
      sizeX: SizeType.COMPACT as const,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
      hasPointer: false,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.REGULAR,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
  },
  {
    inProps: {
      sizeX: SizeType.COMPACT as const,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
      hasPointer: true,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.COMPACT,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
  },
  {
    inProps: {
      sizeY: SizeType.REGULAR as const,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
  },
  {
    inProps: {
      sizeX: SizeType.REGULAR as const,
      sizeY: SizeType.REGULAR as const,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
      viewWidth: ViewWidth.SMALL_TABLET,
      viewHeight: ViewHeight.MEDIUM,
    },
  },
  {
    inProps: {
      sizeX: SizeType.REGULAR as const,
      sizeY: SizeType.REGULAR as const,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_MOBILE,
      hasPointer: false,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_MOBILE,
      hasPointer: true,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.MOBILE,
      hasPointer: false,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.MOBILE,
      hasPointer: true,
    },
    outProps: {
      sizeX: SizeType.COMPACT,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: false,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: true,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.COMPACT,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.TABLET,
      hasPointer: false,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.TABLET,
      hasPointer: true,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.COMPACT,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.DESKTOP,
      hasPointer: false,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.REGULAR,
    },
  },
  {
    inProps: {
      viewWidth: ViewWidth.DESKTOP,
      hasPointer: true,
    },
    outProps: {
      sizeX: SizeType.REGULAR,
      sizeY: SizeType.COMPACT,
    },
  },
];

describe('AdaptiveProvider without bridge and useAdaptivityWithJSMediaQueries should return similar results', () => {
  beforeAll(() => {
    bridgeMock.mockReturnValue({
      type: '',
      viewportWidth: 0,
      viewportHeight: 0,
    });
  });
  testSuites.map((testOptions) => {
    const { inProps, outProps } = testOptions;

    describe(`should define sizeX and sizeY adaptivity props for input: \n${JSON.stringify(
      inProps,
      null,
      '\t',
    )}\n`, () => {
      beforeEach(() => {
        hasPointerStub.mockReturnValue(false);
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
