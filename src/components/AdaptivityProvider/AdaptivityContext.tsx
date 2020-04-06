import { createContext } from 'react';

export enum SizeType {
  COMPACT = 'compact',
  REGULAR = 'regular',
}

export interface AdaptivityContextInterface {
  sizeX: SizeType;
  sizeY: SizeType;
  isMobile?: boolean;
}

export const AdaptivityContext = createContext<AdaptivityContextInterface>({
  sizeX: SizeType.REGULAR,
  sizeY: SizeType.REGULAR,
});
