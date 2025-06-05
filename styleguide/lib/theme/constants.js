import { Platform } from '@vkui';

export const VKUI_TOKENS_THEMES_BASE_URL =
  'https://cdn.jsdelivr.net/npm/@vkontakte/vkui-tokens@4/themes';
export const VKUI_TOKENS_VERSION_URL =
  'https://data.jsdelivr.com/v1/packages/npm/@vkontakte/vkui-tokens/resolved?specifier=4';
export const VKUI_TOKENS_THEMES_META_URL =
  'https://data.jsdelivr.com/v1/packages/npm/@vkontakte/vkui-tokens';

/**
 * Эти темы поддерживают только colorScheme="dark", но при этом не имеют постфикса `Dark`.
 */
export const INVERTED_THEME_NAME = new Map([
  ['calls', 'callsDark'],
  ['mycom', 'mycomDark'],
]);

export const IGNORE_TOKENS_WITH_PREFIX = ['octavius'];

export const DEFAULT_THEME_NAMES = ['vkBase', 'vkIOS', 'vkCom'];

export const LEGACY_PLATFORM = Platform.VKCOM;

export const DEFAULT_THEME_FOR_PLATFORM = new Map([
  ['material', 'vkBase'],
  [Platform.IOS, 'vkIOS'],
  [Platform.VKCOM, 'vkCom'],
]);
