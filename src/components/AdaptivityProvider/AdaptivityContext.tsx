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

export enum ViewHeight {
  SMALL = 1,
  MEDIUM
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
