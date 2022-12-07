import * as React from "react";
import { ImageBaseContextProps } from "./types";

export const ImageBaseContext = React.createContext<ImageBaseContextProps>({
  size: 0,
});
