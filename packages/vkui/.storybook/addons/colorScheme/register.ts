import { addons, types } from 'storybook/manager-api';
import { ColorSchemeSwitch } from './ColorSchemeSwitch';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'ColorScheme',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ColorSchemeSwitch,
  });
});
