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

export const Playground: Story = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button
      style={{
        margin: 20,
      }}
    >
      Наведи
    </Button>
  </Tooltip>
);

Playground.args = {
  description: 'Привет',
};

export const InteractiveTooltipWithCloseAction: Story = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button
      style={{
        margin: 20,
      }}
    >
      Наведи
    </Button>
  </Tooltip>
);

InteractiveTooltipWithCloseAction.args = {
  description: 'Привет',
  enableInteractive: true,
  closable: true,
};
