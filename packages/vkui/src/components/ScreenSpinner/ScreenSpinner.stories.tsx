import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ScreenSpinner, ScreenSpinnerProps } from './ScreenSpinner';

const story: Meta<ScreenSpinnerProps> = {
  title: 'Popouts/ScreenSpinner',
  component: ScreenSpinner,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<ScreenSpinnerProps> = (args) => <ScreenSpinner {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
