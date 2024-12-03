'use client';

import * as React from 'react';
import type { SizeTypeValues, ViewHeightType, ViewWidthType } from '../../lib/adaptivity';

export interface SizeProps {
  sizeX?: SizeTypeValues;
  sizeY?: SizeTypeValues;
}

export interface AdaptivityProps extends SizeProps {
  /**
   * @ignore
   */
  viewWidth?: ViewWidthType;
  /**
   * @ignore
   */
  viewHeight?: ViewHeightType;
  /**
   * @ignore
   */
  hasPointer?: boolean;
  /**
   * @ignore
   */
  hasHover?: boolean;
}

export const AdaptivityContext: React.Context<AdaptivityProps> =
  React.createContext<AdaptivityProps>({});
