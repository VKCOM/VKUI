import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ScreenSpinner, type ScreenSpinnerProps } from './ScreenSpinner';

const story: Meta<ScreenSpinnerProps> = {
  title: 'Feedback/ScreenSpinner',
  component: ScreenSpinner,
  parameters: createStoryParameters('ScreenSpinner', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    customIcon: createFieldWithPresets({
      iconSizes: ['56'],
      sizeIconsCount: 50,
    }),
  },
};

export default story;

type Story = StoryObj<ScreenSpinnerProps>;

export const Playground: Story = {};
