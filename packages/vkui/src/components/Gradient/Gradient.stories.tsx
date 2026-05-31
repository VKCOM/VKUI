import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Gradient, type GradientProps } from './Gradient';

const story: Meta<GradientProps> = {
  title: 'Utils/Gradient',
  component: Gradient,
  parameters: createStoryParameters('Gradient', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

export const Playground: StoryObj<GradientProps> = (props: GradientProps) => (
  <Gradient {...props} />
);

Playground.args = {
  children: (
    <div
      style={{
        width: '100%',
        height: '200px',
      }}
    />
  ),
};

Playground.decorators = [
  (Component, context) => (
    <div
      style={{
        width: '50%',
        height: '50%',
      }}
    >
      <Component args={context.args} />
    </div>
  ),
];
