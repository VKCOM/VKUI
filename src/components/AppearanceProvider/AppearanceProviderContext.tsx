import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { Appearance } from "../../helpers/appearance";

export const AppearanceProviderContext = React.createContext<AppearanceType>(
  Appearance.LIGHT
);
