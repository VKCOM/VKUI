import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Separator } from '../Separator/Separator';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from '../TabsItem/TabsItem';
import { View } from '../View/View';
import { FixedLayout, FixedLayoutProps } from './FixedLayout';

const story: Meta<FixedLayoutProps> = {
  title: 'Layout/FixedLayout',
  component: FixedLayout,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
  decorators: [withVKUILayout],
};

export default story;

const Template: Story<FixedLayoutProps> = (args) => (
  <View activePanel="fixedLayout">
    <Panel id="fixedLayout">
      <PanelHeader>Fixed layout</PanelHeader>
      <FixedLayout {...args}>
        <Separator wide />
        <Tabs>
          <TabsItem selected>176 сообществ</TabsItem>
          <TabsItem>9 событий</TabsItem>
        </Tabs>
      </FixedLayout>
    </Panel>
  </View>
);

export const Playground = Template.bind({});
Playground.args = {
  vertical: 'bottom',
  filled: true,
};
