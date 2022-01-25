import { AppearanceType } from "@vkontakte/vk-bridge";
import { PlatformType, VKCOM } from "../lib/platform";
import { Scheme } from "./scheme";

export interface GetSchemeProps {
  platform?: PlatformType;
  appearance: AppearanceType;
}

export function getScheme({ platform, appearance }: GetSchemeProps): Scheme {
  switch (appearance) {
    case "dark":
      switch (platform) {
        case VKCOM:
          return Scheme.VKCOM_DARK;
        default:
          return Scheme.SPACE_GRAY;
      }
    case "light":
      switch (platform) {
        case VKCOM:
          return Scheme.VKCOM_LIGHT;
        default:
          return Scheme.BRIGHT_LIGHT;
      }
  }
}
