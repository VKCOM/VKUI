import { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';

export enum Scheme {
  BRIGHT_LIGHT = 'bright_light',
  SPACE_GRAY = 'space_gray',
  VKCOM_LIGHT = 'vkcom_light',
  VKCOM_DARK = 'vkcom_dark',
}

export type AppearanceScheme = AppearanceSchemeType | Scheme.VKCOM_DARK | Scheme.VKCOM_LIGHT;

export enum Appearance {
  DARK = 'dark',
  LIGHT = 'light',
}

export const deriveAppearance = (scheme: AppearanceScheme | undefined): AppearanceType =>
  scheme === Scheme.SPACE_GRAY || scheme === Scheme.VKCOM_DARK ? 'dark' : 'light';

export interface VKBridgeConfigData {
  appearance?: AppearanceType;
  scheme: AppearanceScheme;
}

/**
 * TODO [>=6]: удалить `helpers/appearance.ts` (#5049)
 * @deprecated v5.8.0
 */
export function resolveAppearance(data: VKBridgeConfigData): AppearanceType | null {
  const { scheme, appearance } = data;

  // appearance пока приходит только на IOS и ANDROID
  if (appearance) {
    return appearance;
  }

  // Проверяем scheme если appearance не пришел
  return deriveAppearance(scheme);
}
