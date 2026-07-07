import { addons, types } from 'storybook/manager-api';
import { DensitySwitcher } from './DensitySwitcher.tsx';
import { setDensitySwitcherConfig } from './config';
import type { DensitySwitcherConfig } from './config';
import { ADDON_ID } from './constants';

export const registerDensitySwitcherAddon = (addonConfig?: Partial<DensitySwitcherConfig>) => {
  if (addonConfig) {
    setDensitySwitcherConfig(addonConfig);
  }

  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      title: 'DensitySwitcher',
      type: types.TOOL,
      match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
      render: DensitySwitcher,
    });
  });
};
