import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { getIconArgBySize, getIconComponent, IconName } from '../../storybook/Icons';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { Tabbar } from '../Tabbar/Tabbar';
import { TabbarItem, TabbarItemProps } from './TabbarItem';

const story: Meta<TabbarItemProps> = {
  title: 'Layout/TabbarItem',
  component: TabbarItem,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    children: getIconArgBySize(/^Icon28/),
    indicator: {
      options: ['None', 'Badge', 'Counter'],
      mapping: {
        None: null,
        Badge: <Badge mode="prominent" />,
        Counter: (
          <Counter size="s" mode="prominent">
            3
          </Counter>
        ),
      },
    },
  },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<Omit<TabbarItemProps, 'children'> & { children?: IconName }>;

const Playground: Story = {
  render: ({ children, ...args }) => {
    const Icon = getIconComponent(children);

    return <TabbarItem {...args}>{Icon}</TabbarItem>;
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
