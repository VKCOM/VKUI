import { addons, types } from '@storybook/manager-api';
import { HasCustomPanelHeaderAfter } from './HasCustomPanelHeaderAfter';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'CustomPanelHeaderAfter',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: HasCustomPanelHeaderAfter,
  });
});
