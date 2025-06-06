import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { type MaterialSpinnerProps, Spinner } from './Spinner';

const story: Meta<MaterialSpinnerProps> = {
  title: 'Blocks/Spinner/Expressive',
  component: Spinner,
  parameters: createStoryParameters('Spinner', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<MaterialSpinnerProps>;

export const Playground: Story = {};
