import * as React from 'react';
import { SizeType, ViewHeight, ViewWidth } from '../../lib/adaptivity';

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
  hasPointer?: boolean;
  /**
   * @ignore
   */
  hasHover?: boolean;
}

export const AdaptivityContext = React.createContext<AdaptivityProps>({});
