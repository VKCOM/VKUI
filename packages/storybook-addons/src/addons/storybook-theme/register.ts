import { addons, types } from 'storybook/manager-api';
import { getLocalStorageValue, StorybookTheme } from './StorybookTheme';
import { getThemeConfig, setThemeConfig } from './config';
import type { StorybookThemeConfig } from './config';
import { ADDON_ID } from './constants';

export const registerStorybookThemeAddon = (themeConfig?: Partial<StorybookThemeConfig>) => {
  if (themeConfig) {
    setThemeConfig(themeConfig);
  }
  const { lightTheme, darkTheme, defaultValue } = getThemeConfig();

  const systemTheme =
    defaultValue === 'system' &&
    ((window.matchMedia?.('(prefers-color-scheme: dark)').matches && 'dark') || 'light');
  const specificTheme = defaultValue === 'dark' ? 'dark' : 'light';

  const initialTheme = getLocalStorageValue() || systemTheme || specificTheme || 'light';

  addons.setConfig({ theme: initialTheme === 'dark' ? darkTheme : lightTheme });

  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      type: types.TOOLEXTRA,
      title: 'Тема всей страницы',
      render: StorybookTheme,
    });
  });
};
