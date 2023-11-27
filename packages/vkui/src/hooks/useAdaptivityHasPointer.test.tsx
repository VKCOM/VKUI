import { renderHook } from '@testing-library/react';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { createWrapper } from '../testing/createWrapper';
import { useAdaptivityHasPointer } from './useAdaptivityHasPointer';

describe(useAdaptivityHasPointer, () => {
  it('returns on client', () => {
    const { result } = renderHook(useAdaptivityHasPointer, {});
    expect(result.current).toEqual(true);
  });

  it('context hasPointer={true}', () => {
    const { result } = renderHook(useAdaptivityHasPointer, {
      wrapper: createWrapper(AdaptivityProvider, { hasPointer: true }),
    });
    expect(result.current).toEqual(true);
  });

  it('context hasPointer={false}', () => {
    const { result } = renderHook(useAdaptivityHasPointer, {
      wrapper: createWrapper(AdaptivityProvider, { hasPointer: false }),
    });
    expect(result.current).toEqual(false);
  });
});
