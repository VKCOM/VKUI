import {
  registerStorybookThemeAddon,
  registerSourceButtonAddon,
} from '@vkontakte/storybook-addons';
import { GithubIcon } from '@storybook/icons';
import { vkuiDarkTheme, vkuiLightTheme } from './vkuiThemes';

registerStorybookThemeAddon({
  lightTheme: vkuiLightTheme,
  darkTheme: vkuiDarkTheme,
});

registerSourceButtonAddon({
  baseUrl: 'https://github.com/VKCOM/VKUI/tree/master/packages/vkui',
  getUrl: (baseUrl, importPath) => {
    const pathWithoutFile = importPath.replace(/\/[^/]+\.stories\.tsx$/, '');
    const cleanPath = pathWithoutFile.replace(/^\.\//, '');
    return `${baseUrl}/${cleanPath}/`;
  },
  icon: GithubIcon,
  label: 'Open source on GitHub',
  title: 'Source',
});
