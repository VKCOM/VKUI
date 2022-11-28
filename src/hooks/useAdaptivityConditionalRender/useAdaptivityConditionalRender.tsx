import * as React from "react";
import { AdaptivityContext } from "../../components/AdaptivityProvider/AdaptivityContext";
import { usePlatform } from "../usePlatform";
import type { UseAdaptivityConditionalRender } from "./types";
import {
  sizeXCompactClassNames,
  sizeXRegularClassNames,
  sizeYCompactClassNames,
  sizeYRegularClassNames,
  viewWidthClassNames,
  deviceTypeClassNames,
} from "./constants";
import {
  getAdaptiveSizeType,
  getAdaptiveViewWidth,
  getAdaptiveDeviceType,
} from "./helpers";

export const useAdaptivityConditionalRender =
  (): UseAdaptivityConditionalRender => {
    const {
      sizeX: sizeXContext,
      sizeY: sizeYContext,
      viewWidth: viewWidthContext,
      viewHeight: viewHeightContext,
      hasMouse: hasMouseContext,
    } = React.useContext(AdaptivityContext);
    const platform = usePlatform();

    return React.useMemo(() => {
      const sizeX = getAdaptiveSizeType(
        sizeXContext,
        sizeXCompactClassNames,
        sizeXRegularClassNames
      );
      const sizeY = getAdaptiveSizeType(
        sizeYContext,
        sizeYCompactClassNames,
        sizeYRegularClassNames
      );
      const viewWidth = getAdaptiveViewWidth(
        viewWidthContext,
        viewWidthClassNames
      );
      const deviceType = getAdaptiveDeviceType(
        viewWidthContext,
        viewHeightContext,
        hasMouseContext,
        platform,
        deviceTypeClassNames
      );
      return {
        sizeX,
        sizeY,
        viewWidth,
        deviceType,
      };
    }, [
      sizeXContext,
      sizeYContext,
      viewWidthContext,
      viewHeightContext,
      hasMouseContext,
      platform,
    ]);
  };
