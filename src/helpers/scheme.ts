import { AppearanceSchemeType, AppearanceType } from "@vkontakte/vk-bridge";
import { PlatformType, VKCOM } from "../lib/platform";
import { warnOnce } from "../lib/warnOnce";
import { getScheme } from "./getScheme";

export enum Scheme {
  BRIGHT_LIGHT = "bright_light",
  SPACE_GRAY = "space_gray",
  VKCOM_LIGHT = "vkcom_light",
  VKCOM_DARK = "vkcom_dark",
}

export type AppearanceScheme =
  | AppearanceSchemeType
  | Scheme.VKCOM_DARK
  | Scheme.VKCOM_LIGHT
  | "inherit";

export enum Appearance {
  DARK = "dark",
  LIGHT = "light",
}

const warn = warnOnce("scheme");

export interface NormalizeSchemeProps {
  platform: PlatformType;
  scheme?: AppearanceScheme;
  appearance?: AppearanceType;
}

export function normalizeScheme({
  platform,
  scheme,
  appearance,
}: NormalizeSchemeProps): Scheme | "inherit" {
  if (appearance) {
    return getScheme({ platform, appearance });
  }

  if (scheme === "inherit") {
    return scheme;
  }
  if (
    platform === VKCOM &&
    (scheme === Scheme.BRIGHT_LIGHT || scheme === Scheme.SPACE_GRAY)
  ) {
    process.env.NODE_ENV === "development" &&
      warn(
        `Платформа "vkcom" и схема "${scheme}" несовместимы. С этой платформой можно использовать схемы "${Scheme.VKCOM_LIGHT}" или "${Scheme.VKCOM_DARK}"`,
        "error"
      );
    return Scheme.VKCOM_LIGHT;
  }

  return scheme as Scheme;
}
