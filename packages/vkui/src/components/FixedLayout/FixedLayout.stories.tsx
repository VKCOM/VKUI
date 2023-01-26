import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FixedLayout, FixedLayoutProps } from './FixedLayout';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from '../TabsItem/TabsItem';
import { Separator } from '../Separator/Separator';
import { View } from '../View/View';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';

export default {
  title: 'Layout/FixedLayout',
  component: FixedLayout,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
  decorators: [withVKUILayout],
} as Meta<FixedLayoutProps>;

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
