import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { TokensClassProvider } from '../../lib/tokens';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface ColorSchemeProviderProps {
  value: ColorSchemeType;
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ColorSchemeProvider
 */
export const ColorSchemeProvider = ({
  value,
  children,
}: ColorSchemeProviderProps): React.ReactNode => {
  return (
    <ConfigProviderOverride colorScheme={value}>
      <IconAppearanceProvider value={value}>
        <TokensClassProvider>{children}</TokensClassProvider>
      </IconAppearanceProvider>
    </ConfigProviderOverride>
  );
};
