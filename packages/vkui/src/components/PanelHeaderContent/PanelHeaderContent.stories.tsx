import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Div } from '../Div/Div';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { View } from '../View/View';
import { PanelHeaderContent, PanelHeaderContentProps } from './PanelHeaderContent';

const story: Meta<PanelHeaderContentProps> = {
  title: 'Layout/PanelHeaderContent',
  component: PanelHeaderContent,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<PanelHeaderContentProps>;

const PANEL_ID = 'panel1';

export const Example: Story = {
  render: function Render() {
    const platform = usePlatform();

    return (
      <View id="main" activePanel={PANEL_ID}>
        <Panel id={PANEL_ID}>
          <PanelHeader
            before={
              <PanelHeaderBack onClick={noop} label={platform === 'vkcom' ? 'Назад' : undefined} />
            }
          >
            <PanelHeaderContent before={<Avatar size={36} />} status="Был в сети вчера">
              Влад Анесов
            </PanelHeaderContent>
          </PanelHeader>
          <Div>PanelHeaderContent</Div>
        </Panel>
      </View>
    );
  },
};
