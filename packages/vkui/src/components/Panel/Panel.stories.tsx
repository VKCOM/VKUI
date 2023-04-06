import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28MusicOutline, Icon28UserOutline, Icon28UsersOutline } from '@vkontakte/icons';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { Search } from '../Search/Search';
import { Spinner } from '../Spinner/Spinner';
import { View } from '../View/View';
import { Panel, PanelProps } from './Panel';

const story: Meta<PanelProps> = {
  title: 'Layout/Panel',
  component: Panel,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<PanelProps>;

export const Example: Story = {
  render: function Render() {
    const [activePanel, setActivePanel] = React.useState('panel1');

    return (
      <View activePanel={activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell
              expandable
              before={<Icon28UserOutline />}
              onClick={() => setActivePanel('panel2')}
            >
              Friends
            </Cell>
            <Cell
              expandable
              before={<Icon28UsersOutline />}
              onClick={() => setActivePanel('panel2')}
            >
              Communities
            </Cell>
            <Cell
              expandable
              before={<Icon28MusicOutline />}
              onClick={() => setActivePanel('panel2')}
            >
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            separator={false}
            before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}
          >
            Communities
          </PanelHeader>
          <Group>
            <Search />
            <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Swipe Right
            </Cell>
            <Cell
              subtitle="Cultural Center"
              before={<Avatar />}
              onClick={() => setActivePanel('panel3')}
            >
              Out Cinema
            </Cell>
            <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              #ARTPOKAZ
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
            Out Cinema
          </PanelHeader>
          <Spinner />
          <div style={{ marginTop: 10 }}>Centered Content</div>
        </Panel>
      </View>
    );
  },
};
