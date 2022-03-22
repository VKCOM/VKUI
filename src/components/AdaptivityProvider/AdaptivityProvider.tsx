import * as React from "react";
import { hasHover as _hasHover, hasMouse as _hasMouse } from "@vkontakte/vkjs";
import {
  AdaptivityContext,
  AdaptivityProps,
  SizeType,
  ViewHeight,
  ViewWidth,
} from "./AdaptivityContext";
import { mediaQueryNull } from "../../lib/browser";
import { useDOM } from "../../lib/dom";
import {
  MQ_DESKTOP_ONLY,
  MQ_TABLET_ONLY,
  MQ_SMALL_TABLET_ONLY,
  MQ_MOBILE_ONLY,
  MQ_MEDIUM_HEIGHT,
  MQ_MOBILE_LANDSCAPE_HEIGHT,
} from "./constants";

export {
  DESKTOP_SIZE,
  TABLET_SIZE,
  SMALL_TABLET_SIZE,
  MOBILE_SIZE,
  MOBILE_LANDSCAPE_HEIGHT,
  MEDIUM_HEIGHT,
} from "./constants";

type MediaQuaries = Record<
  | "desktopOnly"
  | "tabletOnly"
  | "smallTabletOnly"
  | "mobileOnly"
  | "mediumHeight"
  | "mobileLandscapeHeight",
  MediaQueryList
>;

const AdaptivityProvider: React.FC<AdaptivityProps> = ({
  viewWidth: viewWidthProp,
  viewHeight: viewHeightProp,
  sizeX: sizeXProp,
  sizeY: sizeYProp,
  hasMouse: hasMouseProp,
  deviceHasHover: deviceHasHoverProp,
  children,
}) => {
  const { window } = useDOM();

  const mqs = React.useMemo(() => {
    const matchMedia = window ? window.matchMedia.bind(window) : mediaQueryNull;
    return {
      desktopOnly: matchMedia(MQ_DESKTOP_ONLY),
      tabletOnly: matchMedia(MQ_TABLET_ONLY),
      smallTabletOnly: matchMedia(MQ_SMALL_TABLET_ONLY),
      mobileOnly: matchMedia(MQ_MOBILE_ONLY),
      mediumHeight: matchMedia(MQ_MEDIUM_HEIGHT),
      mobileLandscapeHeight: matchMedia(MQ_MOBILE_LANDSCAPE_HEIGHT),
    };
  }, [window]);

  const [viewWidthLocal, setViewWidthLocal] = React.useState(
    viewWidthProp ?? getViewWidth(mqs)
  );
  const [viewHeightLocal, setViewHeightLocal] = React.useState(
    viewHeightProp ?? getViewHeight(mqs)
  );

  const adaptivity = React.useMemo(() => {
    const hasMouse = hasMouseProp ?? _hasMouse;
    const deviceHasHover = deviceHasHoverProp ?? _hasHover;
    const viewWidth = viewWidthProp ?? viewWidthLocal;
    const viewHeight = viewHeightProp ?? viewHeightLocal;
    const sizeX = sizeXProp ?? getSizeX(viewWidth);
    const sizeY = sizeYProp ?? getSizeY(viewWidth, viewHeight, hasMouse);

    return {
      viewWidth,
      viewHeight,
      sizeX,
      sizeY,
      hasMouse,
      deviceHasHover,
    };
  }, [
    viewWidthLocal,
    viewHeightLocal,
    viewWidthProp,
    viewHeightProp,
    sizeXProp,
    sizeYProp,
    hasMouseProp,
    deviceHasHoverProp,
  ]);

  React.useEffect(() => {
    if (!viewWidthProp) {
      mqs.desktopOnly.onchange = ({ matches }) =>
        matches ? setViewWidthLocal(ViewWidth.DESKTOP) : void 0;
      mqs.tabletOnly.onchange = ({ matches }) =>
        matches ? setViewWidthLocal(ViewWidth.TABLET) : void 0;
      mqs.smallTabletOnly.onchange = ({ matches }) =>
        matches ? setViewWidthLocal(ViewWidth.SMALL_TABLET) : void 0;
      mqs.mobileOnly.onchange = ({ matches }) =>
        matches
          ? setViewWidthLocal(ViewWidth.MOBILE)
          : setViewWidthLocal(getViewWidth(mqs)); // <- безопасно сбрасываем до значения по умолчанию
    }

    if (!viewHeightProp) {
      mqs.mediumHeight.onchange = ({ matches }) =>
        matches
          ? setViewHeightLocal(ViewHeight.MEDIUM)
          : setViewHeightLocal(getViewHeight(mqs)); // <- безопасно сбрасываем до значения по умолчанию
      mqs.mobileLandscapeHeight.onchange = ({ matches }) =>
        matches
          ? setViewHeightLocal(ViewHeight.SMALL)
          : setViewHeightLocal(getViewHeight(mqs)); // <- безопасно сбрасываем до значения по умолчанию
    }

    return () => {
      mqs.desktopOnly.onchange = null;
      mqs.tabletOnly.onchange = null;
      mqs.smallTabletOnly.onchange = null;
      mqs.mobileOnly.onchange = null;
      mqs.mediumHeight.onchange = null;
      mqs.mobileLandscapeHeight.onchange = null;
    };
  }, [mqs, viewWidthProp, viewHeightProp]);
  return (
    <AdaptivityContext.Provider value={adaptivity}>
      {children}
    </AdaptivityContext.Provider>
  );
};

export { AdaptivityProvider };

/* eslint-disable no-restricted-properties */
function getViewWidth(mqs: MediaQuaries) {
  if (mqs.desktopOnly.matches) {
    return ViewWidth.DESKTOP;
  }
  if (mqs.tabletOnly.matches) {
    return ViewWidth.TABLET;
  }
  if (mqs.smallTabletOnly.matches) {
    return ViewWidth.SMALL_TABLET;
  }
  if (mqs.mobileOnly.matches) {
    return ViewWidth.MOBILE;
  }
  return ViewWidth.SMALL_MOBILE;
}

function getViewHeight(mqs: MediaQuaries) {
  if (mqs.mediumHeight.matches) {
    return ViewHeight.MEDIUM;
  }
  if (mqs.mobileLandscapeHeight.matches) {
    return ViewHeight.SMALL;
  }
  return ViewHeight.EXTRA_SMALL;
}
/* eslint-enable no-restricted-properties */

function getSizeX(viewWidth: ViewWidth) {
  return viewWidth <= ViewWidth.MOBILE ? SizeType.COMPACT : SizeType.REGULAR;
}

function getSizeY(
  viewWidth: ViewWidth,
  viewHeight: ViewHeight,
  hasMouse: boolean
) {
  if (
    (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse) ||
    viewHeight <= ViewHeight.EXTRA_SMALL
  ) {
    return SizeType.COMPACT;
  }
  return SizeType.REGULAR;
}
