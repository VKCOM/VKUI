import * as React from "react";
import { hasMouse as _hasMouse } from "@vkontakte/vkjs";
import {
  SizeType,
  ViewWidth,
  ViewHeight,
  Breakpoints,
} from "../../lib/adaptivity";
import {
  useBridgeAdaptivity,
  BridgeAdaptivity,
} from "../../hooks/useBridgeAdaptivity";
import { type AdaptivityProps, AdaptivityContext } from "./AdaptivityContext";

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

    if (viewportWidth >= Breakpoints.DESKTOP) {
      viewWidth = ViewWidth.DESKTOP;
    } else if (viewportWidth >= Breakpoints.TABLET) {
      viewWidth = ViewWidth.TABLET;
    } else if (viewportWidth >= Breakpoints.SMALL_TABLET) {
      viewWidth = ViewWidth.SMALL_TABLET;
    } else if (viewportWidth >= Breakpoints.MOBILE) {
      viewWidth = ViewWidth.MOBILE;
    } else {
      viewWidth = ViewWidth.SMALL_MOBILE;
    }

    if (viewportHeight >= Breakpoints.MEDIUM_HEIGHT) {
      viewHeight = ViewHeight.MEDIUM;
    } else if (viewportHeight > Breakpoints.MOBILE_LANDSCAPE_HEIGHT) {
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
  } else {
    if (sizeX === undefined && viewWidth !== undefined) {
      if (viewWidth <= ViewWidth.MOBILE) {
        sizeX = SizeType.COMPACT;
      } else {
        sizeX = SizeType.REGULAR;
      }
    }
    if (
      sizeY === undefined &&
      viewWidth !== undefined &&
      viewHeight !== undefined
    ) {
      if (
        (viewWidth >= ViewWidth.SMALL_TABLET && _hasMouse) ||
        viewHeight <= ViewHeight.EXTRA_SMALL
      ) {
        sizeY = SizeType.COMPACT;
      } else {
        sizeY = SizeType.REGULAR;
      }
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
