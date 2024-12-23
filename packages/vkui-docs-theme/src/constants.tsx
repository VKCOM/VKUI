import { Search as SearchVKUI } from '@vkontakte/vkui';
import { Navbar } from './components';
import { GithubIcon, LogoIcon } from './icons';
import type { DocsThemeConfig } from './types';

export const DEFAULT_THEME: DocsThemeConfig = {
  direction: 'ltr',
  logo: LogoIcon,
  logoLink: true,
  navbar: {
    component: (props) => <Navbar {...props} />,
  },
  colorScheme: {
    defaultColorScheme: 'system',
    storageKey: 'vkui-docs-theme',
  },
  search: {
    component: function Search(props) {
      return <SearchVKUI {...props} noPadding />;
    },
    emptyResult: '',
    loading: '',
    error: '',
    placeholder: '',
  },
  navigation: true,
  project: {
    link: 'https://github.com/VKCOM/VKUI',
    icon: (
      <GithubIcon
        width="24"
        height="24"
        viewBox="0 0 20 20"
        verticalAlign="middle"
        color="medium"
      />
    ),
  },
};
