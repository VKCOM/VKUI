import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { CellButton } from '../CellButton/CellButton';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { View } from '../View/View';
import { Root, type RootProps } from './Root';

const story: Meta<RootProps> = {
  title: 'Navigation/Root',
  component: Root,
  parameters: createStoryParameters('Root', CanvasFullLayout, DisableCartesianParam),
  decorators: [withVKUILayout],
  tags: ['Навигация'],
};

export default story;

type Story = StoryObj<RootProps>;

export const Example: Story = {
  render: function Render() {
    const [activeView, setActiveView] = React.useState('view1');

    return (
      <Root activeView={activeView}>
        <View activePanel="panel1.1" id="view1">
          <Panel id="panel1.1">
            <PanelHeader>View 1</PanelHeader>
            <Group>
              <div style={{ height: 200 }} />
              <CellButton onClick={() => setActiveView('view2')}>Open View 2</CellButton>
              <div style={{ height: 600 }} />
            </Group>
          </Panel>
        </View>
        <View activePanel="panel2.1" id="view2">
          <Panel id="panel2.1">
            <PanelHeader>View 2</PanelHeader>
            <Group>
              <div style={{ height: 200 }} />
              <CellButton onClick={() => setActiveView('view1')}>Back to View 1</CellButton>
              <div style={{ height: 600 }} />
            </Group>
          </Panel>
        </View>
      </Root>
    );
  },
};
