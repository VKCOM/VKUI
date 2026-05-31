import type { Meta, StoryObj } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { Tabbar } from '../Tabbar/Tabbar';
import { TabbarItem, type TabbarItemProps } from './TabbarItem';

const story: Meta<TabbarItemProps> = {
  title: 'Navigation/Epic/Tabbar/TabbarItem',
  component: TabbarItem,
  parameters: createStoryParameters('TabbarItem', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    children: createFieldWithPresets({
      iconSizes: ['28'],
      requiredIcons: ['Icon28MessageOutline'],
      sizeIconsCount: 15,
    }),
    indicator: createFieldWithPresets({
      additionalPresets: {
        Badge: <Badge mode="prominent">Есть обновления</Badge>,
        Counter: (
          <Counter size="s" mode="primary" appearance="accent-red">
            3
          </Counter>
        ),
      },
    }),
  },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<TabbarItemProps>;
export const Playground: Story = (args: TabbarItemProps) => <TabbarItem {...args} />;
Playground.args = {
  children: 'Icon28MessageOutline',
  label: 'Messages',
};

export const InVerticalTabbar: Story = (args: TabbarItemProps) => (
  <Tabbar mode="vertical">
    <TabbarItem {...args} />
  </Tabbar>
);
InVerticalTabbar.args = {
  children: 'Icon28MessageOutline',
  label: 'Messages',
};

export const InHorizontalTabbar: Story = (args: TabbarItemProps) => (
  <Tabbar mode="horizontal">
    <TabbarItem {...args} />
  </Tabbar>
);
InHorizontalTabbar.args = {
  children: 'Icon28MessageOutline',
  label: 'Messages',
};
