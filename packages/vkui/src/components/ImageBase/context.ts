import * as React from 'react';
import { ImageBaseContextProps } from './types';

export const ImageBaseContext: React.Context<ImageBaseContextProps> =
  React.createContext<ImageBaseContextProps>({
    size: 0,
    ref: {
      current: null,
    },
  });
