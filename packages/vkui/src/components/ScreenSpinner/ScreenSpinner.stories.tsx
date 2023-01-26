import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ScreenSpinner, ScreenSpinnerProps } from './ScreenSpinner';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Popouts/ScreenSpinner',
  component: ScreenSpinner,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('ScreenSpinner'),
    ...DisableCartesianParam,
  },
} as Meta<ScreenSpinnerProps>;

const Template: Story<ScreenSpinnerProps> = (args) => <ScreenSpinner {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
