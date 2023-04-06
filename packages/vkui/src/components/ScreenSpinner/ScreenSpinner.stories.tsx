import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ScreenSpinner, ScreenSpinnerProps } from './ScreenSpinner';

const story: Meta<ScreenSpinnerProps> = {
  title: 'Popouts/ScreenSpinner',
  component: ScreenSpinner,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ScreenSpinnerProps>;

export const Playground: Story = {};
