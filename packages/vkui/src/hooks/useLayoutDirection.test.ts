import { act, renderHook, waitFor } from '@testing-library/react';
import { useLayoutDirection } from './useLayoutDirection';

describe('useLayoutDirection', () => {
  const originalDir = document.documentElement.dir;

  afterEach(() => {
    document.documentElement.dir = originalDir;
  });

  it('returns default "ltr" direction', () => {
    document.documentElement.dir = '';
    const { result } = renderHook(() => useLayoutDirection());
    expect(result.current).toBe('ltr');
  });

  it('returns initial "rtl" direction', () => {
    document.documentElement.dir = 'rtl';
    const { result } = renderHook(() => useLayoutDirection());
    expect(result.current).toBe('rtl');
  });

  it('updates direction when dir attribute changes', async () => {
    document.documentElement.dir = 'ltr';
    const { result } = renderHook(() => useLayoutDirection());
    expect(result.current).toBe('ltr');

    act(() => {
      document.documentElement.dir = 'rtl';
    });
    await waitFor(() => {
      expect(result.current).toBe('rtl');
    });

    act(() => {
      document.documentElement.dir = 'ltr';
    });
    await waitFor(() => {
      expect(result.current).toBe('ltr');
    });
  });

  it('defaults to "ltr" for invalid dir values', () => {
    document.documentElement.dir = 'invalid' as any;
    const { result } = renderHook(() => useLayoutDirection());
    expect(result.current).toBe('ltr');
  });
});
