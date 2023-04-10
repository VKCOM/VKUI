import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon16Dropdown,
  Icon20NewsfeedOutline,
  Icon20PictureOutline,
  Icon20ThumbsUpOutline,
  Icon20UsersOutline,
} from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { TabsItem, TabsItemProps } from './TabsItem';

const story: Meta<TabsItemProps> = {
  title: 'Blocks/TabsItem',
  component: TabsItem,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<TabsItemProps>;

export const Playground: Story = {
  args: {
    children: 'Сообщества',
  },
  decorators: [
    (Component) => (
      <div style={{ height: 50 }}>
        <Component />
      </div>
    ),
  ],
};

export const WithBeforeAfter: Story = {
  ...Playground,
  args: {
    children: 'Лента',
    before: <Icon20NewsfeedOutline />,
    after: <Icon16Dropdown />,
  },
};

export const WithBadge: Story = {
  ...Playground,
  args: {
    children: 'Рекомендации',
    before: <Icon20ThumbsUpOutline />,
    after: <Icon16Dropdown />,
    status: <Badge mode="prominent" />,
  },
};

export const WithCounter: Story = {
  ...Playground,
  args: {
    children: 'Друзья',
    before: <Icon20UsersOutline />,
    after: <Icon16Dropdown />,
    status: (
      <Counter mode="prominent" size="s">
        3
      </Counter>
    ),
  },
};

export const WithNumberStatus: Story = {
  ...Playground,
  args: {
    children: 'Фотографии',
    before: <Icon20PictureOutline />,
    after: <Icon16Dropdown />,
    status: 23,
  },
};
