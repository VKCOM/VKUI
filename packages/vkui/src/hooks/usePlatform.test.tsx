import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { ConfigProvider } from '../components/ConfigProvider/ConfigProvider';
import { HasChildren } from '../types';
import { usePlatform } from './usePlatform';

describe(usePlatform, () => {
  it("returns ConfigProvider's platform", () => {
    const wrapper = ({ children }: HasChildren) => (
      <ConfigProvider platform="ios">{children}</ConfigProvider>
    );

    const { result } = renderHook(() => usePlatform(), { wrapper });

    expect(result.current).toEqual('ios');
  });

  it("handles ConfigProvider's without platform", () => {
    const wrapper = ({ children }: HasChildren) => <ConfigProvider>{children}</ConfigProvider>;

    const { result } = renderHook(() => usePlatform(), { wrapper });

    expect(result.current).toEqual('android');
  });

  it("handles ConfigProvider's no platform", () => {
    const wrapper = ({ children }: HasChildren) => <ConfigProvider>{children}</ConfigProvider>;

    const { result } = renderHook(() => usePlatform(), { wrapper });

    expect(result.current).toEqual('android');
  });

  it('handles no ConfigProvider', () => {
    const { result } = renderHook(() => usePlatform());

    expect(result.current).toEqual('android');
  });
});
