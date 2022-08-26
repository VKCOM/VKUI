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
  ElementScrollController,
  GlobalScrollController,
} from "./ScrollContext";
import { noop } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import { useKeyboardInputTracker } from "../../hooks/useKeyboardInputTracker";
import { useInsets } from "../../hooks/useInsets";
import { Insets } from "@vkontakte/vk-bridge";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";
import { isRefObject } from "../../lib/isRefObject";
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
  /** Элемент используемый в качестве root для порталов
   * При передаче своего элемента необходимо задать ему class="vkui__portal-root" и добавить в DOM
   */
  // TODO: v5.0.0 изменить тип на HTMLElement
  portalRoot?: HTMLDivElement | React.RefObject<HTMLDivElement> | null;
  /** Disable portal for components */
  disablePortal?: boolean;
}

const warn = warnOnce("AppRoot");

/**
 * @see https://vkcom.github.io/VKUI/#/AppRoot
 */
export const AppRoot = withAdaptivity<AppRootProps>(
  ({
    children,
    mode: _mode,
    embedded: _embedded,
    sizeX,
    hasMouse,
    noLegacyClasses = false,
    scroll = "global",
    portalRoot: portalRootProp = null,
    disablePortal,
    ...props
  }) => {
    // normalize mode
    const mode = _mode || (_embedded ? "embedded" : "full");
    const isKeyboardInputActive = useKeyboardInputTracker();
    const rootRef = React.useRef<HTMLDivElement | null>(null);
    const [portalRoot, setPortalRoot] = React.useState<HTMLDivElement | null>(
      null
    );
    const { document } = useDOM();
    const insets = useInsets();
    const { appearance } = React.useContext(ConfigProviderContext);

    classScopingMode.noConflict = noLegacyClasses;

    if (process.env.NODE_ENV === "development") {
      if (scroll !== "global" && mode !== "embedded") {
        warn(
          `Свойство scroll="${scroll}" поддерживается только в режиме embedded`,
          "error"
        );
      }
      if (_mode && _embedded) {
        warn(`Свойство mode="${mode}" приоритетнее, чем "embedded"`);
      }
    }

    // setup portal
    useIsomorphicLayoutEffect(() => {
      let portal: HTMLDivElement | null = null;
      if (portalRootProp) {
        if (isRefObject(portalRootProp)) {
          portal = portalRootProp.current;
        } else {
          portal = portalRootProp;
        }
      }
      if (!portal) {
        portal = document!.createElement("div");
        portal.classList.add("vkui__portal-root");
        document!.body.appendChild(portal);
      }
      setPortalRoot(portal);
      return () => {
        portal?.parentElement?.removeChild(portal);
      };
    }, [portalRootProp]);

    // setup root classes
    useIsomorphicLayoutEffect(() => {
      if (mode === "partial") {
        return noop;
      }

      const parent = rootRef.current?.parentElement;
      const classes = ["vkui__root"].concat(
        mode === "embedded" ? "vkui__root--embedded" : []
      );
      parent?.classList.add(...classes);

      return () => {
        parent?.classList.remove(...classes);
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      if (mode === "full") {
        document!.documentElement.classList.add("vkui");

        return () => {
          document!.documentElement.classList.remove("vkui");
        };
      }

      return undefined;
    }, [document, mode]);

    // setup insets
    useIsomorphicLayoutEffect(() => {
      if (mode === "partial" || !rootRef.current?.parentElement) {
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
        mode === "embedded" ? rootRef.current?.parentElement : document!.body;
      container?.classList.add("vkui--sizeX-regular");
      return () => container?.classList.remove("vkui--sizeX-regular");
    }, [sizeX]);

    useIsomorphicLayoutEffect(() => {
      if (mode !== "full" || appearance === undefined) {
        return noop;
      }
      document!.documentElement.style.setProperty("color-scheme", appearance);

      return () =>
        document!.documentElement.style.removeProperty("color-scheme");
    }, [appearance]);

    const ScrollController = React.useMemo(
      () =>
        scroll === "contain" ? ElementScrollController : GlobalScrollController,
      [scroll]
    );

    const content = (
      <AppRootContext.Provider
        value={{
          appRoot: rootRef,
          portalRoot,
          embedded: mode === "embedded",
          keyboardInput: isKeyboardInputActive,
          mode,
          disablePortal,
        }}
      >
        <ScrollController elRef={rootRef}>
          <IconSettingsProvider
            classPrefix="vkui"
            globalClasses={!noLegacyClasses}
          >
            {children}
          </IconSettingsProvider>
        </ScrollController>
      </AppRootContext.Provider>
    );

    return mode === "partial" ? (
      content
    ) : (
      <div
        ref={rootRef}
        vkuiClass={classNames("AppRoot", !hasMouse && "AppRoot--no-mouse")}
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

AppRoot.displayName = "AppRoot";
