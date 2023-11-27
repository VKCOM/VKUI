import { renderHook } from '@testing-library/react';
import { usePlatform } from '../hooks/usePlatform';
import { createWrapper } from '../testing/createWrapper';
import { SSRWrapper, SSRWrapperProps } from './SSR';

describe.each<{
  props: SSRWrapperProps;
  expectPlatform: string;
}>([
  { props: {}, expectPlatform: 'android' },
  {
    props: {
      userAgent: '',
    },
    expectPlatform: 'android',
  },
  {
    props: {
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1',
    },
    expectPlatform: 'ios',
  },
  {
    props: {
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1',
    },
    expectPlatform: 'ios',
  },
  {
    props: {
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/111.0 Mobile/15E148 Safari/605.1.15',
    },
    expectPlatform: 'ios',
  },
  {
    props: {
      browserInfo: {
        userAgent: '',
        system: '',
        systemVersion: null,
      },
    },
    expectPlatform: 'android',
  },
  {
    props: {
      browserInfo: {
        userAgent: '',
        system: 'ios',
        systemVersion: null,
      },
    },
    expectPlatform: 'ios',
  },
])('SSRWrapper($props)', ({ props, expectPlatform }) => {
  test(`usePlatform() return ${expectPlatform}`, () => {
    const renderHookResult = renderHook(() => usePlatform(), {
      wrapper: createWrapper(SSRWrapper, props),
    });

    expect(renderHookResult.result.current).toBe(expectPlatform);
  });
});
