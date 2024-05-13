import { addons, types } from '@storybook/manager-api';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Tool } from '../Tool';
import { ADDON_ID, TOOL_ID } from '../constants';

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    paramKey: 'cartesian',
    title: 'Components Variants',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => {
      if (!api.getCurrentStoryData()) {
        return null;
      }
      return _jsx(Tool, {});
    },
  });
});
