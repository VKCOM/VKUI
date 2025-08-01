import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon28MusicOutline, Icon28UserOutline, Icon28UsersOutline } from '@vkontakte/icons';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { Search } from '../Search/Search';
import { Spinner } from '../Spinner/Spinner';
import { View } from '../View/View';
import { Panel, type PanelProps } from './Panel';

const story: Meta<PanelProps> = {
  title: 'Navigation/Panel',
  component: Panel,
  parameters: createStoryParameters('Panel', CanvasFullLayout, DisableCartesianParam),
  decorators: [withVKUILayout],
  tags: ['Навигация'],
};

export default story;

type Story = StoryObj<PanelProps>;

export const Playground: Story = {
  render: function Render() {
    const [activePanel, setActivePanel] = React.useState('panel1');

    return (
      <View activePanel={activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell
              chevron="auto"
              before={<Icon28UserOutline />}
              onClick={() => setActivePanel('panel2')}
            >
              Friends
            </Cell>
            <Cell
              chevron="auto"
              before={<Icon28UsersOutline />}
              onClick={() => setActivePanel('panel2')}
            >
              Communities
            </Cell>
            <Cell
              chevron="auto"
              before={<Icon28MusicOutline />}
              onClick={() => setActivePanel('panel2')}
            >
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            delimiter="spacing"
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
