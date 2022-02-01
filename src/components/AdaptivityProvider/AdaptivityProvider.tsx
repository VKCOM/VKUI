import * as React from "react";
import { hasMouse as _hasMouse, hasHover as _hasHover } from "@vkontakte/vkjs";
import {
  AdaptivityContext,
  AdaptivityProps,
  SizeType,
  ViewHeight,
  ViewWidth,
} from "./AdaptivityContext";
import { useDOM } from "../../lib/dom";

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;
export const MEDIUM_HEIGHT = 720;

const AdaptivityProvider: React.FC<AdaptivityProps> = (props) => {
  const adaptivityRef = React.useRef<ReturnType<
    typeof calculateAdaptivity
  > | null>(null);
  const [, updateAdaptivity] = React.useState({});

  const { window } = useDOM();

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(
      window ? window.innerWidth : 0,
      window ? window.innerHeight : 0,
      props
    );
  }

  React.useEffect(() => {
    function onResize() {
      if (adaptivityRef.current === null) {
        return;
      }
      const calculated = calculateAdaptivity(
        window!.innerWidth,
        window!.innerHeight,
        props
      );
      const { viewWidth, viewHeight, sizeX, sizeY, hasMouse, deviceHasHover } =
        adaptivityRef.current;

      if (
        viewWidth !== calculated.viewWidth ||
        viewHeight !== calculated.viewHeight ||
        sizeX !== calculated.sizeX ||
        sizeY !== calculated.sizeY ||
        hasMouse !== calculated.hasMouse ||
        deviceHasHover !== calculated.deviceHasHover
      ) {
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    onResize();
    window!.addEventListener("resize", onResize, false);

    return () => {
      window!.removeEventListener("resize", onResize, false);
    };
  }, [
    props.viewWidth,
    props.viewHeight,
    props.sizeX,
    props.sizeY,
    props.hasMouse,
    props.deviceHasHover,
    window,
    props,
  ]);

  return (
    <AdaptivityContext.Provider value={adaptivityRef.current}>
      {props.children}
    </AdaptivityContext.Provider>
  );
};

function calculateAdaptivity(
  windowWidth: number,
  windowHeight: number,
  props: AdaptivityProps
) {
  let viewWidth = ViewWidth.SMALL_MOBILE;
  let viewHeight = ViewHeight.SMALL;
  let sizeY = SizeType.REGULAR;
  let sizeX = SizeType.REGULAR;
  let hasMouse = props.hasMouse ?? _hasMouse;
  let deviceHasHover = props.deviceHasHover ?? _hasHover;

  if (windowWidth >= DESKTOP_SIZE) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (windowWidth >= TABLET_SIZE) {
    viewWidth = ViewWidth.TABLET;
  } else if (windowWidth >= SMALL_TABLET_SIZE) {
    viewWidth = ViewWidth.SMALL_TABLET;
  } else if (windowWidth >= MOBILE_SIZE) {
    viewWidth = ViewWidth.MOBILE;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
  }

  if (windowHeight >= MEDIUM_HEIGHT) {
    viewHeight = ViewHeight.MEDIUM;
  } else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
    viewHeight = ViewHeight.SMALL;
  } else {
    viewHeight = ViewHeight.EXTRA_SMALL;
  }

  props.viewWidth && (viewWidth = props.viewWidth);
  props.viewHeight && (viewHeight = props.viewHeight);

  if (viewWidth <= ViewWidth.MOBILE) {
    sizeX = SizeType.COMPACT;
  }

  if (
    (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse) ||
    viewHeight <= ViewHeight.EXTRA_SMALL
  ) {
    sizeY = SizeType.COMPACT;
  }

  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);

  return { viewWidth, viewHeight, sizeX, sizeY, hasMouse, deviceHasHover };
}

export { AdaptivityProvider };
