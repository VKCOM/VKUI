import { addons, types } from 'storybook/manager-api';
import { StorybookTheme } from './StorybookTheme';
import { getThemeConfig, setThemeConfig } from './config';
import type { StorybookThemeConfig } from './config';
import { ADDON_ID } from './constants';

export const registerStorybookThemeAddon = (themeConfig?: StorybookThemeConfig) => {
  if (themeConfig) {
    setThemeConfig(themeConfig);
  }

  const currentTheme =
    (window.localStorage.getItem('sb-dark-theme') as 'light' | 'dark') ||
    (window.matchMedia?.('(prefers-color-scheme: dark)').matches && 'dark') ||
    'light';
  const { lightTheme, darkTheme } = getThemeConfig();

  addons.setConfig({ theme: currentTheme === 'dark' ? darkTheme : lightTheme });

  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      type: types.TOOLEXTRA,
      title: 'Тема всей страницы',
      render: StorybookTheme,
    });
  });
};
