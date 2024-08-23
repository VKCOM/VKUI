import type { Meta, StoryObj } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { Tabbar } from '../Tabbar/Tabbar';
import { TabbarItem, type TabbarItemProps } from './TabbarItem';

const story: Meta<TabbarItemProps> = {
  title: 'Layout/TabbarItem',
  component: TabbarItem,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
          <Counter size="s" mode="prominent">
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

const Playground: Story = {
  render: ({ ...args }) => {
    return <TabbarItem {...args} />;
  },
};

export const InVerticalTabbar: Story = {
  ...Playground,
  args: {
    children: 'Icon28MessageOutline',
    text: 'Messages',
  },
  decorators: [
    (Component, context) => (
      <Tabbar mode="vertical">
        <Component args={context.args} />
      </Tabbar>
    ),
  ],
};

export const InHorizontalTabbar: Story = {
  ...Playground,
  args: {
    ...InVerticalTabbar.args,
  },
  decorators: [
    (Component, context) => (
      <Tabbar mode="horizontal">
        <Component args={context.args} />
      </Tabbar>
    ),
  ],
};
