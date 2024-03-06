import * as React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import { SourceTab } from './SourceTab';
import { ADDON_ID, PANEL_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Source',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^story$/)),
    render: ({ active = false }) => (
      <AddonPanel active={active}>
        <SourceTab />
      </AddonPanel>
    ),
  });
});
