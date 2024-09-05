import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { ScreenSpinner, type ScreenSpinnerProps } from './ScreenSpinner';

const story: Meta<ScreenSpinnerProps> = {
  title: 'Popouts/ScreenSpinner',
  component: ScreenSpinner,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
