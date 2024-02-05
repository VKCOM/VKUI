import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon16Delete } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { IconButton, IconButtonProps } from './IconButton';

const story: Meta<IconButtonProps> = {
  title: 'Blocks/IconButton',
  component: IconButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<IconButtonProps>;

export const Playground: Story = {
  args: {
    label: 'Удалить',
    children: <Icon16Delete />,
    onClick: noop,
  },
};
