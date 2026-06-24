import * as React from 'react';
import { addons, types } from 'storybook/manager-api';
import { ADDON_ID, EVENTS, PANEL_ID, PARAM_ID } from '../../liveCodeEditor';
import { type LiveCodeEditorConfig, setLiveCodeEditorConfig } from './config';

const LiveCodeEditorPanel = React.lazy(() => import('./LiveCodeEditorPanel'));

export const registerLiveCodeEditorAddon = (config?: Partial<LiveCodeEditorConfig>) => {
  if (config) {
    setLiveCodeEditorConfig(config);
  }

  addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
      title: 'Live Code Editor',
      type: types.PANEL,
      paramKey: PARAM_ID,
      render: ({ active }) =>
        active ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LiveCodeEditorPanel api={api} />
          </React.Suspense>
        ) : null,
    });

    addons.getChannel().on(EVENTS.SHOW_NOTIFICATION, (message: string) => {
      api.addNotification({
        id: `${ADDON_ID}/notification-${Date.now()}`,
        content: { headline: message },
      });
    });
  });
};
