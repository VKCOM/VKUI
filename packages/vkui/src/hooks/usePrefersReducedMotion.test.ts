import { renderHook } from '@testing-library/react-hooks';
import { defineMatchMedia } from '../testing/utils';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

describe('hooks/usePrefersReducedMotion()', () => {
  // default for modern browsers
  it('returns { false } for "(prefers-reduced-motion: no-preference)"', () => {
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toEqual(false);
  });

  it('returns { true } for "(prefers-reduced-motion: reduce)"', () => {
    defineMatchMedia('(prefers-reduced-motion: reduce)');
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toEqual(true);
  });
});
