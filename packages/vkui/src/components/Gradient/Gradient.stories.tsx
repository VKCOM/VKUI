import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Gradient, type GradientProps } from './Gradient';

const story: Meta<GradientProps> = {
  title: 'Blocks/Gradient',
  component: Gradient,
  parameters: createStoryParameters('Gradient', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<GradientProps>;

export const Playground: Story = {
  args: {
    children: <div style={{ width: '100%', height: '200px' }} />,
  },
  decorators: [
    (Component, context) => (
      <div style={{ width: '50%', height: '50%' }}>
        <Component args={context.args} />
      </div>
    ),
  ],
};
