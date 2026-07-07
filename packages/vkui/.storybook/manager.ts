import { setStorybookThemeConfig, setSourceButtonConfig } from '@vkontakte/storybook-addons';
import { GithubIcon } from '@storybook/icons';
import { vkuiDarkTheme, vkuiLightTheme } from './vkuiThemes';

setStorybookThemeConfig({
  lightTheme: vkuiLightTheme,
  darkTheme: vkuiDarkTheme,
});

setSourceButtonConfig({
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
