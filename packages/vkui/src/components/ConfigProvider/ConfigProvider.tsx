import * as React from 'react';
import { generateVKUITokensClassName } from '../../helpers/generateVKUITokensClassName';
import { useAutoDetectAppearance } from '../../hooks/useAutoDetectAppearance';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { useDOM } from '../../lib/dom';
import { TokensClassProvider } from '../../lib/tokensClassProvider';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import {
  addClassNameToElement,
  excludeKeysWithUndefined,
  removeClassNameFromElement,
} from '../../lib/utils';
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

  const { document } = useDOM();

  // TODO [>=6]: переместить хук в AppRoot (см. https://github.com/VKCOM/VKUI/issues/4810).
  useIsomorphicLayoutEffect(
    function attachVKUITokensClassNameToBody() {
      if (!document) {
        return;
      }

      const VKUITokensClassName = generateVKUITokensClassName(platform, appearance);

      addClassNameToElement(document.body, VKUITokensClassName);
      return () => {
        removeClassNameFromElement(document.body, VKUITokensClassName);
      };
    },
    [platform, appearance],
  );

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
