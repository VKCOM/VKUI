import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Counter, CounterProps } from './Counter';

const story: Meta<CounterProps> = {
  title: 'Blocks/Counter',
  component: Counter,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<CounterProps>;

export const Playground: Story = {
  args: {
    children: '5',
  },
};
