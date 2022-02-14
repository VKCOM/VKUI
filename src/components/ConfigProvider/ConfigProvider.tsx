import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { canUseDOM, useDOM } from "../../lib/dom";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  defaultConfigProviderProps,
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

export interface ConfigProviderProps
  extends Partial<ConfigProviderContextInterface> {
  /**
   * @deprecated будет удалено в 5.0.0, устанавливать тему следует через appearance
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
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
  ...props
}) => {
  const config = { ...defaultConfigProviderProps, ...props };
  const { platform, appearance } = config;
  const scheme = normalizeScheme({
    scheme: config.scheme,
    platform: platform,
    appearance: appearance,
  });
  const { document } = useDOM();
  const target = document?.body;

  useIsomorphicLayoutEffect(() => {
    if (scheme === "inherit") {
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
    target?.setAttribute("scheme", scheme);
    return () => target?.removeAttribute("scheme");
  }, [scheme]);

  const realScheme = useSchemeDetector(target, scheme);
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
    appearance: derivedAppearance,
    ...config,
  });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <AppearanceProvider appearance={configContext.appearance}>
        {children}
      </AppearanceProvider>
    </ConfigProviderContext.Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default ConfigProvider;
