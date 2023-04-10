import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { PanelSpinner, PanelSpinnerProps } from './PanelSpinner';

const story: Meta<PanelSpinnerProps> = {
  title: 'Blocks/PanelSpinner',
  component: PanelSpinner,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<PanelSpinnerProps>;

export const Playground: Story = {};
