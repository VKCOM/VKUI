import * as React from "react";
import { SizeType, ViewWidth, ViewHeight } from "../../lib/adaptivity";

export interface SizeProps {
  sizeX?: SizeType;
  sizeY?: SizeType;
}

export interface AdaptivityProps extends SizeProps {
  /**
   * @ignore
   */
  viewWidth?: ViewWidth;
  /**
   * @ignore
   */
  viewHeight?: ViewHeight;
  /**
   * @ignore
   */
  hasMouse?: boolean;
  /**
   * @ignore
   */
  deviceHasHover?: boolean;
}

export const AdaptivityContext = React.createContext<AdaptivityProps>({});
