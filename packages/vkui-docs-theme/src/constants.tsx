import { Search } from './components/Search/Search';
import type { DocsThemeConfig } from './types';

export const DEFAULT_THEME: DocsThemeConfig = {
  direction: 'ltr',
  search: <Search />,
  navigation: true,
  projectLink: 'https://github.com/VKCOM/VKUI',
};
