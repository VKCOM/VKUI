import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Mark, type MarkProps } from './Mark';

const story: Meta<MarkProps> = {
  title: 'Typography/Mark',
  component: Mark,
  parameters: createStoryParameters('Mark', CanvasFullLayout, DisableCartesianParam),
  tags: ['Типографика'],
};

export default story;

export const Playground: StoryObj<MarkProps> = (args: MarkProps) => (
  <Group>
    <p>
      Это <Mark {...args}>выделенный</Mark> текст
    </p>
  </Group>
);

Playground.args = {};
