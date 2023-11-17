import { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';

export const Appearance = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export const deriveAppearance = (scheme: AppearanceSchemeType | undefined): AppearanceType =>
  scheme === 'space_gray' || scheme === 'vkcom_dark' ? 'dark' : 'light';

export interface VKBridgeConfigData {
  appearance?: AppearanceType;
  scheme: AppearanceSchemeType;
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
