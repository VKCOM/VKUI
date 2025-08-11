'use client';

import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import { useAutoDetectColorScheme } from '../../hooks/useAutoDetectColorScheme';
import { useAutoDetectDirection } from '../../hooks/useAutoDetectDirection';
import { TokensClassProvider } from '../../lib/tokens/TokensClassProvider';
import { excludeKeysWithUndefined } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
  useConfigProviderContextMemo,
} from './ConfigProviderContext';

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
  /**
   * Содержимое.
   */
  children: React.ReactNode;
}

const warn = warnOnce('ConfigProvider');

/**
 * @see https://vkui.io/components/config-provider
 */
export const ConfigProvider = (propsRaw: ConfigProviderProps): React.ReactNode => {
  if (propsRaw.platform === 'android') {
    warn('Платформа "android" будет удалена, используйте "material"');
  }

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
