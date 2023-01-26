import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Progress, ProgressProps } from './Progress';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Progress',
  component: Progress,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Progress'), ...DisableCartesianParam },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as Meta<ProgressProps>;

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
