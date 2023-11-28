import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import type { AppearanceType } from '../../lib/appearance';
import { TokensClassProvider } from '../../lib/tokensClassProvider';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface AppearanceProviderProps {
  value: AppearanceType;
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/AppearanceProvider
 */
export const AppearanceProvider = ({ value, children }: AppearanceProviderProps) => {
  const platform = usePlatform();

  return (
    <ConfigProviderOverride appearance={value}>
      <TokensClassProvider platform={platform} appearance={value}>
        {children}
      </TokensClassProvider>
    </ConfigProviderOverride>
  );
};
