import * as React from "react";
import { useDOM } from "../../lib/dom";
import { classNames } from "../../lib/classNames";
import { AppRootContext } from "./AppRootContext";
import {
  withAdaptivity,
  SizeType,
  AdaptivityProps,
} from "../../hoc/withAdaptivity";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { classScopingMode } from "../../lib/classScopingMode";
import { IconSettingsProvider } from "@vkontakte/icons";
import {
  elementScrollController,
  globalScrollController,
  ScrollContext,
  ScrollContextInterface,
} from "./ScrollContext";
import { noop } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import { useKeyboardInputTracker } from "../../hooks/useKeyboardInputTracker";
import { useInsets } from "../../hooks/useInsets";
import { AppearanceProviderContext } from "../AppearanceProvider/AppearanceProviderContext";
import { Insets } from "@vkontakte/vk-bridge";
import "./AppRoot.css";

// Используйте classList, но будьте осторожны
/* eslint-disable no-restricted-properties */

export interface AppRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<AdaptivityProps, "sizeX" | "hasMouse"> {
  /** @deprecated Use mode="embedded" */
  embedded?: boolean;
  /** Режим встраивания */
  mode?: "partial" | "embedded" | "full";
  window?: Window;
  /** Убирает классы без префикса (.Button) */
  noLegacyClasses?: boolean;
  scroll?: "global" | "contain";
}

const warn = warnOnce("AppRoot");
export const AppRoot: React.FC<AppRootProps> = withAdaptivity(
  ({
    children,
    mode: _mode,
    embedded: _embedded,
    sizeX,
    hasMouse,
    noLegacyClasses = false,
    scroll = "global",
    ...props
  }: AppRootProps) => {
    // normalize mode
    const mode = _mode || (_embedded ? "embedded" : "full");
    const isKeyboardInputActive = useKeyboardInputTracker();
    const rootRef = React.useRef<HTMLDivElement>();
    const [portalRoot, setPortalRoot] = React.useState<HTMLDivElement>(null);
    const { window, document } = useDOM();
    const insets = useInsets();
    const appearanceContext = React.useContext(AppearanceProviderContext);

    const initialized = React.useRef(false);
    if (!initialized.current) {
      if (window && mode === "full") {
        document.documentElement.classList.add("vkui");
      }
      classScopingMode.noConflict = noLegacyClasses;
      initialized.current = true;
    }

    if (process.env.NODE_ENV === "development") {
      if (scroll !== "global" && mode !== "embedded") {
        warn("Свойство scroll поддерживается только в embedded-режиме");
      }
      if (_mode && _embedded) {
        warn(`Свойство mode="${mode}" переопределяет свойство embedded`);
      }
      if (_embedded) {
        warn(
          'Свойство embedded устарело и будет удалено в 5.0.0. Используйте mode="embedded".'
        );
      }
    }

    // setup portal
    useIsomorphicLayoutEffect(() => {
      const portal = document.createElement("div");
      portal.classList.add("vkui__portal-root");
      document.body.appendChild(portal);
      setPortalRoot(portal);
      return () => {
        portal.parentElement.removeChild(portal);
      };
    }, []);

    // setup root classes
    useIsomorphicLayoutEffect(() => {
      if (mode === "partial") {
        return noop;
      }

      const parent = rootRef.current.parentElement;
      const classes = ["vkui__root"].concat(
        mode === "embedded" ? "vkui__root--embedded" : []
      );
      parent.classList.add(...classes);

      return () => {
        parent.classList.remove(...classes);
        if (mode === "full") {
          document.documentElement.classList.remove("vkui");
        }
      };
    }, []);

    // setup insets
    useIsomorphicLayoutEffect(() => {
      if (mode === "partial") {
        return noop;
      }

      const parent = rootRef.current.parentElement;

      for (const key in insets) {
        if (
          insets.hasOwnProperty(key) &&
          typeof insets[key as keyof Insets] === "number"
        ) {
          const inset = insets[key as keyof Insets];
          parent.style.setProperty(`--safe-area-inset-${key}`, `${inset}px`);
          portalRoot &&
            portalRoot.style.setProperty(
              `--safe-area-inset-${key}`,
              `${inset}px`
            );
        }
      }

      return () => {
        for (const key in insets) {
          if (insets.hasOwnProperty(key)) {
            parent.style.removeProperty(`--safe-area-inset-${key}`);
            portalRoot &&
              portalRoot.style.removeProperty(`--safe-area-inset-${key}`);
          }
        }
      };
    }, [insets, portalRoot]);

    // adaptivity handler
    useIsomorphicLayoutEffect(() => {
      if (mode === "partial" || sizeX !== SizeType.REGULAR) {
        return noop;
      }
      const container =
        mode === "embedded" ? rootRef.current.parentElement : document.body;
      container.classList.add("vkui--sizeX-regular");
      return () => container.classList.remove("vkui--sizeX-regular");
    }, [sizeX]);

    const scrollController = React.useMemo<ScrollContextInterface>(
      () =>
        scroll === "contain"
          ? elementScrollController(rootRef)
          : globalScrollController(window, document),
      [scroll]
    );

    useIsomorphicLayoutEffect(() => {
      portalRoot?.setAttribute("scheme", appearanceContext?.scheme);
    }, [appearanceContext?.scheme, portalRoot]);

    const content = (
      <AppRootContext.Provider
        value={{
          appRoot: rootRef,
          portalRoot: portalRoot,
          embedded: mode === "embedded",
          keyboardInput: isKeyboardInputActive,
          mode,
        }}
      >
        <ScrollContext.Provider value={scrollController}>
          <IconSettingsProvider
            classPrefix="vkui"
            globalClasses={!noLegacyClasses}
          >
            {children}
          </IconSettingsProvider>
        </ScrollContext.Provider>
      </AppRootContext.Provider>
    );

    return mode === "partial" ? (
      content
    ) : (
      <div
        ref={rootRef}
        vkuiClass={classNames("AppRoot", {
          "AppRoot--no-mouse": !hasMouse,
        })}
        {...props}
      >
        {content}
      </div>
    );
  },
  {
    sizeX: true,
    hasMouse: true,
  }
);

export default AppRoot;
