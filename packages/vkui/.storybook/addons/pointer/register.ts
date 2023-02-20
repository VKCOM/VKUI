import { addons, types } from '@storybook/addons';
import { HasPointer } from './HasPointer';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Pointer',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: HasPointer,
  });
});
