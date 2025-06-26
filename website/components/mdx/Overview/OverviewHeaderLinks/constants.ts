import vkuiPgk from '@vkontakte/vkui/package.json';

export const VKUI_CONFIG = {
  VKUI_SRC_URL: 'packages/vkui/src',
  REPOSITORY: vkuiPgk.repository.url.replace('.git', ''),
  VERSION: vkuiPgk.version,
  // TODO [docs] (@BlackySoul): поменять в package.json у пакета VKUI
  HOMEPAGE: 'https://vkui.io',
} as const;
