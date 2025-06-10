import { addons, types } from 'storybook/manager-api';
import { ADDON_ID } from './constants';
import { DocumentationButton } from './DocumentationButton';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Documentation',
    type: types.TOOL,
    render: DocumentationButton,
  });
});
