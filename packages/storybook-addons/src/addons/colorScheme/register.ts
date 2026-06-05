import { addons, types } from 'storybook/manager-api';
import { ColorSchemeSwitch } from './ColorSchemeSwitch';
import { setColorSchemeConfig } from './config';
import type { ColorSchemeConfig } from './config';
import { ADDON_ID } from './constants';

export const registerColorSchemeAddon = (addonConfig?: Partial<ColorSchemeConfig>) => {
  if (addonConfig) {
    setColorSchemeConfig(addonConfig);
  }

  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      title: 'ColorScheme',
      type: types.TOOL,
      match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
      render: ColorSchemeSwitch,
    });
  });
};
