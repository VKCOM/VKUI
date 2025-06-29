import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Spinner, type SpinnerProps } from './Spinner';

const story: Meta<SpinnerProps> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: createStoryParameters('Spinner', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<SpinnerProps>;

export const Playground: Story = {};
