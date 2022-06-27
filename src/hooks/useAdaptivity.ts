import * as React from "react";
import {
  AdaptivityContext,
  AdaptivityProps,
  AdaptivityContextInterface,
  ViewWidth,
  ViewHeight,
} from "../components/AdaptivityProvider/AdaptivityContext";
import { usePlatform } from "./usePlatform";
import { VKCOM } from "../lib/platform";

export type { AdaptivityProps };

export const useAdaptivity = (): AdaptivityContextInterface => {
  return React.useContext(AdaptivityContext);
};

export const useAdaptivityIsDesktop = (): boolean => {
  const platform = usePlatform();
  const { viewWidth, viewHeight, hasMouse } = useAdaptivity();

  return (
    (viewWidth >= ViewWidth.SMALL_TABLET &&
      (hasMouse || viewHeight >= ViewHeight.MEDIUM)) ||
    platform === VKCOM
  );
};
