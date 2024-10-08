import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { TokensClassProvider } from '../../lib/tokens';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface AppearanceProviderProps {
  value: ColorSchemeType;
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
