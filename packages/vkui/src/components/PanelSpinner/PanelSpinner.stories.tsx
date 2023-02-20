import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { PanelSpinner, PanelSpinnerProps } from './PanelSpinner';

const story: Meta<PanelSpinnerProps> = {
  title: 'Blocks/PanelSpinner',
  component: PanelSpinner,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

const Template: Story<PanelSpinnerProps> = (args) => <PanelSpinner {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
