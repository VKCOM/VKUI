import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28AddOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CellButton, CellButtonProps } from './CellButton';

const story: Meta<CellButtonProps> = {
  title: 'Blocks/CellButton',
  component: CellButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<CellButtonProps>;

export const Playground: Story = {
  args: {
    children: 'Создать беседу',
    before: <Icon28AddOutline />,
    onClick: noop,
  },
};
