import { addons, types } from '@storybook/addons';
import { Tool } from '../Tool';
import { ADDON_ID, TOOL_ID } from '../constants';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    paramKey: 'cartesian',
    title: 'Components Variants',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    // @ts-expect-error: TS2322 Types doesn't expect null, but it allowed
    render: Tool,
  });
});
