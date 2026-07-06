import { addons, types } from 'storybook/manager-api';
import { StorybookTheme } from './StorybookTheme';
import { setStorybookThemeConfig } from './config';
import type { StorybookThemeConfig } from './config';
import { ADDON_ID } from './constants';

export const registerStorybookThemeAddon = (themeConfig?: Partial<StorybookThemeConfig>) => {
  if (themeConfig) {
    setStorybookThemeConfig(themeConfig);
  }

  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      type: types.TOOLEXTRA,
      title: 'Тема всей страницы',
      render: StorybookTheme,
    });
  });
};
