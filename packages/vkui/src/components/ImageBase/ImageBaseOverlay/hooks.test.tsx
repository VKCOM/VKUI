import { renderHook } from '@testing-library/react';
import * as UseAdaptivityService from '../../../hooks/useAdaptivity';
import * as UseIsClientService from '../../../hooks/useIsClient';
import { useCalculatedDefaultVisibility } from './hooks';

vi.mock('../../../hooks/useIsClient', async () => {
  const original = await vi.importActual('../../../hooks/useIsClient');
  return {
    __esModule: true,
    ...original,
  };
});
vi.mock('../../../hooks/useAdaptivity', async () => {
  const original = await vi.importActual('../../../hooks/useAdaptivity');
  return {
    __esModule: true,
    ...original,
  };
});

let hasPointerLibStub: undefined | boolean = false;
vi.mock('@vkontakte/vkjs', async () => {
  const original = await vi.importActual('@vkontakte/vkjs');
  return {
    __esModule: true,
    ...original,
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
      vi.spyOn(UseIsClientService, 'useIsClient').mockReturnValue(isClient);
      vi.spyOn(UseAdaptivityService, 'useAdaptivity').mockReturnValue({
        hasPointer: hasPointerContext,
      });
      hasPointerLibStub = hasPointerLib;

      const hookResult = renderHook(() => useCalculatedDefaultVisibility());
      expect(hookResult.result.current).toBe(expectedVisibility);
    },
  );
});
