import * as React from "react";
import vkBridge, {
  AnyReceiveMethodName,
  AppearanceType,
  VKBridgeEvent,
} from "@vkontakte/vk-bridge";
import { useDOM } from "../lib/dom";
import { noop } from "../lib/utils";
import { resolveAppearance, VKBridgeConfigData } from "../helpers/appearance";

let initialAppearance: AppearanceType | null = null;

vkBridge
  .send("VKWebAppGetConfig")
  .then((data) => {
    initialAppearance = resolveAppearance(data);
  })
  .catch(console.error);

function autoDetectAppearanceByBridge(
  setAppearance: (value: AppearanceType) => void,
  onDetectAppearanceByBridge: () => void
) {
  function bridgeListener(e: VKBridgeEvent<AnyReceiveMethodName>) {
    const { type, data } = e.detail;

    if (type !== "VKWebAppUpdateConfig") {
      return;
    }

    initialAppearance = resolveAppearance(data as VKBridgeConfigData);

    if (initialAppearance) {
      onDetectAppearanceByBridge();
      setAppearance(initialAppearance);
    }
  }

  vkBridge.subscribe(bridgeListener);

  return () => vkBridge.unsubscribe(bridgeListener);
}

function autoDetectAppearance(
  window: Window | undefined,
  setAppearance: (value: AppearanceType) => void
): () => void {
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

export const useAutoDetectAppearance = (
  appearanceProp?: AppearanceType,
  onDetectAppearanceByBridge?: () => void
): AppearanceType => {
  const { window } = useDOM();
  const onceDetectAppearanceByBridge = React.useRef(() => {
    onDetectAppearanceByBridge && onDetectAppearanceByBridge();
    onceDetectAppearanceByBridge.current = noop;
  });

  const [appearance, setAppearance] = React.useState<AppearanceType>(() => {
    if (appearanceProp) {
      return appearanceProp;
    }

    if (initialAppearance) {
      onceDetectAppearanceByBridge.current();
      return initialAppearance;
    }

    const mediaQuery =
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)");

    // eslint-disable-next-line no-restricted-properties
    return mediaQuery?.matches ? "dark" : "light";
  });

  React.useEffect(() => {
    if (appearanceProp) {
      setAppearance(appearanceProp);
      return noop;
    }

    if (vkBridge.isEmbedded()) {
      return autoDetectAppearanceByBridge(
        setAppearance,
        onceDetectAppearanceByBridge.current
      );
    }

    return autoDetectAppearance(window, setAppearance);
  }, [window, appearanceProp]);

  return appearance;
};
