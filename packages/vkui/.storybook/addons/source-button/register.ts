import { addons, types } from 'storybook/manager-api';
import { ADDON_ID } from './constants';
import { SourceButton } from './SourceButton';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Source',
    type: types.TOOL,
    render: SourceButton,
  });
});
