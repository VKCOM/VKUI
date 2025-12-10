import { addons, types } from 'storybook/manager-api';
import { StorybookTheme, getLocalStorageValue } from './StorybookTheme';
import { vkuiDarkTheme, vkuiLightTheme } from './vkuiThemes';
import { ADDON_ID } from './constants';

const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)');
const currentTheme = getLocalStorageValue() || (prefersDark.matches && 'dark') || 'light';

addons.setConfig({
  theme: currentTheme === 'dark' ? vkuiDarkTheme : vkuiLightTheme,
});

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    type: types.TOOLEXTRA,
    title: 'Тема всей страницы',
    render: StorybookTheme,
  });
});
