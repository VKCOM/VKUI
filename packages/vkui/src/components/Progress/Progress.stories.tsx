import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Progress, ProgressProps } from './Progress';

const story: Meta<ProgressProps> = {
  title: 'Blocks/Progress',
  component: Progress,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default story;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component) => (
    <div style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}>
      <Component />
    </div>
  ),
];
