import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Gradient, GradientProps } from './Gradient';

const story: Meta<GradientProps> = {
  title: 'Blocks/Gradient',
  component: Gradient,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
