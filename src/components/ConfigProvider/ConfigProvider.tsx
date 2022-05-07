import * as React from "react";
import vkBridge, {
  AnyReceiveMethodName,
  AppearanceType,
  VKBridgeEvent,
} from "@vkontakte/vk-bridge";
import { useDOM } from "../../lib/dom";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from "./ConfigProviderContext";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { noop } from "../../lib/utils";
import { AppearanceProvider } from "../AppearanceProvider/AppearanceProvider";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import { platform as resolvePlatform } from "../../lib/platform";
import {
  resolveAppearance,
  VKBridgeConfigData,
} from "../../helpers/appearance";
import { useAppearance } from "../../hooks/useAppearance";

function autoAppearanceBridge(setAppearance: (value: AppearanceType) => void) {
  vkBridge
    .send("VKWebAppGetConfig")
    .then((data) => {
      const newBridgeAppearance = resolveAppearance(data as VKBridgeConfigData);

      if (newBridgeAppearance) {
        setAppearance(newBridgeAppearance);
      }
    })
    .catch(noop)
    .finally(noop);

  function bridgeListener(e: VKBridgeEvent<AnyReceiveMethodName>) {
    const { type, data } = e.detail;

    if (type !== "VKWebAppUpdateConfig") {
      return;
    }

    const newBridgeAppearance = resolveAppearance(data as VKBridgeConfigData);

    if (newBridgeAppearance) {
      setAppearance(newBridgeAppearance);
    }
  }

  vkBridge.subscribe(bridgeListener);

  return () => vkBridge.unsubscribe(bridgeListener);
}

function autoAppearance(
  window: Window | undefined,
  setAppearance: (value: AppearanceType) => void
): () => void {
  if (vkBridge.isEmbedded()) {
    return autoAppearanceBridge(setAppearance);
  }

  const mediaQuery =
    window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)");

  if (mediaQuery === undefined) {
    return noop;
  }

  const check = (event: MediaQueryList | MediaQueryListEvent) => {
    // eslint-disable-next-line no-restricted-properties
    setAppearance(event.matches ? "dark" : "light");
  };

  check(mediaQuery);
  mediaQuery.addEventListener("change", check);

  return () => mediaQuery.removeEventListener("change", check);
}

export interface ConfigProviderProps
  extends Partial<ConfigProviderContextInterface> {
  /**
    Локаль ([список](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry))
   */
  locale?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  webviewType = WebviewType.VKAPPS,
  isWebView = vkBridge.isWebView(),
  transitionMotionEnabled = true,
  platform = resolvePlatform(),
  hasNewTokens = false,
  appearance: _appearance,
  locale = "ru",
}) => {
  const contextAppearance = useAppearance();

  const [appearance, setAppearance] = React.useState<AppearanceType>(() => {
    if (_appearance) {
      return _appearance;
    }

    return "light";
  });

  const { window } = useDOM();

  React.useEffect(() => {
    if (_appearance) {
      setAppearance(_appearance);
      return noop;
    }

    return autoAppearance(window, setAppearance);
  }, [window, _appearance, contextAppearance]);

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

// eslint-disable-next-line import/no-default-export
export default ConfigProvider;
