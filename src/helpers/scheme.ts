import { AppearanceSchemeType, AppearanceType } from "@vkontakte/vk-bridge";
import { PlatformType, VKCOM } from "../lib/platform";
import { warnOnce } from "../lib/warnOnce";
import { getScheme } from "./getScheme";

export enum Scheme {
  /**
   * @deprecated будет удалено в 5.0.0
   * версия оставлена для совместимости со старыми версиями клиентов
   */
  DEPRECATED_CLIENT_LIGHT = "client_light",
  /**
   * @deprecated будет удалено в 5.0.0
   * версия оставлена для совместимости со старыми версиями клиентов
   */
  DEPRECATED_CLIENT_DARK = "client_dark",
  /**
   * @deprecated будет удалено в 5.0.0
   * версия оставлена для совместимости с vkcom, когда там была только одна схема
   */
  VKCOM = "vkcom",

  BRIGHT_LIGHT = "bright_light",
  SPACE_GRAY = "space_gray",
  VKCOM_LIGHT = "vkcom_light",
  VKCOM_DARK = "vkcom_dark",
}

export type AppearanceScheme =
  | AppearanceSchemeType
  | Scheme.VKCOM
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
  if (scheme === Scheme.VKCOM) {
    process.env.NODE_ENV === "development" &&
      warn(
        `Схема "${Scheme.VKCOM}" устарела и будет удалена 5.0.0. Вместо неё используйте "${Scheme.VKCOM_LIGHT}"`
      );
    return Scheme.VKCOM_LIGHT;
  }
  if (
    platform === VKCOM &&
    (scheme === Scheme.BRIGHT_LIGHT || scheme === Scheme.SPACE_GRAY)
  ) {
    process.env.NODE_ENV === "development" &&
      warn(
        `Платформа "vkcom" и схема "${scheme}" несовместимы. С этой платформой можно использовать схемы "${Scheme.VKCOM_LIGHT}" или "${Scheme.VKCOM_DARK}"`
      );
    return Scheme.VKCOM_LIGHT;
  }
  switch (scheme) {
    case Scheme.DEPRECATED_CLIENT_LIGHT:
      return Scheme.BRIGHT_LIGHT;
    case Scheme.DEPRECATED_CLIENT_DARK:
      return Scheme.SPACE_GRAY;
    default:
      return scheme as Scheme;
  }
}
