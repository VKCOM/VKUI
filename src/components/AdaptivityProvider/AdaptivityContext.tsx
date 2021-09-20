import * as React from 'react';

export enum SizeType {
  COMPACT = 'compact',
  REGULAR = 'regular',
}

export enum ViewWidth {
  SMALL_MOBILE = 1,
  MOBILE,
  SMALL_TABLET,
  TABLET,
  DESKTOP,
}

export enum ViewHeight {
  EXTRA_SMALL = 1,
  SMALL,
  MEDIUM
}

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
}

export interface AdaptivityContextInterface extends SizeProps {
  viewWidth?: ViewWidth;
  viewHeight?: ViewHeight;
  hasMouse?: boolean;
}

export const AdaptivityContext = React.createContext<AdaptivityContextInterface>({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.REGULAR,
});
