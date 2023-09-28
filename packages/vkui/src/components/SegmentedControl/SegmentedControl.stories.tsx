import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl';

const story: Meta<SegmentedControlProps> = {
  title: 'Forms/SegmentedControl',
  component: SegmentedControl,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SegmentedControlProps>;

export const Playground: Story = {
  args: {
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
  },
  decorators: [
    (Component) => (
      <div style={{ width: '100%' }}>
        <Component />
      </div>
    ),
  ],
};
