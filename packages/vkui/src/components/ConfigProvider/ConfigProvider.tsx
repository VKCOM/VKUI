import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
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
import { warnOnce } from '../../lib/warnOnce';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
  WebviewType,
} from './ConfigProviderContext';

const warn = warnOnce('ConfigProvider');

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
  /**
   * > ⚠️ В **v6** метод будет удалён (см. https://github.com/VKCOM/VKUI/issues/5049).
   * > Используйте хук `useAppearance()` из библиотеки `@vkontakte/vk-bridge-react`, если вам нужно
   * > определять, что `appearance` был передан через VK Bridge.
   *
   * @deprecated v5.8.0
   */
  onDetectAppearanceByBridge?: () => void; // TODO [>=6]: удалить
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
    webviewType,
    hasCustomPanelHeaderAfter: hasCustomPanelHeaderAfterMerged,
    customPanelHeaderAfterMinWidth,
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

  // TODO [>=6]: Удалить данный бэкпорт
  const hasCustomPanelHeaderAfter =
    props.webviewType && props.hasCustomPanelHeaderAfter === undefined
      ? props.webviewType === WebviewType.VKAPPS
      : hasCustomPanelHeaderAfterMerged;

  if (process.env.NODE_ENV === 'development') {
    // TODO [>=6]: удалить warn
    let webviewTypeRule = '';
    if (props.webviewType) {
      webviewTypeRule =
        props.webviewType === WebviewType.INTERNAL
          ? '3. замените webviewType={WebviewType.INTERNAL} на hasCustomPanelHeaderAfterProp={false}'
          : '3. замените webviewType={WebviewType.VKAPPS} на hasCustomPanelHeaderAfterProp={true}';
    }
    warn(`[@vkontakte/vk-bridge's deprecated] Если вы используете VK Bridge, то:

1. используйте хук useAppearance() из @vkontakte/vk-bridge-react и результат передайте в параметр appearance;
2. передайте bridge.isWebView() в параметр isWebView;
${webviewTypeRule}

Подробности см. https://github.com/VKCOM/VKUI/issues/5049
`);
  }

  // TODO [>=6]: удалить использование хука
  const appearance = useAutoDetectAppearance(appearanceProp, onDetectAppearanceByBridge);

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
    webviewType,
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
