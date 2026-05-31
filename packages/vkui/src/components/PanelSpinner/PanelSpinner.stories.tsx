import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { PanelSpinner, type PanelSpinnerProps } from './PanelSpinner';

const story: Meta<PanelSpinnerProps> = {
  title: 'Navigation/Panel/PanelSpinner',
  component: PanelSpinner,
  parameters: createStoryParameters('PanelSpinner', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

export const Playground: StoryObj<PanelSpinnerProps> = (props: PanelSpinnerProps) => (
  <PanelSpinner {...props} />
);

Playground.args = {};
