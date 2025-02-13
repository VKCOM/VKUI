import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Clickable, type ClickableProps } from './Clickable';

const story: Meta<ClickableProps> = {
  title: 'Blocks/Clickable',
  component: Clickable,
  parameters: createStoryParameters('Clickable', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<ClickableProps>;

export const Playground: Story = {
  render: (args) => (
    <Clickable onClick={noop} {...args}>
      <div style={{ padding: 16 }}>Clickable</div>
    </Clickable>
  ),
};
