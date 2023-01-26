import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TabsItem, TabsItemProps } from './TabsItem';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import {
  Icon16Dropdown,
  Icon20NewsfeedOutline,
  Icon20PictureOutline,
  Icon20ThumbsUpOutline,
  Icon20UsersOutline,
} from '@vkontakte/icons';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/TabsItem',
  component: TabsItem,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Tabs'), ...DisableCartesianParam },
} as Meta<TabsItemProps>;

const Template: Story<TabsItemProps> = (args) => <TabsItem {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Сообщества',
};
Playground.decorators = [
  (Component) => (
    <div style={{ height: 50 }}>
      <Component />
    </div>
  ),
];

export const WithBeforeAfter = Template.bind({});
WithBeforeAfter.args = {
  children: 'Лента',
  before: <Icon20NewsfeedOutline />,
  after: <Icon16Dropdown />,
};
WithBeforeAfter.decorators = Playground.decorators;

export const WithBadge = Template.bind({});
WithBadge.args = {
  children: 'Рекомендации',
  before: <Icon20ThumbsUpOutline />,
  after: <Icon16Dropdown />,
  status: <Badge mode="prominent" />,
};
WithBadge.decorators = Playground.decorators;

export const WithCounter = Template.bind({});
WithCounter.args = {
  children: 'Друзья',
  before: <Icon20UsersOutline />,
  after: <Icon16Dropdown />,
  status: (
    <Counter mode="prominent" size="s">
      3
    </Counter>
  ),
};
WithCounter.decorators = Playground.decorators;

export const WithNumberStatus = Template.bind({});
WithNumberStatus.args = {
  children: 'Фотографии',
  before: <Icon20PictureOutline />,
  after: <Icon16Dropdown />,
  status: 23,
};
WithNumberStatus.decorators = Playground.decorators;
