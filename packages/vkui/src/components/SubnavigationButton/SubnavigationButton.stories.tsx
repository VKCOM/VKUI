import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SubnavigationButton, SubnavigationButtonProps } from './SubnavigationButton';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Icon24FavoriteOutline } from '@vkontakte/icons';
import { Counter } from '../Counter/Counter';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/SubnavigationButton',
  component: SubnavigationButton,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('SubnavigationBar'),
    ...DisableCartesianParam,
  },
} as Meta<SubnavigationButtonProps>;

const Template: Story<SubnavigationButtonProps> = (args) => <SubnavigationButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Размер',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  before: <Icon24FavoriteOutline />,
  children: 'Избранное',
  expandable: true,
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  children: 'Фильтры',
  after: <Counter size="s">3</Counter>,
};
