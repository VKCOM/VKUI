import * as React from "react";
import { useDOM } from "../../lib/dom";
import { classNamesString } from "../../lib/classNames";
import { AppRootContext } from "./AppRootContext";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { IconSettingsProvider } from "@vkontakte/icons";
import {
  ElementScrollController,
  GlobalScrollController,
} from "./ScrollContext";
import { noop } from "../../lib/utils";
import { useKeyboardInputTracker } from "../../hooks/useKeyboardInputTracker";
import { useInsets } from "../../hooks/useInsets";
import { Insets } from "@vkontakte/vk-bridge";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useAppearance } from "../../hooks/useAppearance";
import { isRefObject } from "../../lib/isRefObject";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import styles from "./AppRoot.module.css";

// Используйте classList, но будьте осторожны
/* eslint-disable no-restricted-properties */

export interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Режим встраивания */
  mode?: "partial" | "embedded" | "full";
  window?: Window;
  scroll?: "global" | "contain";
  /**
   * Кастомный root-элемент портала
   */
  portalRoot?: HTMLElement | React.RefObject<HTMLElement> | null;
  /** Disable portal for components */
  disablePortal?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/AppRoot
 */
export const AppRoot = ({
  children,
  mode = "full",
  scroll = "global",
  portalRoot: portalRootProp = null,
  disablePortal,
  className,
  ...props
}: AppRootProps) => {
  const isKeyboardInputActive = useKeyboardInputTracker();
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);
  const { document } = useDOM();
  const insets = useInsets();
  const appearance = useAppearance();

  const { hasMouse, sizeX } = useAdaptivity();

  // setup portal
  useIsomorphicLayoutEffect(() => {
    let portal: HTMLElement | null = null;
    if (portalRootProp) {
      if (isRefObject(portalRootProp)) {
        portal = portalRootProp.current;
      } else {
        portal = portalRootProp;
      }
    }
    if (!portal) {
      portal = document!.createElement("div");
      document!.body.appendChild(portal);
    }
    setPortalRoot(portal);
    return () => {
      portal?.parentElement?.removeChild(portal);
    };
  }, [portalRootProp]);

  // setup root classes
  useIsomorphicLayoutEffect(() => {
    if (mode !== "embedded") {
      return noop;
    }

    const parent = rootRef.current?.parentElement;
    parent?.classList.add("vkui__root--embedded");

    return () => {
      parent?.classList.remove("vkui__root--embedded");
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
    if (mode === "partial") {
      return noop;
    }
    const className = getSizeXClassName("vkui", sizeX);
    const container =
      mode === "embedded" ? rootRef.current?.parentElement : document!.body;
    container?.classList.add(className);
    return () => container?.classList.remove(className);
  }, [sizeX]);

  useIsomorphicLayoutEffect(() => {
    if (mode !== "full" || appearance === undefined) {
      return noop;
    }
    document!.documentElement.style.setProperty("color-scheme", appearance);

    return () => document!.documentElement.style.removeProperty("color-scheme");
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
        <IconSettingsProvider classPrefix="vkui">
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
      className={classNamesString(
        styles["AppRoot"],
        !hasMouse && styles["AppRoot--no-mouse"],
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
};
