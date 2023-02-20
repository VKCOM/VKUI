import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { Cell, CellProps } from './Cell';

const story: Meta<CellProps> = {
  title: 'Blocks/Cell',
  component: Cell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withSinglePanel, withVKUILayout],
};

export default story;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Игорь Федоров',
  before: <Avatar src={getAvatarUrl('user_xyz')} />,
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
];

export const Multiple = Template.bind({});
Multiple.args = {
  before: <Avatar />,
};
Multiple.decorators = [
  (Component, context) => (
    <Group>
      <Component args={{ ...context.args, children: 'Игорь Федоров' }} />
      <Component args={{ ...context.args, children: 'Вадим Дорохов' }} />
      <Component args={{ ...context.args, children: 'Евгения Полозова' }} />
      <Component args={{ ...context.args, children: 'Владимир Клепов' }} />
    </Group>
  ),
];
