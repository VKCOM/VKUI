import { renderHook } from '@testing-library/react';
import * as UseAdaptivityService from '../../../hooks/useAdaptivity';
import * as UseIsClientService from '../../../hooks/useIsClient';
import { useCalculatedDefaultVisibility } from './hooks';

jest.mock('../../../hooks/useIsClient', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../../hooks/useIsClient'),
  };
});
jest.mock('../../../hooks/useAdaptivity', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../../hooks/useAdaptivity'),
  };
});

let hasPointerLibStub: undefined | boolean = false;
jest.mock('@vkontakte/vkjs', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@vkontakte/vkjs'),
    get hasMouse() {
      return hasPointerLibStub;
    },
  };
});

describe(useCalculatedDefaultVisibility, () => {
  it.each([
    { isClient: false, hasPointerContext: undefined, expectedVisibility: 'on-hover' },
    { isClient: false, hasPointerContext: false, expectedVisibility: 'always' },
    { isClient: false, hasPointerContext: true, expectedVisibility: 'on-hover' },
    {
      isClient: true,
      hasPointerContext: undefined,
      hasPointerLib: false,
      expectedVisibility: 'always',
    },
    { isClient: true, hasPointerContext: false, expectedVisibility: 'always' },
    { isClient: true, hasPointerContext: true, expectedVisibility: 'on-hover' },
    {
      isClient: true,
      hasPointerContext: undefined,
      hasPointerLib: true,
      expectedVisibility: 'on-hover',
    },
  ])(
    'returns $expectedVisibility visibility (isClient as $isClient, hasPointerContext as $hasPointerContext, hasPointerLib as $hasPointerLib)',
    ({ expectedVisibility, isClient, hasPointerContext, hasPointerLib }) => {
      jest.spyOn(UseIsClientService, 'useIsClient').mockReturnValue(isClient);
      jest.spyOn(UseAdaptivityService, 'useAdaptivity').mockReturnValue({
        hasPointer: hasPointerContext,
      });
      hasPointerLibStub = hasPointerLib;

      const hookResult = renderHook(() => useCalculatedDefaultVisibility());
      expect(hookResult.result.current).toBe(expectedVisibility);
    },
  );
});
