'use client';

import * as React from 'react';
import { IconAppearanceProvider } from '@vkontakte/icons';
import { useAutoDetectColorScheme } from '../../hooks/useAutoDetectColorScheme';
import { TokensClassProvider } from '../../lib/tokens';
import { excludeKeysWithUndefined } from '../../lib/utils';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
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

  const {
    children,
    hasCustomPanelHeaderAfter,
    customPanelHeaderAfterMinWidth,
    isWebView,
    transitionMotionEnabled,
    platform,
    locale,
    colorScheme: colorSchemeProp,
    tokensClassNames,
  } = {
    ...parentConfig,
    ...props,
  };

  const colorScheme = useAutoDetectColorScheme(colorSchemeProp);

  const configContext = React.useMemo(
    () => ({
      hasCustomPanelHeaderAfter,
      customPanelHeaderAfterMinWidth,
      isWebView,
      transitionMotionEnabled,
      platform,
      locale,
      tokensClassNames,
      colorScheme,
    }),
    [
      colorScheme,
      customPanelHeaderAfterMinWidth,
      hasCustomPanelHeaderAfter,
      isWebView,
      locale,
      platform,
      tokensClassNames,
      transitionMotionEnabled,
    ],
  );

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <IconAppearanceProvider value={colorScheme}>
        <TokensClassProvider>{children}</TokensClassProvider>
      </IconAppearanceProvider>
    </ConfigProviderContext.Provider>
  );
};
