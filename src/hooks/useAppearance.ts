import * as React from "react";
import { AppearanceProviderContext } from "../components/AppearanceProvider/AppearanceProviderContext";

export const useAppearance = () => React.useContext(AppearanceProviderContext);
