import { createContext } from 'react';
import { ImageBaseContextProps } from './types';

export const ImageBaseContext = createContext<ImageBaseContextProps>({
  size: 0,
});
