import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import type { AppearanceType } from '../../lib/appearance';
import { TokensClassProvider } from '../../lib/tokensClassProvider';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface AppearanceProviderProps {
  appearance: AppearanceType;
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/AppearanceProvider
 */
export const AppearanceProvider = ({ appearance, children }: AppearanceProviderProps) => {
  const platform = usePlatform();

  return (
    <ConfigProviderOverride appearance={appearance}>
      <TokensClassProvider platform={platform} appearance={appearance}>
        {children}
      </TokensClassProvider>
    </ConfigProviderOverride>
  );
};
