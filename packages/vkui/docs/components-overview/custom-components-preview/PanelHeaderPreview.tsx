'use client';

import { noop } from '@vkontakte/vkjs';
import { Avatar, Div, Panel, PanelHeader, PanelHeaderClose, View } from '../../../src';

export const PanelHeaderPreview = () => {
  return (
    <View
      id="main"
      activePanel="panel1"
      style={{
        minWidth: 400,
        maxWidth: 600,
      }}
    >
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderClose onClick={noop} />} after={<Avatar size={36} />}>
          Стартовый экран
        </PanelHeader>
        <Div>PanelHeader c before PanelHeaderClose и after Avatar</Div>
      </Panel>
    </View>
  );
};
