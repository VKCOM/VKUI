import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24FavoriteOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Counter } from '../Counter/Counter';
import { SubnavigationButton, SubnavigationButtonProps } from './SubnavigationButton';

const story: Meta<SubnavigationButtonProps> = {
  title: 'Blocks/SubnavigationButton',
  component: SubnavigationButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: {
    onClick: noop,
  },
};

export default story;

type Story = StoryObj<SubnavigationButtonProps>;

export const Playground: Story = {
  args: {
    children: 'Размер',
  },
};

export const WithIcon: Story = {
  ...Playground,
  args: {
    before: <Icon24FavoriteOutline />,
    children: 'Избранное',
    expandable: true,
  },
};

export const WithCounter: Story = {
  ...Playground,
  args: {
    children: 'Фильтры',
    after: <Counter size="s">3</Counter>,
  },
};
