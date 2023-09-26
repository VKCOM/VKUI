import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { useAdaptivityHasPointer } from './useAdaptivityHasPointer';

describe(useAdaptivityHasPointer, () => {
  it('returns on client', () => {
    const { result } = renderHook(useAdaptivityHasPointer, {});
    expect(result.current).toEqual(true);
  });

  it('context hasPointer={true}', () => {
    const { result } = renderHook(useAdaptivityHasPointer, {
      wrapper: ({ children }) => (
        <AdaptivityProvider hasPointer={true}>{children}</AdaptivityProvider>
      ),
    });
    expect(result.current).toEqual(true);
  });

  it('context hasPointer={false}', () => {
    const { result } = renderHook(useAdaptivityHasPointer, {
      wrapper: ({ children }) => (
        <AdaptivityProvider hasPointer={false}>{children}</AdaptivityProvider>
      ),
    });
    expect(result.current).toEqual(false);
  });
});
