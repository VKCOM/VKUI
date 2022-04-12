import * as React from "react";
import vkBridge, { AppearanceType } from "@vkontakte/vk-bridge";
import { canUseDOM, useDOM } from "../../lib/dom";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from "./ConfigProviderContext";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { noop } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import {
  normalizeScheme,
  AppearanceScheme,
  Scheme,
} from "../../helpers/scheme";
import {
  AppearanceProvider,
  generateVKUITokensClassName,
} from "../AppearanceProvider/AppearanceProvider";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import { platform as resolvePlatform } from "../../lib/platform";

export interface ConfigProviderProps
  extends Partial<ConfigProviderContextInterface> {
  /**
   * @deprecated будет удалено в 5.0.0, устанавливать тему следует через appearance
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
  /**
    Локаль ([список](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry))
   */
  locale?: string;
}

const warn = warnOnce("ConfigProvider");

function useSchemeDetector(
  node: HTMLElement | undefined | null,
  _scheme: Scheme | "inherit"
) {
  const inherit = _scheme === "inherit";
  const getScheme = React.useCallback(() => {
    if (!inherit || !canUseDOM || !node) {
      return undefined;
    }
    return node.getAttribute("scheme") as Scheme;
  }, [inherit, node]);
  const [resolvedScheme, setScheme] = React.useState(getScheme());

  React.useEffect(() => {
    if (!inherit || !node) {
      return noop;
    }
    setScheme(getScheme());
    const observer = new MutationObserver(() => setScheme(getScheme()));
    observer.observe(node, { attributes: true, attributeFilter: ["scheme"] });
    return () => observer.disconnect();
  }, [getScheme, inherit, node]);

  return _scheme === "inherit" ? resolvedScheme : _scheme;
}

const deriveAppearance = (scheme: Scheme | undefined): AppearanceType =>
  scheme === Scheme.SPACE_GRAY || scheme === Scheme.VKCOM_DARK
    ? "dark"
    : "light";

const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  webviewType = WebviewType.VKAPPS,
  isWebView = vkBridge.isWebView(),
  transitionMotionEnabled = true,
  platform = resolvePlatform(),
  hasNewTokens = false,
  appearance,
  scheme,
  locale = "ru",
}) => {
  const normalizedScheme = normalizeScheme({
    scheme,
    platform,
    appearance,
  });
  const { document } = useDOM();
  const target = document?.body;

  useIsomorphicLayoutEffect(() => {
    if (normalizedScheme === "inherit") {
      return noop;
    }
    if (
      process.env.NODE_ENV === "development" &&
      target?.hasAttribute("scheme")
    ) {
      warn(
        '<body scheme> was set before VKUI mount - did you forget scheme="inherit"?'
      );
    }
    target?.setAttribute("scheme", normalizedScheme);
    return () => target?.removeAttribute("scheme");
  }, [normalizedScheme]);

  const realScheme = useSchemeDetector(target, normalizedScheme);
  const derivedAppearance = deriveAppearance(realScheme);

  useIsomorphicLayoutEffect(() => {
    const VKUITokensClassName = generateVKUITokensClassName(
      platform,
      derivedAppearance
    );

    target?.classList.add(VKUITokensClassName);

    return () => {
      target?.classList.remove(VKUITokensClassName);
    };
  }, [platform, derivedAppearance]);

  const configContext = useObjectMemo({
    webviewType,
    isWebView,
    transitionMotionEnabled,
    hasNewTokens,
    platform,
    scheme,
    appearance: appearance || derivedAppearance,
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
