import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Mark, type MarkProps } from './Mark';

const story: Meta<MarkProps> = {
  title: 'Typography/Mark',
  component: Mark,
  parameters: createStoryParameters('Mark', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<MarkProps>;

export const Playground: Story = {
  render: (args) => (
    <p>
      Это <Mark {...args}>выделенный</Mark> текст
    </p>
  ),
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
  ],
};
