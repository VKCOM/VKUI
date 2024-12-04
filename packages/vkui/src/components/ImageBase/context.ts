import * as React from 'react';
import type { ImageBaseContextProps } from './types';

export const ImageBaseContext: React.Context<ImageBaseContextProps> =
  React.createContext<ImageBaseContextProps>({
    size: 0,
    onMouseOverHandlers: [],
    onMouseOutHandlers: [],
  });
