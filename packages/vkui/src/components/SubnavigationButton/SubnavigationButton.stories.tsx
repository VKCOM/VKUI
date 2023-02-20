import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon24FavoriteOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Counter } from '../Counter/Counter';
import { SubnavigationButton, SubnavigationButtonProps } from './SubnavigationButton';

const story: Meta<SubnavigationButtonProps> = {
  title: 'Blocks/SubnavigationButton',
  component: SubnavigationButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
