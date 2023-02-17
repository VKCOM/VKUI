import React from 'react';
import { Meta, Story } from '@storybook/react';
import { getIconArgBySize, getIconComponent, IconName } from '../../storybook/Icons';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { Tabbar } from '../Tabbar/Tabbar';
import { TabbarItem, TabbarItemProps } from './TabbarItem';

const story: Meta<TabbarItemProps> = {
  title: 'Layout/TabbarItem',
  component: TabbarItem,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Tabbar'), ...DisableCartesianParam },
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

const Template: Story<Omit<TabbarItemProps, 'children'> & { children?: IconName }> = ({
  children,
  ...args
}) => {
  const Icon = getIconComponent(children);

  return <TabbarItem {...args}>{Icon}</TabbarItem>;
};

export const InVerticalTabbar = Template.bind({});
InVerticalTabbar.args = {
  children: 'Icon28MessageOutline',
  text: 'Messages',
};
InVerticalTabbar.decorators = [
  (Component, context) => (
    <Tabbar mode="vertical">
      <Component args={context.args} />
    </Tabbar>
  ),
];

export const InHorizontalTabbar = Template.bind({});
InHorizontalTabbar.args = {
  ...InVerticalTabbar.args,
};
InHorizontalTabbar.decorators = [
  (Component, context) => (
    <Tabbar mode="horizontal">
      <Component args={context.args} />
    </Tabbar>
  ),
];
