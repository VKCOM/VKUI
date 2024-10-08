import { renderHook } from '@testing-library/react';
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { ColorScheme } from '../colorScheme';
import { Platform } from '../platform';
import { DEFAULT_TOKENS_CLASS_NAMES } from './constants';
import { useTokensClassName } from './useTokenClassName';

const tests = Object.values(Platform)
  .map((platform) => Object.values(ColorScheme).map((colorScheme) => ({ colorScheme, platform })))
  .flat();

it.each(tests)(
  'should return token class name for "$platform" platform with "$appearance" appearance',
  ({ colorScheme, platform }) => {
    const { result } = renderHook(() => useTokensClassName(), {
      wrapper({ children }) {
        return (
          <ConfigProvider platform={platform} appearance={colorScheme}>
            {children}
          </ConfigProvider>
        );
      },
    });
    expect(result.current).toBe(DEFAULT_TOKENS_CLASS_NAMES[platform][colorScheme]);
  },
);
