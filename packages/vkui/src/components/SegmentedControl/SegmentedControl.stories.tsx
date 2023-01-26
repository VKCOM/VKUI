import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/SegmentedControl',
  component: SegmentedControl,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<SegmentedControlProps>;

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
