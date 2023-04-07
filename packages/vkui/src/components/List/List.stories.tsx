import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28PrivacyOutline, Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List, ListProps } from './List';

const story: Meta<ListProps> = {
  title: 'Blocks/List',
  component: List,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ListProps>;

export const Playground: Story = {
  render: ({ children, ...args }) => <List {...args}>{children}</List>,
  args: {
    children: [
      <Cell key={0} expandable before={<Icon28UserOutline />}>
        Учетная запись
      </Cell>,
      <Cell key={1} expandable before={<Icon28SettingsOutline />}>
        Основные
      </Cell>,
      <Cell key={2} expandable before={<Icon28PrivacyOutline />}>
        Приватность
      </Cell>,
    ],
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
