'use client';

// TODO [@vkontakte/icons-sprite>=2.3.1]: Удалить use client, если он появился в IconAppearanceProvider

import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { TokensClassProvider } from '../../lib/tokens/TokensClassProvider';
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
