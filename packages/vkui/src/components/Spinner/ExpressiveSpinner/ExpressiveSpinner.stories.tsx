import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { type SpinnerProps } from '../Spinner';
import { ExpressiveSpinner } from './ExpressiveSpinner';

const story: Meta<SpinnerProps> = {
  title: 'Feedback/Spinner/ExpressiveSpinner',
  component: ExpressiveSpinner,
  parameters: createStoryParameters('ExpressiveSpinner', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

export const Playground: StoryFn<SpinnerProps> = (props: SpinnerProps) => (
  <ExpressiveSpinner {...props} />
);
