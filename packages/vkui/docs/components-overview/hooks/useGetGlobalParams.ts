import { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { type ColorSchemeType, type PlatformType } from '../../../src';
import { type Direction } from '../../../src/lib/direction';

type DocsContextType = {
  store?: {
    userGlobals?: {
      globals?: {
        colorScheme?: ColorSchemeType;
        platform?: PlatformType;
        direction?: Direction;
        hasCustomPanelHeaderAfter?: boolean;
        hasPointer?: boolean;
      };
    };
  };
};

export const useGetGlobalParams = () => {
  const context = useContext(DocsContext) as DocsContextType;
  const globals = context?.store?.userGlobals?.globals;
  if (globals) {
    const {
      colorScheme = 'light',
      platform = 'vkcom',
      direction = 'ltr',
      hasCustomPanelHeaderAfter = false,
      hasPointer = false,
    } = globals;
    return {
      colorScheme,
      platform,
      direction,
      hasCustomPanelHeaderAfter,
      hasPointer,
    };
  }
  return {
    colorScheme: 'light' as const,
    platform: 'vkcom' as const,
    direction: 'ltr' as const,
    hasCustomPanelHeaderAfter: false,
    hasPointer: false,
  };
};
