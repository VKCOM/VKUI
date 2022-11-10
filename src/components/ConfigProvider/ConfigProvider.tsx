import * as React from "react";
import {
  AppearanceProvider,
  generateVKUITokensClassName,
} from "../AppearanceProvider/AppearanceProvider";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
} from "./ConfigProviderContext";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { useAutoDetectAppearance } from "../../hooks/useAutoDetectAppearance";
import { noop } from "../../lib/utils";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useDOM } from "../../lib/dom";

export interface ConfigProviderProps
  extends Partial<ConfigProviderContextInterface> {
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

  const appearance = useAutoDetectAppearance(
    appearanceProp,
    onDetectAppearanceByBridge
  );

  const { document } = useDOM();

  useIsomorphicLayoutEffect(() => {
    const VKUITokensClassName = generateVKUITokensClassName(
      platform,
      appearance
    );

    // eslint-disable-next-line no-restricted-properties
    document!.body.classList.add(VKUITokensClassName);

    return () => {
      // eslint-disable-next-line no-restricted-properties
      document!.body.classList.remove(VKUITokensClassName);
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
      <AppearanceProvider appearance={appearance}>
        {children}
      </AppearanceProvider>
    </ConfigProviderContext.Provider>
  );
};
