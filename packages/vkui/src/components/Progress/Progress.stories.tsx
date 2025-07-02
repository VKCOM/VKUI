import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Progress, type ProgressProps } from './Progress';

const story: Meta<ProgressProps> = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: createStoryParameters('Progress', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default story;

type Story = StoryObj<ProgressProps>;

export const Playground: Story = {
  decorators: [
    (Component) => (
      <div style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}>
        <Component />
      </div>
    ),
  ],
};
