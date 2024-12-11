import { renderHook } from '@testing-library/react';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { PlatformProvider } from './PlatformProvider';

describe('PlatformProvider', () => {
  it('override config context', () => {
    const { result } = renderHook(useConfigProvider, {
      wrapper: ({ children }) => (
        <ConfigProvider platform="android">
          <PlatformProvider value="ios">{children}</PlatformProvider>
        </ConfigProvider>
      ),
    });

    expect(result.current).toEqual(expect.objectContaining({ platform: 'ios' }));
  });
});
