import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl';

const story: Meta<SegmentedControlProps> = {
  title: 'Forms/SegmentedControl',
  component: SegmentedControl,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<SegmentedControlProps> = (args) => <SegmentedControl {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  options: [
    {
      label: 'Баг',
      value: 'bug',
    },
    {
      label: 'Идея',
      value: 'idea',
    },
    {
      label: 'Другое',
      value: 'other',
    },
  ],
};
Playground.decorators = [
  (Component) => (
    <div style={{ width: '100%' }}>
      <Component />
    </div>
  ),
];
