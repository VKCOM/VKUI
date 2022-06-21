import * as React from "react";
import vkBridge from "@vkontakte/vk-bridge";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from "./ConfigProviderContext";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { AppearanceProvider } from "../AppearanceProvider/AppearanceProvider";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import { platform as resolvePlatform } from "../../lib/platform";
import { useAutoDetectAppearance } from "../../hooks/useAutoDetectAppearance";
import { noop } from "../../lib/utils";

export interface ConfigProviderProps
  extends Partial<ConfigProviderContextInterface> {
  /**
    Локаль ([список](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry))
   */
  locale?: string;
  onDetectAppearanceByBridge?: () => void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
export const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  webviewType = WebviewType.VKAPPS,
  isWebView = vkBridge.isWebView(),
  transitionMotionEnabled = true,
  platform = resolvePlatform(),
  hasNewTokens = false,
  appearance: appearanceProp,
  onDetectAppearanceByBridge = noop,
  locale = "ru",
}) => {
  const appearance = useAutoDetectAppearance(
    appearanceProp,
    onDetectAppearanceByBridge
  );

  const configContext = useObjectMemo({
    webviewType,
    isWebView,
    transitionMotionEnabled,
    hasNewTokens,
    platform,
    appearance,
  });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <LocaleProviderContext.Provider value={locale}>
        <AppearanceProvider appearance={configContext.appearance}>
          {children}
        </AppearanceProvider>
      </LocaleProviderContext.Provider>
    </ConfigProviderContext.Provider>
  );
};
