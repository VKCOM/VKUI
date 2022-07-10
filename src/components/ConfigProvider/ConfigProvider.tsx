import * as React from "react";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
} from "./ConfigProviderContext";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { AppearanceProvider } from "../AppearanceProvider/AppearanceProvider";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import { useAutoDetectAppearance } from "../../hooks/useAutoDetectAppearance";
import { noop } from "../../lib/utils";

export interface ConfigProviderProps
  extends Partial<ConfigProviderContextInterface> {
  /**
    Локаль ([список](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry))
   */
  locale?: string;
  onDetectAppearanceByBridge?: () => void;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
export const ConfigProvider = (props: ConfigProviderProps) => {
  const parentLocale = React.useContext(LocaleProviderContext);
  const parentConfig = React.useContext(ConfigProviderContext);

  const {
    children,
    webviewType = parentConfig.webviewType,
    isWebView = parentConfig.isWebView,
    transitionMotionEnabled = parentConfig.transitionMotionEnabled,
    platform = parentConfig.platform,
    hasNewTokens = parentConfig.hasNewTokens,
    appearance: appearanceProp = parentConfig.appearance,
    locale = parentLocale ?? "ru",
    onDetectAppearanceByBridge = noop,
  } = props;

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
