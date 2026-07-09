import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ConfigProvider } from '../components/ConfigProvider/ConfigProvider';
import type { HasChildren } from '../types';
import { useLocale } from './useLocale';

describe(useLocale, () => {
  it("returns ConfigProvider's locale", () => {
    const wrapper = ({ children }: HasChildren) => (
      <ConfigProvider locale="en">{children}</ConfigProvider>
    );

    const { result } = renderHook(() => useLocale(), { wrapper });

    expect(result.current).toEqual('en');
  });

  it("handles ConfigProvider's without locale", () => {
    const wrapper = ({ children }: HasChildren) => <ConfigProvider>{children}</ConfigProvider>;

    const { result } = renderHook(() => useLocale(), { wrapper });

    expect(result.current).toEqual('ru');
  });

  it('handles no ConfigProvider', () => {
    const { result } = renderHook(() => useLocale());

    expect(result.current).toEqual('ru');
  });
});
