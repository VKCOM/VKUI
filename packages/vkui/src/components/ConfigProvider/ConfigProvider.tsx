import * as React from 'react';
import { useAutoDetectAppearance } from '../../hooks/useAutoDetectAppearance';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { TokensClassProvider } from '../../lib/tokensClassProvider';
import { excludeKeysWithUndefined } from '../../lib/utils';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
} from './ConfigProviderContext';

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
export const ConfigProvider = (propsRaw: ConfigProviderProps) => {
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
    appearance: appearanceProp,
  } = {
    ...parentConfig,
    ...props,
  };

  const appearance = useAutoDetectAppearance(appearanceProp);

  const configContext = useObjectMemo({
    hasCustomPanelHeaderAfter,
    customPanelHeaderAfterMinWidth,
    isWebView,
    transitionMotionEnabled,
    platform,
    locale,
    appearance,
  });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <TokensClassProvider platform={platform} appearance={appearance}>
        {children}
      </TokensClassProvider>
    </ConfigProviderContext.Provider>
  );
};
