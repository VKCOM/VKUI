'use client';

import * as React from 'react';
import type { ColorSchemeType } from '../../lib/colorScheme';
import type { Direction } from '../../lib/direction';
import { platform, type PlatformType } from '../../lib/platform';
import type { ConfigProviderContextInterface } from './ConfigProviderContext';

export const PlatformContext: React.Context<PlatformType> = React.createContext<PlatformType>(
  platform(),
);

export const ColorSchemeContext: React.Context<ColorSchemeType | undefined> = React.createContext<
  ColorSchemeType | undefined
>(undefined);

export const LocaleContext: React.Context<string> = React.createContext<string>('ru');

export const DirectionContext: React.Context<Direction | undefined> = React.createContext<
  Direction | undefined
>(undefined);

/* eslint-disable jsdoc/require-jsdoc */
export interface ConfigProviderSubContextsProps {
  value: Pick<ConfigProviderContextInterface, 'platform' | 'colorScheme' | 'locale' | 'direction'>;
  children: React.ReactNode;
}
/* eslint-enable jsdoc/require-jsdoc */

export function ConfigProviderSubContexts({
  value,
  children,
}: ConfigProviderSubContextsProps): React.ReactNode {
  return (
    <PlatformContext.Provider value={value.platform}>
      <ColorSchemeContext.Provider value={value.colorScheme}>
        <LocaleContext.Provider value={value.locale}>
          <DirectionContext.Provider value={value.direction}>{children}</DirectionContext.Provider>
        </LocaleContext.Provider>
      </ColorSchemeContext.Provider>
    </PlatformContext.Provider>
  );
}
