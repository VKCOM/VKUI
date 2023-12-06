import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Tooltip, TooltipProps } from './Tooltip';

const story: Meta<TooltipProps> = {
  title: 'Poppers/Tooltip',
  component: Tooltip,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<TooltipProps>;

export const Playground: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button style={{ margin: 20 }}>Наведи</Button>
    </Tooltip>
  ),
  args: {
    text: 'Привет',
  },
};
