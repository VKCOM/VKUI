import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { useAdaptivityHasHover } from './useAdaptivityHasHover';

describe(useAdaptivityHasHover, () => {
  it('returns on client', () => {
    const { result } = renderHook(useAdaptivityHasHover, {});
    expect(result.current).toEqual(true);
  });

  it('context hasHover={true}', () => {
    const { result } = renderHook(useAdaptivityHasHover, {
      wrapper: ({ children }) => (
        <AdaptivityProvider hasHover={true}>{children}</AdaptivityProvider>
      ),
    });
    expect(result.current).toEqual(true);
  });

  it('context hasHover={false}', () => {
    const { result } = renderHook(useAdaptivityHasHover, {
      wrapper: ({ children }) => (
        <AdaptivityProvider hasHover={false}>{children}</AdaptivityProvider>
      ),
    });
    expect(result.current).toEqual(false);
  });
});
