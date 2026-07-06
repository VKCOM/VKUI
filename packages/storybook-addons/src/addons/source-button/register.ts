import { addons, types } from 'storybook/manager-api';
import { SourceButton } from './SourceButton';
import { setSourceButtonConfig } from './config';
import type { SourceButtonConfig } from './config';
import { ADDON_ID } from './constants';

export const registerSourceButtonAddon = (config: SourceButtonConfig) => {
  setSourceButtonConfig(config);

  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      title: config.title,
      type: types.TOOL,
      render: SourceButton,
    });
  });
};
