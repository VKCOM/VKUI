import type { Meta, StoryObj } from '@storybook/react';
import { DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { Tooltip, type TooltipProps } from './Tooltip';

const story: Meta<TooltipProps> = {
  title: 'Modals/Tooltip',
  component: Tooltip,
  parameters: createStoryParameters('Tooltip', DisableCartesianParam),
  tags: ['Модальные окна'],
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
    description: 'Привет',
  },
};

export const InteractiveTooltipWithCloseAction: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button style={{ margin: 20 }}>Наведи</Button>
    </Tooltip>
  ),
  args: {
    description: 'Привет',
    enableInteractive: true,
    closable: true,
  },
};
