import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { generateVKUITokensClassName } from '../../helpers/generateVKUITokensClassName';
import { useAutoDetectAppearance } from '../../hooks/useAutoDetectAppearance';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { useDOM } from '../../lib/dom';
import { TokensClassProvider } from '../../lib/tokensClassProvider';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { VKUIGlobalTokensClassNameUsage } from '../../lib/vkuiGlobalTokensClassNameUsage';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
} from './ConfigProviderContext';

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
  onDetectAppearanceByBridge?: () => void;
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
export const ConfigProvider = (props: ConfigProviderProps) => {
  const parentConfig = useConfigProvider();

  const {
    children,
    webviewType,
    isWebView,
    transitionMotionEnabled,
    platform,
    locale,
    appearance: appearanceProp,
    onDetectAppearanceByBridge = noop,
  } = {
    ...parentConfig,
    ...props,
  };

  const appearance = useAutoDetectAppearance(appearanceProp, onDetectAppearanceByBridge);

  const { document, window } = useDOM();

  useIsomorphicLayoutEffect(() => {
    const VKUITokensClassName = generateVKUITokensClassName(platform, appearance);
    const tokensClassNameUsage = new VKUIGlobalTokensClassNameUsage(window, VKUITokensClassName);

    // eslint-disable-next-line no-restricted-properties
    document!.body.classList.add(VKUITokensClassName);
    tokensClassNameUsage.incrementUsageNumber();

    return () => {
      tokensClassNameUsage.decrementUsageNumber();
      if (!tokensClassNameUsage.isInUse()) {
        // eslint-disable-next-line no-restricted-properties
        document!.body.classList.remove(VKUITokensClassName);
      }
    };
  }, [platform, appearance]);

  const configContext = useObjectMemo({
    webviewType,
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
