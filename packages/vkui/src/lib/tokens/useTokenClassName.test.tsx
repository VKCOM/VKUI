import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { Appearance } from '../appearance';
import { Platform } from '../platform';
import { DEFAULT_TOKENS_CLASS_NAMES } from './constants';
import { useTokensClassName } from './useTokenClassName';

const tests = Object.values(Platform)
  .map((platform) => Object.values(Appearance).map((appearance) => ({ appearance, platform })))
  .flat();

it.each(tests)(
  'should return token class name for "$platform" platform with "$appearance" appearance',
  ({ appearance, platform }) => {
    const { result } = renderHook(() => useTokensClassName(), {
      wrapper({ children }) {
        return (
          <ConfigProvider platform={platform} appearance={appearance}>
            {children}
          </ConfigProvider>
        );
      },
    });
    expect(result.current).toBe(DEFAULT_TOKENS_CLASS_NAMES[platform][appearance]);
  },
);
