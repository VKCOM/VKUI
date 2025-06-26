import vkuiPgk from '../../../../../packages/vkui/package.json';

export const VKUI_CONFIG = {
  COMPONENTS_URL: 'packages/vkui/src/components',
  REPOSITORY: vkuiPgk.repository.url.replace('.git', ''),
  VERSION: vkuiPgk.version,
  // TODO [docs] (@BlackySoul): поменять в package.json у пакета VKUI
  HOMEPAGE: 'https://vkui.io',
} as const;
