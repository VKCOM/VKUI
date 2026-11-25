'use client';

import { noop } from '@vkontakte/vkjs';
import {
  Avatar,
  Div,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderContent,
  usePlatform,
  View,
} from '../../../src';

export const PanelHeaderContentPreview = () => {
  const platform = usePlatform();

  return (
    <View id="main" activePanel="panel1" style={{ minWidth: 400, maxWidth: 600 }}>
      <Panel id="panel1">
        <PanelHeader
          before={
            <PanelHeaderBack onClick={noop} label={platform === 'vkcom' ? 'Назад' : undefined} />
          }
        >
          <PanelHeaderContent before={<Avatar size={36} />} subtitle="Был в сети вчера">
            Влад Анесов
          </PanelHeaderContent>
        </PanelHeader>
        <Div>PanelHeaderContent</Div>
      </Panel>
    </View>
  );
};
