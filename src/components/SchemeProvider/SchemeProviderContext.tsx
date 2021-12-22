import * as React from "react";
import { Scheme } from "../../helpers/scheme";

export const SchemeProviderContext = React.createContext<
  Scheme | "inherit" | undefined
>(undefined);
