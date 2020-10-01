import { createContext } from 'react';

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

// TODO: Rename breakpoints
export enum ViewHeight {
  DEFAULT = 1,
  HEIGHT_720
}

export interface AdaptivityContextInterface {
  sizeX?: SizeType;
  sizeY?: SizeType;
  viewWidth?: ViewWidth;
  viewHeight?: ViewHeight;
}

export const AdaptivityContext = createContext<AdaptivityContextInterface>({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.REGULAR,
});
