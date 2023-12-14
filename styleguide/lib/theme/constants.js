import { Platform } from '@vkui';

export const VKUI_TOKENS_THEMES_BASE_URL = 'https://unpkg.com/@vkontakte/vkui-tokens@4/themes';

export const VKUI_TOKENS_THEMES_META_URL = `${VKUI_TOKENS_THEMES_BASE_URL}/?meta`;

/**
 * Эти темы поддерживают только appearance="dark", но при этом не имеют постфикса `Dark`.
 */
export const INVERTED_THEME_NAME = new Map([
  ['calls', 'callsDark'],
  ['mycom', 'mycomDark'],
]);

export const IGNORE_TOKENS_WITH_PREFIX = ['octavius'];

export const DEFAULT_THEME_NAMES = ['vkBase', 'vkIOS', 'vkCom'];

export const LEGACY_PLATFORM = Platform.VKCOM;

export const DEFAULT_THEME_FOR_PLATFORM = new Map([
  [Platform.ANDROID, 'vkBase'],
  [Platform.IOS, 'vkIOS'],
  [LEGACY_PLATFORM, 'vkCom'],
]);
