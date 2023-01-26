import React from 'react';
import { Meta } from '@storybook/react';
import { Root, RootProps } from './Root';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { View } from '../View/View';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Group } from '../Group/Group';
import { CellButton } from '../CellButton/CellButton';

export default {
  title: 'Layout/Root',
  component: Root,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
} as Meta<RootProps>;

export const Example = () => {
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
};
