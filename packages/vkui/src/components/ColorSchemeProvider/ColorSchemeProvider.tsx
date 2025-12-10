import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { TokensClassProvider } from '../../lib/tokens/TokensClassProvider';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface ColorSchemeProviderProps {
  /**
   * Цветовая схема.
   */
  value: ColorSchemeType;
  /**
   * Содержимое.
   */
  children: React.ReactNode;
}

/**
 * @see https://vkui.io/components/color-scheme-provider
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
