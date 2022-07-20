import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { canUseDOM, useDOM } from "../../lib/dom";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
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
  children?: React.ReactNode;
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
    appearance = parentConfig.appearance,
    scheme,
    locale = parentLocale ?? "ru",
  } = props;

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
      target?.hasAttribute("scheme") &&
      parentConfig.appearance === undefined // appearance не была вычислена в родительском конфиге, @deprecated будет удалено в 5.0.0
    ) {
      warn(
        '<body scheme> был установлен перед монтированием VKUI - вы не забыли scheme="inherit"?'
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

    // eslint-disable-next-line no-restricted-properties
    target?.classList.add(VKUITokensClassName);

    return () => {
      // eslint-disable-next-line no-restricted-properties
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
