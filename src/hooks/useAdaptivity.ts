import * as React from "react";
import {
  AdaptivityContext,
  AdaptivityProps,
  AdaptivityContextInterface,
} from "../components/AdaptivityProvider/AdaptivityContext";

export type { AdaptivityProps };

export const useAdaptivity = (): AdaptivityContextInterface => {
  return React.useContext(AdaptivityContext);
};
