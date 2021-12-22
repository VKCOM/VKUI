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
import { AppearanceProviderContext } from "../AppearanceProvider/AppearanceProviderContext";

export interface ConfigProviderProps extends ConfigProviderContextInterface {
  /**
   * @deprecated будет удалено в 5.0.0, устанавливать тему следует через appearance
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
  schemeTarget?: HTMLElement;
}

const warn = warnOnce("ConfigProvider");

function useSchemeDetector(node: HTMLElement, _scheme: Scheme | "inherit") {
  const inherit = _scheme === "inherit";
  const getScheme = () => {
    if (!inherit || !canUseDOM) {
      return undefined;
    }
    return node.getAttribute("scheme") as Scheme;
  };
  const [resolvedScheme, setScheme] = React.useState(getScheme());

  React.useEffect(() => {
    if (!inherit) {
      return noop;
    }
    setScheme(getScheme());
    const observer = new MutationObserver(() => setScheme(getScheme()));
    observer.observe(node, { attributes: true, attributeFilter: ["scheme"] });
    return () => observer.disconnect();
  }, [inherit]);

  return _scheme === "inherit" ? resolvedScheme : _scheme;
}

const deriveAppearance = (scheme: Scheme): AppearanceType =>
  scheme === Scheme.SPACE_GRAY || scheme === Scheme.VKCOM_DARK
    ? "dark"
    : "light";

const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  schemeTarget,
  ...config
}) => {
  const scheme = normalizeScheme({
    scheme: config.scheme,
    platform: config.platform,
    appearance: config.appearance,
  });
  const { document } = useDOM();
  const target = schemeTarget || document?.body;

  useIsomorphicLayoutEffect(() => {
    if (scheme === "inherit") {
      return noop;
    }
    if (
      process.env.NODE_ENV === "development" &&
      target.hasAttribute("scheme")
    ) {
      warn(
        '<body scheme> was set before VKUI mount - did you forget scheme="inherit"?'
      );
    }
    target.setAttribute("scheme", scheme);
    return () => target.removeAttribute("scheme");
  }, [scheme]);

  const realScheme = useSchemeDetector(target, scheme);
  const configContext = useObjectMemo({
    appearance: deriveAppearance(realScheme),
    ...config,
  });
  const appearanceContext = React.useMemo(
    () => ({
      appearance: configContext.appearance,
      scheme: realScheme,
    }),
    [realScheme, configContext, realScheme]
  );

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <AppearanceProviderContext.Provider value={appearanceContext}>
        {children}
      </AppearanceProviderContext.Provider>
    </ConfigProviderContext.Provider>
  );
};

// Деструктуризация нужна из бага в react-docgen-typescript
// https://github.com/styleguidist/react-docgen-typescript/issues/195
ConfigProvider.defaultProps = { ...defaultConfigProviderProps };

export default ConfigProvider;
