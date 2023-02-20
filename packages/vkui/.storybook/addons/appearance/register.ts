import { addons, types } from '@storybook/addons';
import { AppearanceSwitch } from './AppearanceSwitch';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Appearance',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: AppearanceSwitch,
  });
});
