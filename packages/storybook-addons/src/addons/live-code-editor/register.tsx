import * as React from 'react';
import { addons, types } from 'storybook/manager-api';
import { ADDON_ID, PANEL_ID, PARAM_ID } from '../../liveCodeEditor';
import { LiveCodeEditorPanel } from './LiveCodeEditorPanel';

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    title: 'Live Code Editor',
    type: types.PANEL,
    paramKey: PARAM_ID,
    render: ({ active }) => (active ? <LiveCodeEditorPanel api={api} /> : null),
  });
});
