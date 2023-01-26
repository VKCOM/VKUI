import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PanelSpinner, PanelSpinnerProps } from './PanelSpinner';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Blocks/PanelSpinner',
  component: PanelSpinner,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('ScreenSpinner') },
  decorators: [withCartesian],
} as Meta<PanelSpinnerProps>;

const Template: Story<PanelSpinnerProps> = (args) => <PanelSpinner {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
