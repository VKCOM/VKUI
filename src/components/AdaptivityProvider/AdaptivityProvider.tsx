import * as React from "react";
import { hasMouse as _hasMouse } from "@vkontakte/vkjs";
import {
  AdaptivityContext,
  AdaptivityProps,
  SizeType,
  ViewHeight,
  ViewWidth,
} from "./AdaptivityContext";
import {
  useBridgeAdaptivity,
  BridgeAdaptivity,
} from "../../hooks/useBridgeAdaptivity";

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;
export const MEDIUM_HEIGHT = 720;

/**
 * @see https://vkcom.github.io/VKUI/#/AdaptivityProvider
 */
const AdaptivityProvider = ({
  viewWidth,
  viewHeight,
  sizeX,
  sizeY,
  hasMouse,
  deviceHasHover,
  children,
}: React.PropsWithChildren<AdaptivityProps>) => {
  const bridge = useBridgeAdaptivity();
  const [adaptivity, setAdaptivity] = React.useState({});

  React.useEffect(() => {
    setAdaptivity(
      calculateAdaptivity(
        {
          viewWidth,
          viewHeight,
          sizeX,
          sizeY,
          hasMouse,
          deviceHasHover,
        },
        bridge
      )
    );
  }, [viewWidth, viewHeight, sizeX, sizeY, hasMouse, deviceHasHover, bridge]);

  return (
    <AdaptivityContext.Provider value={adaptivity}>
      {children}
    </AdaptivityContext.Provider>
  );
};

function calculateAdaptivity(
  {
    viewWidth,
    viewHeight,
    sizeX,
    sizeY,
    hasMouse,
    deviceHasHover,
  }: AdaptivityProps,
  bridge: BridgeAdaptivity
) {
  if (bridge.type === "adaptive") {
    const { viewportWidth, viewportHeight } = bridge;

    if (viewportWidth >= DESKTOP_SIZE) {
      viewWidth = ViewWidth.DESKTOP;
    } else if (viewportWidth >= TABLET_SIZE) {
      viewWidth = ViewWidth.TABLET;
    } else if (viewportWidth >= SMALL_TABLET_SIZE) {
      viewWidth = ViewWidth.SMALL_TABLET;
    } else if (viewportWidth >= MOBILE_SIZE) {
      viewWidth = ViewWidth.MOBILE;
    } else {
      viewWidth = ViewWidth.SMALL_MOBILE;
    }

    if (viewportHeight >= MEDIUM_HEIGHT) {
      viewHeight = ViewHeight.MEDIUM;
    } else if (viewportHeight > MOBILE_LANDSCAPE_HEIGHT) {
      viewHeight = ViewHeight.SMALL;
    } else {
      viewHeight = ViewHeight.EXTRA_SMALL;
    }

    if (viewWidth <= ViewWidth.MOBILE) {
      sizeX = SizeType.COMPACT;
    } else {
      sizeX = SizeType.REGULAR;
    }

    if (
      (viewWidth >= ViewWidth.SMALL_TABLET && _hasMouse) ||
      viewHeight <= ViewHeight.EXTRA_SMALL
    ) {
      sizeY = SizeType.COMPACT;
    } else {
      sizeY = SizeType.REGULAR;
    }
  } else if (
    bridge.type === "force_mobile" ||
    bridge.type === "force_mobile_compact"
  ) {
    viewWidth = ViewWidth.MOBILE;
    sizeX = SizeType.COMPACT;

    if (bridge.type === "force_mobile_compact") {
      sizeY = SizeType.COMPACT;
    } else {
      sizeY = SizeType.REGULAR;
    }
  }

  return {
    viewWidth,
    viewHeight,
    sizeX,
    sizeY,
    hasMouse,
    deviceHasHover,
  };
}

export { AdaptivityProvider };
