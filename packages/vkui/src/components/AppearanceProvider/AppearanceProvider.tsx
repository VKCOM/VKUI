import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import type { AppearanceType } from '../../lib/appearance';
import { TokensClassProvider } from '../../lib/tokens';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface AppearanceProviderProps {
  value: AppearanceType;
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/AppearanceProvider
 */
export const AppearanceProvider = ({
  value,
  children,
}: AppearanceProviderProps): React.ReactNode => {
  return (
    <ConfigProviderOverride appearance={value}>
      <IconAppearanceProvider value={value}>
        <TokensClassProvider>{children}</TokensClassProvider>
      </IconAppearanceProvider>
    </ConfigProviderOverride>
  );
};
