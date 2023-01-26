import React from 'react';
import { Icon28PrivacyOutline, Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';
import { Story, Meta } from '@storybook/react';
import { List, ListProps } from './List';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Cell } from '../Cell/Cell';

export default {
  title: 'Blocks/List',
  component: List,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<ListProps>;

const Template: Story<ListProps> = ({ children, ...args }) => <List {...args}>{children}</List>;

export const Playground = Template.bind({});
Playground.args = {
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
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
