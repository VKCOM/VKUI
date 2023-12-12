import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Mark, MarkProps } from './Mark';

const story: Meta<MarkProps> = {
  title: 'Blocks/Mark',
  component: Mark,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
