import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Counter, type CounterProps } from './Counter';

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
    children: (
      <>
        <VisuallyHidden>Обновлений:</VisuallyHidden> 5
      </>
    ),
  },
};
