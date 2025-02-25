'use client';

import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import { useAutoDetectColorScheme } from '../../hooks/useAutoDetectColorScheme';
import { useAutoDetectDirection } from '../../hooks/useAutoDetectDirection';
import { TokensClassProvider } from '../../lib/tokens';
import { excludeKeysWithUndefined } from '../../lib/utils';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
  useConfigProviderContextMemo,
} from './ConfigProviderContext';

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
export const ConfigProvider = (propsRaw: ConfigProviderProps): React.ReactNode => {
  const props = excludeKeysWithUndefined(propsRaw);
  const parentConfig = useConfigProvider();

  const mergeProps = {
    ...parentConfig,
    ...props,
  };

  const colorScheme = useAutoDetectColorScheme(mergeProps.colorScheme);
  const direction = useAutoDetectDirection(mergeProps.direction);

  const configContext = useConfigProviderContextMemo({
    ...mergeProps,
    colorScheme,
    direction,
  });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <IconAppearanceProvider value={colorScheme}>
        <TokensClassProvider>{mergeProps.children}</TokensClassProvider>
      </IconAppearanceProvider>
    </ConfigProviderContext.Provider>
  );
};
