import { createContext } from 'react';

export enum SizeType {
  COMPACT = 'compact',
  REGULAR = 'regular',
}

export enum ViewMode {
  SMALL_MOBILE = 1,
  MOBILE,
  SMALL_TABLET,
  TABLET,
  DESKTOP,
}

export interface AdaptivityContextInterface {
  sizeX: SizeType;
  sizeY: SizeType;
  viewMode?: ViewMode;
}

export const AdaptivityContext = createContext<AdaptivityContextInterface>({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.COMPACT,
});
